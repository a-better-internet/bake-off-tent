# The Tent

A browser-based, first-person walkabout inside a Great British Bake Off–style
marquee. Twelve benches, a cold store down each wall, a sunburst fanlight over
the display counter — and a lawn you can actually walk out onto.

No build step, no asset pipeline, no network needed. Open it and you're in.

## Running it

```bash
# from this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Any static server works. A plain `file://` open usually works too, but a
server is the reliable path (some browsers refuse relative scripts over
`file://`).

`vendor/three.min.js` is Three.js r128, committed so the game runs offline.
If it's ever missing, the page falls back to a CDN copy, and says so plainly
if neither is reachable.

## Controls

| | |
|---|---|
| `W` `A` `S` `D` / arrows | walk |
| `Shift` | hurry |
| drag, or click | look around (pointer lock if the browser allows it, click-drag otherwise) |
| `Space` | open / use whatever you're standing next to |
| `O` | floor plan (top-down, roof lifted off) |
| `3` | dolly view (3/4 isometric, roof lifted off) |
| `1` | back to first person |
| wheel | zoom, 45°–95° |
| `H` | hide the key card |

On a touch screen: one finger looks, the on-screen pad walks, `USE` interacts.

## What's in there

Forty things respond to `Space`, and the counter in the corner tracks how many
you've found:

- **12 ovens** under the benches — the doors drop open and the inside lights up
  on whatever is proving in there.
- **12 stand mixers** — start one and the beater turns in the bowl.
- **12 fridges** against the side walls — they light up when opened.
- **3 cloches** on the judging table — lift one to see what's underneath.
- **1 bell** — ring it for the line you're expecting.

The entrance flaps open by themselves as you approach, and close behind you.

## Inside a tent, on a lawn

The point of the place is that it's a *tent*, so the outside is built as a real
location rather than a backdrop:

- The walls are translucent canvas with a clear glazed band at eye height —
  trees, hedges and sky read straight through them, sharp through the windows
  and soft through the canvas.
- You can walk out of the entrance and all the way round the outside. The lawn
  runs to a hedge boundary, with trees, flower borders, a gravel path, picnic
  benches and deck chairs; hills and a church spire sit on the horizon.
- Clouds drift, trees sway, birds circle, dust turns over in the shafts of
  afternoon sun leaning in through the sunny wall.

Every texture — timber, canvas weave, grass, gravel, painted shaker panels,
the chalkboard, bunting, tea towels, the name cards — is painted into a
`<canvas>` at boot. There are no image files anywhere.

## How it's built

One file, one IIFE, following the house engine style guide:

- **Renderer** — `WebGLRenderer`, PCF soft shadows, sRGB output,
  `NoToneMapping`, so painted colours stay literal. Light intensities are kept
  conservative; nothing is allowed to blow out to white.
- **Cameras** — a 70° first-person `PerspectiveCamera` driven each frame from
  `player.pos` + `eye` + `bob`, plus an `OrthographicCamera` for the two
  alt views. The roof, the lighting rig and the dust hide in those views, and
  the canvas walls drop to near-transparent, so they read as a dolls' house.
- **Player** — a vertical cylinder sliding along the floor at fixed height. No
  jump, no gravity. Head bob is `sin(step*3.1)*0.025`.
- **Fixed timestep** — physics at 60 Hz behind an accumulator with a 6-step
  guard; animation uses raw delta since it needn't be deterministic.
- **Collision** — axis-aligned boxes in a flat array, resolved separately on X
  and Z so you slide along the benches instead of stopping dead. Linear search
  beats any spatial structure at this scale (~75 boxes).
- **Environment** — a small PMREM environment is baked from a procedural
  sky-over-grass scene, purely so metal has something to reflect. Its
  contribution is held at `envMapIntensity = 0.32`: it is a sheen, not a light.

`window.TENT` exposes the player, the camera, the prop registry and
`blocked()` for poking at it from the console.

## Credits

A fan-made homage, built from reference photographs of the Welford Park tent.
Not affiliated with the programme or its makers; the bakers' names are
invented.
