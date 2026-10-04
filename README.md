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

Seventy-six things respond to `Space`, and the counter in the corner tracks
how many you've found:

- **12 ovens** under the benches — the door drops open onto a real cavity:
  enamel walls, a wire shelf, the elements coming up to heat, and whatever is
  baking on the tray.
- **12 fridges** down the side walls, turned in to face the prep benches —
  edge-hinged doors onto lit interiors with glass shelves, door bins and
  somebody's mousse setting.
- **12 stand mixers** — start one and the beater turns in the bowl.
- **12 taps** — run the water; it drums on the steel.
- **12 hobs** — bring the rings up to a glow.
- **3 cameras** — go live and the head pans to keep you in frame, tally light
  and all.
- **3 cloches** on the judging table, **1 bell**, **1 challenge board** that
  rewrites itself each time you read it, **2 pantries**, **3 picnic benches**
  and **3 deck chairs** out on the grass.

Ovens, taps and hobs are worked from behind the bench where the baker stands;
the oven and mixer answer from the front. The entrance flaps open by themselves
as you approach, and close behind you.

## Inside a tent, on a lawn

The point of the place is that it's a *tent*, so the outside is built as a real
location rather than a backdrop:

- The walls are translucent canvas with a clear glazed band at eye height —
  trees, hedges and sky read straight through them, sharp through the windows
  and soft through the canvas.
- You can walk out of the entrance and all the way round the outside. The lawn
  runs to a hedge boundary, with trees, flower borders, a gravel path, picnic
  benches and deck chairs.
- **Welford Park house** stands across the park to the east — red brick, stone
  quoins and dressings, a hipped slate roof with dormers and four chimney
  stacks, a lower service wing and a walled forecourt — with the church tower
  and spire beyond it, as in the photographs the tent is pitched in front of.
  The whole façade is one painted texture, which is what lets a landmark that
  size cost two draw calls.
- Clouds drift, trees sway, birds circle, dust turns over in the shafts of
  afternoon sun leaning in through the sunny wall.

The marquee skin is built as cloth rather than as flat planes. The canvas is
painted as a single welded panel — seam, stitching, slack creases, cloudy
translucency and grime gathering at the foot — and tiled so the seams land
every couple of metres, with the same artwork driving a bump map for relief.
The sheets are then subdivided and sagged between the bays, so the roof dips
slightly between every truss and the walls bow out between the posts, and a
scalloped valance hangs off all four eaves.

No two benches are laid out alike. Each is dressed from a shuffled pool of
props — bowls, flour and sugar, eggs, a rolling pin, scales, a utensil pot, a
cooling rack, tubs, a sieve, a piping bag, cake tins, an open recipe book,
jars — dropped into whatever slots the sink, hob and mixer leave free, seven
to eleven at a time. The bake might be on a stand, on a board or still in its
tin, and some bakers leave flour all over the worktop.

Every texture — timber, canvas, grass, gravel, painted shaker panels, brick,
slate, the chalkboard, bunting, tea towels, the name cards — is painted into a
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
  jump, no gravity. Head bob is `sin(step*3.1)*0.016`, paced at about 1.97 Hz
  at a 2.1 m/s walk and eased in and out rather than snapped on.
- **Fixed timestep** — physics at 60 Hz behind an accumulator with a 6-step
  guard; animation uses raw delta since it needn't be deterministic. The camera
  interpolates between the last two fixed steps, so a display running faster
  than 60 Hz doesn't judder.
- **Collision** — axis-aligned boxes in a flat array, resolved separately on X
  and Z so you slide along the benches instead of stopping dead. Linear search
  beats any spatial structure at this scale (~75 boxes).
- **Environment** — a small PMREM environment is baked from a procedural
  sky-over-grass scene, purely so metal has something to reflect. Its
  contribution is held at `envMapIntensity = 0.32`: it is a sheen, not a light.
  Materials that should see no sky at all (the inside of an oven) opt out.
- **Depth** — near plane at 0.12 over a 620 m world. The obvious 0.04 gives a
  17500:1 ratio and the depth buffer visibly fights on distant coplanar
  surfaces.
- **Interaction points** are nudged out of solid geometry after the world is
  built, so every one of the 76 is somewhere a person can actually stand.

`window.TENT` exposes the player, the camera, the prop registry and
`blocked()` for poking at it from the console.

## Credits

A fan-made homage, built from reference photographs of the Welford Park tent.
Not affiliated with the programme or its makers; the bakers' names are
invented.
