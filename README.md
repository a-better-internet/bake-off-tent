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

There is also **Noel**, who wanders the tent and the lawn on a fixed round and
will stop for a word. Ovens, taps and hobs are worked from behind the bench
where the baker stands; the oven and mixer answer from the front. The entrance flaps open by themselves
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

The canvas is woven as a twill — the weft steps one thread each pass, which is
what gives marquee fabric its fine diagonal grain — with welded seams, stitch
lines and the pull creases that fan off every fixing point, all of it driving a
bump map as well as the colour.

Every texture — timber, canvas, grass, gravel, painted shaker panels, brick,
slate, the chalkboard, bunting, tea towels, the name cards — is painted into a
`<canvas>` at boot. There are no image files anywhere.

## The marquee

The roof is a peaked "Capri" frame, as the real one is: four pagoda points
along the ridge with the canvas falling to a valley where the bays meet, taut
at the points and swagged between them.

One function, `canopyY(x, z)`, defines the height of the cloth at any point.
The roof mesh is built from it and **every** frame member is hung beneath it by
`curvedMember()`, which samples its run and follows the curve. That is not
decoration: a straight strut from eave to ridge passes *above* a canvas that
sags, so it pokes out through the roof — which is exactly what the earlier
version did. The lighting rig is hung from the lowest point of the cloth across
its own span for the same reason. The canvas is opaque: you should never see
sky or trees through the roof of a marquee.

## Light and lamps

Mid-afternoon: a strong warm key at about 33° elevation with the fill pulled
right down (hemisphere 0.26, ambient 0.055, environment 0.20), so the benches
cast real shadows and the canvas has tone in it instead of blowing to white.

The lamps are clamped straight onto the white roof frame on their own short
drop arms, as they are in the photographs — there are no black trusses
spanning the tent — with long white softboxes running up each slope.

## Cosiness

Festoon lights sag along both eaves and across each end, with three low warm
point lights under them and a standard lamp in the corner. There is a tea nook
by the entrance — two armchairs, a throw over one arm, a low table with an urn,
mugs and a teapot, a crate of books — faded kilim rugs down the middle and in
the corners, hurricane lanterns on the floor, bunches of dried flowers tied to
the frame, and more pots of greenery along the walls.

## The display wall

Worked up from the production photographs: tongue-and-groove panelling, the
arched fanlight in duck-egg with radial glazing bars over a backlit amber
panel, a BAKE sign in bulb-lit letters on the shelf, a dozen coloured glass
mugs on hooks, union-jack bunting, enamel plates and framed prints on the
wall, a sink and tall tap in the counter, wire baskets and stacked mixing
bowls in the open bays, and cakes on stands along the worktop.

## Out across the park

The lawn is mown in stripes. Beyond the boundary hedge — broken by a five-bar
field gate so you can see through it — there is a pond with reeds, rushes and
seven ducks drifting on it, the water rippling under a scrolling bump map.
Trees come in six kinds now: oak, beech, poplar, conifer, spring blossom and
bare winter branches. A picket fence runs along the lawn in front of the tent.

## The walker

Noel is a procedurally animated character, not a canned animation:

- **Rig** — a joint hierarchy (pelvis → torso → neck → head, shoulder → elbow →
  hand, hip → knee → ankle → foot) built from boxes, so every limb rotates
  about a real joint.
- **Gait** — the feet are driven, not the joints. Each foot gets a target: during
  stance it is pinned to the ground and tracks back at exactly walking pace;
  during swing it arcs forward on a smootherstep. The leg is then solved for
  that target with two-link IK. Posing the hip on a curve and hoping the foot
  lands right cannot work — the knee changes the leg's effective length, so the
  foot overshoots and scrubs. Measured: the planted foot drifts 3cm over a 59cm
  stance (0.05 of body travel), against 0.57 for the hand-posed version.
- **The bob is free** — the pelvis rides at whatever height the stance leg can
  reach the ground from, so the vertical oscillation of a walk falls out of the
  geometry instead of being an authored sine.
- **No foot skating** — the phase advances with *distance actually walked*, not
  with time, so when he slows, turns or is blocked the feet stay planted.
- **Navigation** — waypoints around the tent and out onto the grass, steered by
  whiskers that fan out from the desired heading and take the first one with
  clear ground. Movement resolves per axis, so he slides along furniture rather
  than stopping dead, and a stuck timer moves him on if he ever goes nowhere.
- **People** — the player counts as an obstacle in his whisker test, so he
  routes *around* someone standing in his way rather than waiting for them. He
  pauses briefly if you get right in front of him, but the pause is bounded and
  on a cooldown so it can never deadlock. The player can't walk through him
  either.
- **Clothes** — the ikat is painted at boot: concentric medallions, then every
  weft row offset sideways to give the feathered edge that makes ikat read as
  ikat. Because a box face always gets uv 0..1, each garment panel takes its own
  repeat, sized so one medallion is about 6cm of cloth wherever it lands.

Verified by driving the navigation at a fixed 60Hz for ten simulated minutes:
roughly 600m walked, **zero frames with any part of him inside geometry**, and
a longest stall of half a second even with the player parked in his path.

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
