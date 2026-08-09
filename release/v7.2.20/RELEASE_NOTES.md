# CoreIdentity v7.2.20-r2 — Homepage Hero Structural Refactor

## Root cause
The three-line framework hierarchy was nested inside the left hero copy column. Previous CSS-only attempts centered it within the wrong coordinate system and later used absolute positioning, which proved brittle in landscape and desktop orientations.

## Structural correction
- Moves the framework hierarchy into a dedicated `cidg-platinum-hero-sequence` element.
- Makes that sequence span the full desktop hero width.
- Places hero copy and architecture visual in the second grid row.
- Collapses the hero naturally on tablet/mobile without absolute positioning.
- Removes the prior v7.2.19 managed responsive block.

## Typography refinement
- Desktop H1: `clamp(3rem, 4.2vw, 4.8rem)`
- Tablet H1: `clamp(2.5rem, 6vw, 3.7rem)`
- Mobile H1: `clamp(2.15rem, 8.8vw, 2.8rem)`
- Narrow handset H1: `clamp(2.05rem, 8.4vw, 2.55rem)`

## Release boundary
- Homepage JSX structure and homepage CSS only.
- No copy changes.
- No image changes.
- No CTA changes.
- No navigation changes.
- No downstream section changes.
