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

Seventy-seven things respond to `Space`, and the counter in the corner tracks
how many you've found:

- **12 ovens** built in under the hobs, on the baker's side — a slide-and-hide
  door that drops flat and then slides away under the oven, onto a real
  cavity: enamel walls, a fan, a wire shelf, the element coming up to heat,
  and whatever is baking on the tray. The glass is see-through, so with the
  light on you can crouch and watch it rise.
- **12 fridges** down the side walls — rounded, pillowy retro fridges with a
  chunky chrome handle, turned in to face the prep benches, opening onto lit
  interiors with a freezer box, glass shelves, door bins and somebody's
  mousse setting.
- **12 stand mixers** — tilt-head, in enamel colours, with a chrome hub cap,
  a steel bowl and a flat beater that turns.
- **12 taps** — a tall swan neck over an inset stainless sink and drainer;
  run the water and it drums on the steel.
- **12 hobs** — black ceramic glass; the zones glow red under the glass.
- **3 cameras** — go live and the head pans to keep you in frame, tally light
  and all.
- **3 cloches** on the judging table, **1 bell**, **1 challenge board** that
  rewrites itself each time you read it, **2 pantries**, **3 picnic benches**
  and **3 deck chairs** out on the grass.

There is also **Noel**, who wanders the tent and the lawn on a fixed round and
will stop for a word. Everything on a bench is worked from the baker's side,
where it would be: stand there and *look at* the thing you want — the tap,
the hob, the oven door or the mixer — and that is what `Space` works. The
entrance flaps open by themselves as you approach, and close behind you.

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

The marquee skin is clean, taut PVC: a fine twill you only see up close, a
little cloudiness where the light comes through unevenly, and a welded seam
every couple of metres. Overhead, against the sun, a seam is double thickness
and reads as a slightly darker line — which is how a marquee roof looks from
inside. The skin is translucent, so the slope and the wall that face the sun
glow brighter from inside than the ones in shade; that glow rides in the
vertex colour and drives the emissive term only. The sheets are subdivided
and sagged between the bays, and a scalloped valance hangs off all four eaves.

## The benches

Each bench is laid out the way a working kitchen island is, and the way the
show's are:

- **Painted shaker cabinetry** with real geometry — every door is a frame of
  rails and stiles round a recessed panel with a bead, not a picture of one —
  four doors to the judges' side, a tall panel on each end, a pair under the
  sink and a stack of drawers with cup handles beside the oven.
- **A chunky oak worktop** with the sink cut right through it.
- **The sink**: a pressed stainless top with drainer flutes running down to
  an inset bowl — straight sides, a tight radius into a flat floor, a chrome
  waste — and a swan-neck tap behind it with its lever on the side.
- **The hob** over the oven, the **oven** under it, the **mixer** at the back
  corner turned three-quarters on, the way it is always shot.
- **Ingredients in storage jars** along the back with the utensil crock,
  scales or a stack of bowls; the day's work spread across the front — a board
  and rolling pin, a bowl on the go, eggs, a jug, a sieve, the recipe — and the
  bake itself on a stand at the judges' end. A tea towel hangs on a rail on
  the end of the bench and another over the edge of the worktop.

No two are dressed alike: the jars, the back row and the work in progress are
drawn from shuffled pools, and some bakers leave flour all over the worktop.

Every texture — timber, canvas, grass, gravel, painted shaker panels, brick,
slate, the chalkboard, bunting, tea towels, the name cards — is painted into a
`<canvas>` at boot. There are no image files anywhere.

## Trees, hedges and turf

- **Trees** are grown, not placed: a tapered, flared trunk forks into three or
  four great limbs at different heights; every lobe of the crown is fed by a
  branch off the nearest limb; and each lobe is hundreds of leaf-cluster cards
  cut from a painted atlas over a dense dark core, so you never see sky
  straight through the middle. The cards carry normals pointing out of the
  crown, which is what makes a cloud of quads light like a rounded mass of
  foliage. Nine species — oak, beech, horse chestnut, lime, silver birch,
  Lombardy poplar, cedar of Lebanon in level plates, Scots pine and a weeping
  willow at the pond — all share one leaf material, tinted per species through
  vertex colour. The canopies move in the wind in their own vertex shader, and
  cast dappled shadows.
- **Hedges** are clipped: a rounded profile swept along the run, pushed about
  by noise, faced with a leaf texture and its bump map, with leaf cards
  bristling off it so the outline is soft rather than ruled.
- **The lawn** is shaded in world space, the blade texture sampled at two
  scales so it never visibly tiles, with slow tonal drift over it and the
  mower's stripes — only inside the hedges. Close to, it is real grass:
  instanced tufts rolled one way in the light stripes and the other in the
  dark (which is what makes stripes), and longer, uncut grass along the foot of
  the hedges and the tent skirt.
- **Beyond the hedge** the park rolls up into the downs, in a loose patchwork
  of pasture and hay, with copses and woodland belts on the rising ground.

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

The lamps are studio fresnels — round housings with cooling fins, a lens and
four barn doors — clamped straight onto the white roof frame on their own
short drop arms and tipped down at the benches, as they are in the
photographs. There are no black trusses spanning the tent. The frame itself
is powder-coated white, and the floor is pale limed oak boards.

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
seven ducks drifting on it, the water rippling under a scrolling bump map, and
a weeping willow trailing into it.

## The walker

Noel is a procedurally built and procedurally animated character:

- **Head** — a sphere sculpted by a relief function: a long face narrowing to
  the jaw, high cheekbones with hollows under them, a brow ridge, a nose with
  a defined tip and nostril wings, a wide thin upper lip and a fuller lower one,
  a long chin. The eye openings are real holes: the vertices inside each almond
  are slid out onto its rim, so the lids have a clean edge, and an eyeball with
  a painted iris sits in the socket behind. The kohl, the smoky lids, the
  lips with the smirk lifting one corner are painted onto the head through
  its own uv mapping, so they land on the sculpt.
- **Hair** — a shell grown over the skull: an inflated dome on top that falls
  straight past the ears to the jaw, cut to a heavy fringe at the brows in
  front, each column its own length so fringe, temples and back are one
  haircut; strand texture with ragged alpha-cut ends; and fine choppy strands
  over it to break the outline. Dark, strong brows.
- **Clothes** — a black roll-neck, and a slim ikat suit: a lofted jacket open
  in a V to the button, with lapels and pocket flaps, tapered sleeves and
  trousers, every panel's uv measured in metres of cloth so the medallions are
  the same size wherever they fall and one material dresses the lot. Hands
  with fingers and silver rings; Chelsea boots with a stacked heel.
- **Rig** — a joint hierarchy (pelvis → torso → neck → head, shoulder → elbow →
  hand, hip → knee → ankle), so every limb rotates about a real joint. Each
  segment's parts are batched into it, so the whole man costs a few dozen
  draw calls.
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
- **The cloth** — the ikat is painted at boot: concentric medallions, then
  every weft row offset sideways to give the feathered edge that makes ikat
  read as ikat.

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
  beats any spatial structure at this scale (under a hundred boxes).
- **Environment** — a small PMREM environment is baked from a procedural
  sky-over-grass scene, purely so metal has something to reflect. Its
  contribution is held at `envMapIntensity = 0.20`: it is a sheen, not a light.
  Polished steel and chrome take more; materials that should see no sky at all
  (the inside of an oven) opt out.
- **Static batching** — once the world is built, every mesh that never moves
  is folded, per material (identical materials are recognised and shared),
  into a few large meshes, split by patch of ground so culling still works.
  Things that move are batched inside themselves: an oven door, a fridge door,
  a camera head, each of Noel's limbs. The tent went from about 4,900 draw
  calls to about 750 while gaining a great deal of detail.
- **Depth** — near plane at 0.12 over a 620 m world. The obvious 0.04 gives a
  17500:1 ratio and the depth buffer visibly fights on distant coplanar
  surfaces.
- **Interaction points** are nudged out of solid geometry after the world is
  built, so every one of the 77 is somewhere a person can actually stand. Where
  several share a spot, the one you are looking at wins.

`window.TENT` exposes the player, the camera, the prop registry, `blocked()`
and `pickProp()` for poking at it from the console, plus `freeze()`, `step()`
and `renderFrame()` for deterministic screenshots.

## Credits

A fan-made homage, built from reference photographs of the Welford Park tent.
Not affiliated with the programme or its makers; the bakers' names are
invented.
