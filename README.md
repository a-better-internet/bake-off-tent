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
| `N` | send Noel off, and bring him back |
| `Space` (in a chair) | sit down, and get up again |
| `1` | back to first person |
| wheel | zoom, 45°–95° |
| `H` | hide the key card |

On a touch screen: one finger looks, the on-screen pad walks, `USE` interacts.

## What's in there

Ninety-five things respond to `Space`, and the counter in the corner tracks
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
- **3 cloches** on the judging table, **1 bell**, **2 pantries**,
  **3 picnic benches** and **3 deck chairs** out on the grass.
- **The ducks**, from the end of the jetty down at the pond: throw them
  something and every duck on the water paddles over.
- **Chairs you can actually sit in** — the deckchairs, the picnic benches,
  the armchairs in the tea nook, the bench by the pond, the bench on the
  house terrace, the four chairs round the judges' table and the wing chairs
  in the drawing room and the morning room. `Space` eases
  you down into the seat and takes the controls; `Space` again, or any
  attempt to walk, gets you up. A deckchair puts your eye less than a metre
  off the grass and tips your head back, which is the point of a deckchair.

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
  runs to a hedge boundary, with trees, cottage-garden borders (dark mounded
  soil in timber edging, foxgloves and lupins standing up out of the clumps),
  a gravel path, and garden furniture in weathered, silvered timber:
  pub-garden picnic tables with splayed A-frame legs and gaps between the
  boards, and proper striped deckchairs — a back frame and a seat frame that
  cross and pivot, a notched strut, round rails, and the canvas slung from the
  top rail to the front one so it sags into a seat.
- **The judges' tent** stands right away behind the marquee, on the opposite
  side from the entrance, with no path to it — the judges are driven round the
  back. It is a square pagoda with one
  tall point, a scalloped valance, union jacks along the eaves and big clear
  windows, on a raised timber deck with packers under it. Inside is somebody's
  kitchen — tongue-and-groove, a scrubbed farmhouse table and four painted
  chairs, a duck-egg dresser of crockery, a chest of drawers marked *Tin*,
  copper jelly moulds on the wall, herbs in wooden troughs, a cake dome and a
  jug of flowers.
- **Through the field gate** in the west hedge — a pair of five-bar gates that
  swing open as you come up — a trodden path runs across a paddock of long
  meadow grass and wild flowers to the pond.
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
slate, marble, old portraits, bunting, tea towels, the name cards — is painted into a
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

## Welford Park

Across the park to the south stands the house, and you can walk to it — and
into it. The house faces the tent square on: step out of the entrance and it
is straight ahead of you, through a gap in the south hedge between two stone
piers, then a gravel walk between an avenue of limes, dead straight, with
nothing standing in it. At the far end the walk runs into the foot of the
terrace steps and the steps run up to the front door. It is the walk the
bakers come down every morning, and it works in both directions: from the top
of the steps you look back down the avenue at the tent.

- **The house** is red brick of seven bays and three storeys, its middle
  three breaking forward under a great white pediment. Every window is a real
  twelve-pane sash in a brick reveal, with a stone sill and a flat arch over
  it; there are quoins up every corner, a modillion cornice, a hipped slate
  roof with dormers in it, four chimney stacks with pots, a pedimented
  doorcase on consoles with a fanlight, a lower service wing and ivy up the
  east end.
- **The terrace and the steps.** The house stands on a raised terrace behind
  an old brick retaining wall, and a flight of stone steps comes down off it
  to the park — flanked by banks of planting and lined with terracotta pots,
  as in the photographs. The ground really is higher up there: a height
  function lifts you as you climb, so you walk up onto the terrace rather
  than through it. There is a bench at the top, looking down the park at the
  tent.
- **Inside.** The front door opens as you come up to it and you can walk in.
  The ground floor is the one the Grade I listing describes, laid out round a
  spine: a flagged **vestibule** with fielded panelling and three arches into
  the **staircase hall**; the **drawing room** and **library** on one side, the
  **dining room** and **morning room** on the other. Doorways connect them, so
  you can walk a circuit of the whole floor and back out again.
  - The **front door** opens inwards as you come up to it, and from the step
    you look straight down the vestibule, under the hanging lantern, through
    the centre arch and into the staircase hall.
  - The **stair** is the one in the listing: two flights and a landing round an
    open well, rising twenty risers to the first floor. Treads with nosings on
    closed strings, plastered soffits underneath, turned balusters standing on
    the treads, panelled newels with ball finials, an oak handrail, a gallery
    round the well at the top and a domed top-light over it, with a lantern on
    the roof outside to match. You can walk into the well and look up it; the
    flights themselves are roped off.
  - **Chimneypieces**, one to a room, each with a breast standing proud of the
    wall, a slip and hearth, a grate and a fire nearly out: twisted columns in
    the drawing room, black marble in the library, paired colonnettes in the
    dining room, a plain painted one in the morning room. All but the last
    have an overmantel glass in a gilt frame.
  - **Rococo pelmets** over the windows on the garden front and the east side,
    as the listing has them, with shutters folded back into the reveals and a
    window board under each sill.
  - Fielded panelling with a dado and cornice all round, and each room hung as
    it would be: **oak** in the vestibule, the staircase hall and the library,
    sage green in the drawing room, deep red in the dining room, ochre in the
    morning room, with the joinery painted off-white against it.
  - Oak boards underfoot and stone flags in the vestibule, painted portraits in
    gilt frames, candle chandeliers on sweeping arms, a long-case clock,
    bookcases full of books, a laid dining table with splat-back chairs, sofas
    and wing chairs. Two of the wing chairs you can sit in.
  - The rooms light themselves as you walk through them, and the windows on
    the ground floor are glazed clear, so you can see out of the house as well
    as into it.

  Worked from the Historic England Grade I listing (vestibule: fielded
  panelling and a fireplace with paired colonnettes; staircase hall: three
  flights, turned balusters, domed top-light; drawing room: rococo pelmets and
  a fireplace with twisted Corinthian columns; library: rococo pelmets and a
  marble fireplace), plus the house's own history — about 1652, remodelled by
  Thomas Archer around 1700, interior much altered in 1840. It is an
  impression of the place, not a survey: the vestibule here is too narrow
  between its two doorways to hold the colonnetted chimneypiece, so the dining
  room has it.
- **St Gregory's** is through the trees to the west, square on to the tent as
  the house is, with the round Norman
  tower Welford is known for: a tall flint drum with round-headed windows, a
  shorter stone octagon above it on coupled columns and blind arcading, clock
  faces north and south, and a stone spire with gabled lucarnes round its
  foot. Flint nave and chancel, stepped lancets in the east wall, a south
  porch, a flint churchyard wall, a lychgate and headstones leaning in the
  grass.

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

The lawn is mown in stripes. Beyond it, through the field gate, the paddock is
left long — straw among the green, seeding grasses, buttercups, ox-eye daisies,
clover and cow parsley — closed in by untidy field hedgerows.

**The pond** is set into the ground, not painted on it: a grassy lip, a muddy
margin sloping down to the waterline, a shelf of shallows, then deep water.
The water is clear and brown over the shallows and dark in the middle, and it
**reflects** — when you are out on that side of the garden the scene is drawn
a second time from a camera mirrored in the water plane, and the pond samples
that picture through its ripples, more strongly the lower you look across it,
so the willows, the sky and the ducks all hang upside down in it. Round it:
clumps of reeds that move in the wind, bulrushes, yellow flag iris, drifts of
water lilies with a few in flower, mossy stones half sunk in the bank, two
weeping willows, a chestnut and a birch, a weathered jetty with a rail and a
lifebuoy, a floating duck house, and a bench looking out over the water.

On the water there is also **a clinker rowing boat** tied to the jetty, which
lifts on her line; **a grey heron** standing in the shallows, who turns his
head to watch you and keeps watching; **moorhens** fussing along the margin;
**dragonflies** hanging and darting over the open water; and **fish** that
rise, break the surface and leave rings. A **brook** runs in from the west
over a bed of silt and stones, with a plank bridge over it.

The **ducks** are mallards — drakes with bottle-green heads, white collars,
chestnut breasts, grey flanks and the blue speculum; mottled brown hens — and
one hen with five ducklings in a line behind her. Each paddles off towards a
spot of its own choosing, turns gently, now and then stops to dabble (head
under, tail up), and pushes out a wake as it goes; rings spread on the water
where something rises. Feed them from the jetty and they all come over.

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

## Keeping surfaces apart

Two opaque faces in the same plane flicker. Which one wins is decided by
rounding in the depth buffer, so it changes with the angle, the distance and
the machine — and a room full of it looks broken. The rule here is: **parallel
faces are kept at least 2cm apart, or one of them is deleted.** A wall has one
surface, not a brick leaf and a plaster skin in the same plane; a plinth stops
short of the floor it carries; a partition runs a little past the ceiling and
a little below the floorboards rather than meeting them exactly; an architrave
laps over the reveal it frames instead of finishing flush with it.

`tools/zfight.js` finds the ones that slip through. It fires rays out of a
list of standing points and reports every pair of parallel surfaces within a
few millimetres of each other, grouped by the materials involved:

```bash
python3 -m http.server 8765 &
node tools/zfight.js '[[9,3.2,-69],[9,3.2,-74.5],[13,3.2,-70],[4,3.2,-77]]'
```

Run it after anything that changes the architecture.

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
  beats any spatial structure at this scale (about a hundred boxes).
- **Environment** — a small PMREM environment is baked from a procedural
  sky-over-grass scene, purely so metal has something to reflect. Its
  contribution is held at `envMapIntensity = 0.20`: it is a sheen, not a light.
  Polished steel and chrome take more; materials that should see no sky at all
  (the inside of an oven) opt out.
- **Sitting down** is a pose, not an animation: a seat records where you end
  up, which way you face, how high your eye is and how far back you lean, and
  the player eases between standing and sitting. The controls are taken away
  while you are in it, which is what makes getting up feel like a decision.
- **Ground height** — the world is flat except where it isn't. `groundAt()`
  returns the height under any point, which is how the house terrace can be
  1.1m up with a walkable flight of steps onto it, and the grass knows to
  stand on the terrace rather than under it.
- **Rotated colliders** — the house and church do not stand square to the
  world, so their colliders carry their own angle and are tested in their own
  frame, rather than being approximated by a staircase of boxes.
- **Shadows go where you go** — the sun's shadow map covers 80m round the
  player, so the pond gets shadows as well as the tent; its centre steps a
  whole shadow texel at a time in the light's own frame, so edges don't crawl
  as you walk.
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
  built, so every one of the 93 is somewhere a person can actually stand. Where
  several share a spot, the one you are looking at wins.

`window.TENT` exposes the player, the camera, the prop registry, `blocked()`
and `pickProp()` for poking at it from the console, plus `freeze()`, `step()`
and `renderFrame()` for deterministic screenshots.

## Credits

A fan-made homage, built from reference photographs of the Welford Park tent.
The house and church are worked from photographs and from the Historic
England Grade I listing for *Welford Park and Walls to East and West* (list
entry 1264078), the Welford Park estate's own history pages, and the
Wikipedia article on the house. Not affiliated with the programme or its
makers; the bakers' names are invented.
