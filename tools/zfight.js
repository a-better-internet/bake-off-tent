// Find the geometry that z-fights, before a GPU does.
//
// Two opaque faces in the same plane flicker: which one wins is decided by
// rounding in the depth buffer, so it changes with the angle, the distance
// and the machine. It is the commonest way for a room to look broken.
//
// This fires rays out of a handful of standing points and reports every pair
// of parallel surfaces that sit within EPS of each other along a ray, grouped
// by the two materials involved, so you can go and find them.
//
//   node tools/zfight.js '[[9,3.2,-69],[9,3.2,-74.5]]'        # x,y,z to stand at
//   EPS=0.004 node tools/zfight.js '[...]'                    # how close is too close
//
// It wants the page served (python3 -m http.server 8765) and playwright
// installed. The rule: keep parallel faces at least 2cm apart, or make one of
// them not exist. Run this after any change to the architecture.
const { chromium } = require('playwright');
const EPS = +(process.env.EPS || 0.004);
const SPOTS = JSON.parse(process.argv[2] || '[]');
(async () => {
  const b = await chromium.launch({ args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
  const p = await b.newPage({ viewport:{ width:320, height:240 } });
  await p.goto('http://127.0.0.1:8765/index.html', { waitUntil:'load', timeout:240000 });
  const r = await p.evaluate(([spots, eps]) => {
    const T = window.TENT; T.begin();
    const rc = new THREE.Raycaster(); rc.far = 26;
    const found = new Map();
    for(const [sx, sy, sz] of spots){
      const o = new THREE.Vector3(sx, sy, sz);
      for(let i=0;i<340;i++){                       // rays over the whole sphere
        const u = Math.random()*2 - 1, a = Math.random()*6.283, w = Math.sqrt(1 - u*u);
        rc.set(o, new THREE.Vector3(w*Math.cos(a), u, w*Math.sin(a)));
        const hits = rc.intersectObjects(T.scene.children, true);
        for(let k=1;k<hits.length;k++){
          const d = hits[k].distance - hits[k-1].distance;
          if(d > eps) continue;
          const n0 = hits[k-1].face && hits[k-1].face.normal, n1 = hits[k].face && hits[k].face.normal;
          if(!n0 || !n1 || Math.abs(n0.dot(n1)) < 0.98) continue;   // parallel only
          const col = (h) => { const m = h.object.material, q = Array.isArray(m) ? m[0] : m;
            return q && q.color ? '#' + q.color.getHexString() : '?'; };
          const ax = Math.abs(n1.x) > .7 ? 'x' : Math.abs(n1.y) > .7 ? 'y' : Math.abs(n1.z) > .7 ? 'z' : '?';
          const key = [col(hits[k-1]), col(hits[k])].sort().join(' / ') + '  (' + ax + ')';
          const pt = hits[k].point;
          const e = found.get(key) || { pairs:0, where:[] };
          e.pairs++;
          if(e.where.length < 3) e.where.push([+pt.x.toFixed(2), +pt.y.toFixed(2), +pt.z.toFixed(2)]);
          found.set(key, e);
        }
      }
    }
    return [...found.entries()].sort((a2, b2) => b2[1].pairs - a2[1].pairs)
      .map(([k, v]) => ({ materials:k, rays:v.pairs, at:v.where }));
  }, [SPOTS, EPS]);
  console.log(r.length ? JSON.stringify(r, null, 1) : 'no coplanar pairs within ' + EPS + 'm');
  await b.close();
})();
