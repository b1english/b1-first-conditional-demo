# NPC Animation Assets

This folder contains reusable HTML-friendly NPC animation assets generated from the static PNG files in `../../NPCs`.

## Files

- `*-body.png`: transparent runtime PNGs, scaled and trimmed so the feet sit on the actor baseline.
- `npc-actors.css`: reusable breathing, walk-in, and walk-translation animations.
- `npc-actors.js`: tiny helper that creates the required actor DOM structure.
- `npc-manifest.json`: NPC metadata for external tooling.

## Basic Usage

```html
<link rel="stylesheet" href="assets/npcs/npc-actors.css">
<script src="assets/npcs/npc-actors.js"></script>

<div id="npc-slot"></div>
<script>
  NpcActors.mount("#npc-slot", {
    id: "mico-cat",
    mode: "idle",
    width: 128
  });
</script>
```

## Animation Modes

- `idle`: whole-character breathing.
- `talking`: faster whole-character breathing for dialogue moments.
- `walk-in-left`: one-shot entrance from the left.
- `walk-in-right`: one-shot entrance from the right.
- `walk-forward`: one-shot forward approach.
- `walk-left`: one-shot horizontal translation left.
- `walk-right`: one-shot horizontal translation right.
- `still`: no animation.

## Adjustable Options

```js
NpcActors.mount("#npc-slot", {
  id: "hubiya-fox",
  mode: "walk-forward",
  width: 150,
  pathX: "96px",
  pathY: "30px",
  duration: "2.4s"
});
```

This version intentionally uses a single complete PNG per NPC. Breathing is anchored at the feet, so the characters do not float upward during idle animation. It avoids split-sprite upper-body motion because single-image crop layers can reveal seams or misalignment on some character art. For true independent head or torso motion, provide layered character parts such as head, torso, arms, and lower body.
