# SBML Properties Reference

## Meta Data

| Property | Target | Values | Default | Remarks |
|----------|--------|--------|---------|---------|
| toc | section | text, image name, section id | | Table of contents entry |
| title | section | text | | |
| alt | object | text | | Alternative text |

## Layout Properties

### General Layout

| Property | Target | Suffixes | Cascade | Values | Default | Units | Remarks |
|----------|--------|----------|---------|--------|---------|-------|---------|
| clear | section/object | | | none, left, right, both | none | | |
| pack | section | | | yes, no | no | | |
| begin-new-page | section | | | yes, no | no | | |
| avoid-bottom | section | | | yes, no | no | | Implies display=block |

### Text Layout

| Property | Target | Suffixes | Cascade | Values | Default | Units | Remarks |
|----------|--------|----------|---------|--------|---------|-------|---------|
| text-indent | section | | ✓ | length | 0 | px, em | |
| text-align | section | | ✓ | justified, left, center, right | justified | | |
| text-justify | section | | ✓ | auto, distribute-all-lines | auto | | Used when text-align=justified |
| vertical-align | section/style | | | baseline, top, middle, bottom | baseline | | |
| line-height | section | | ✓ | length | | px, em | |
| line-spacing | section | | ✓ | length | 0 | px, em | |
| paragraph-spacing | section | | ✓ | length | 0 | px, em | |
| spacing | section | | ✓ | length | 0 | px, em | 1 or 2 values |
| spacing-no-scale | section | | ✓ | yes, no | no | | |
| empty-line-height | section | | ✓ | length | 1em | px, em | |
| line-break-mode | section | | ✓ | auto, word-wrap, character-wrap | auto | | |

### Box Model

| Property | Target | Suffixes | Values | Default | Units | Remarks |
|----------|--------|----------|--------|---------|-------|---------|
| margin | section/object | | length | 0 | px, em, % | Side-value syntax: "1em", "1em 20", "1em 1.5em 0 1.2em" |
| margin-top | section/object | | length | 0 | px, em, % | |
| margin-bottom | section/object | | length | 0 | px, em, % | |
| margin-left | section/object | verso, recto | length | 0 (0.2em) | px, em, % | |
| margin-right | section/object | verso, recto | length | 0 | px, em, % | verso/recto only for objects |
| padding | section/object | | length | 0 | px, em, % | Side-value syntax |
| padding-top | section/object | | length | 0 | px, em, % | |
| padding-bottom | section/object | | length | 0 | px, em, % | |
| padding-left | section/object | | length | 0 (1.5em) | px, em, % | Default 1.5em when display=list |
| padding-right | section/object | | length | 0 | px, em, % | |

### Page Layout

| Property | Target | Suffixes | Cascade | Values | Default | Remarks |
|----------|--------|----------|---------|--------|---------|---------|
| page-side | section/object | | | auto, verso, recto | auto | verso=left, recto=right |
| page-margin-top | section (page) | | | length | | |
| page-margin-bottom | section (page) | | | length | | |
| page-header-hidden | section (page) | | | yes, no | no | |
| page-footer-hidden | section (page) | | | yes, no | no | |
| page-footer-color | section (page) | | | color | #606060 | |
| page-number-color | section (page) | | | color | #101010 | |

### Multi-Column Layout

| Property | Target | Values | Default | Units | Remarks |
|----------|--------|--------|---------|-------|---------|
| page-column-count | section | 1 ~ 9 | 1 | | |
| page-column-gap | section | length | 1.5em | px, em, % | |
| page-column-ratio | section | ratio | "1:1" | | e.g., "1:1", "6:4", "2:3:4" |

### Object Positioning

| Property | Target | Suffixes | Values | Default | Units | Remarks |
|----------|--------|----------|--------|---------|-------|---------|
| display | section | | section, block, list, list-item, table, none | section | | |
| display | object | | block, none | block | | |
| position | object | | static, top, bottom, absolute | static | | top/bottom always behaves as adaptive=yes |
| align | object | verso, recto | center, left, right | center | | For position=static/top/bottom; center not available with flow=yes |
| adaptive | object | | yes, no | no | | Only for position=static |
| shut-in-adaptives | section | | yes, no | no | | |
| flow | object | | yes, no | no | | |
| flow-mode | object | | object-wrap, content-wrap | object-wrap | | |
| gravity | object | | left-top, left-bottom, right-top, right-bottom, top, right, bottom, left, center | left-top | | Only for position=absolute |
| x | object | | length | 0 | px, em, % | Only for position=absolute |
| y | object | | length | 0 | px, em, % | Only for position=absolute |
| width | object | | length | 100 | px, em, % | |
| height | object | | length | 100 | px, em, % | |

## Rendering Properties

### Visibility

| Property | Target | Cascade | Values | Default |
|----------|--------|---------|--------|---------|
| hidden | section | ✓ | yes, no | no |

### Colors & Backgrounds

| Property | Target | Suffixes | Cascade | Values | Default | Remarks |
|----------|--------|----------|---------|--------|---------|---------|
| background-color | section/object | | | color | transparent | |
| background-image | section/object | | | image name | | |
| background-image-type | section/object | | | stretch, pattern, 3-patch, 9-patch | stretch | |
| page-background | section (page) | verso, recto | ✓ | image name, color | | |
| page-background-color | section (page) | verso, recto | ✓ | color | | |
| page-background-image | section (page) | verso, recto | ✓ | image name | | |
| page-background-image-type | section (page) | | | stretch, pattern, 3-patch, 9-patch | | |

### Text Rendering

| Property | Target | Cascade | Values | Default | Remarks |
|----------|--------|---------|--------|---------|---------|
| text-color | section/style | ✓ | color | #000000 | |
| text-decoration | section/style | | none, underline, overline, line-through, side-dot, ... | none | e.g., "underline-4-#f00" |
| highlight-color | section/style | ✓ | color | transparent | |

### Font Properties

| Property | Target | Cascade | Values | Default | Units | Remarks |
|----------|--------|---------|--------|---------|-------|---------|
| font | section/style | ✓ | [weight] [style] size family | | | e.g., "bold 1.2em sans-serif", "0.7 monospace" |
| font-family | section/style | ✓ | serif, sans-serif, monospace, ... | serif | | Comma-separated: "맑은 고딕, 굴림, sans-serif" |
| font-size | section/style | ✓ | length | 1.0 | em | |
| font-weight | section/style | ✓ | normal, bold | normal | | |
| font-style | section/style | ✓ | normal, italic | normal | | |
| font-no-scale | section/style | ✓ | yes, no | no | | |
| font-no-fullwidth-bracket | section/style | ✓ | yes, no | no | | |

### Borders

| Property | Target | Values | Default | Units | Remarks |
|----------|--------|--------|---------|-------|---------|
| border-width | section/object | length | 0 | px, em, % | Side-value syntax |
| border-top-width | section/object | length | 0 | px, em, % | |
| border-bottom-width | section/object | length | 0 | px, em, % | |
| border-left-width | section/object | length | 0 | px, em, % | |
| border-right-width | section/object | length | 0 | px, em, % | |
| border-color | section/object | color | #000000 | | |
| border-top-color | section/object | color | #000000 | | |
| border-bottom-color | section/object | color | #000000 | | |
| border-left-color | section/object | color | #000000 | | |
| border-right-color | section/object | color | #000000 | | |
| border-style | section/object | solid, stitch, dotted, dashed, dash-?-?... | solid | | Side-value syntax: "solid stitch" |
| border-top-style | section/object | solid, stitch, dotted, dashed, dash-?-?... | solid | | |
| border-bottom-style | section/object | solid, stitch, dotted, dashed, dash-?-?... | solid | | |
| border-left-style | section/object | solid, stitch, dotted, dashed, dash-?-?... | solid | | |
| border-right-style | section/object | solid, stitch, dotted, dashed, dash-?-?... | solid | | |

### Effects

| Property | Target | Values | Default | Units | Remarks |
|----------|--------|--------|---------|-------|---------|
| box-shadow | section/object | offset-x offset-y [blur] [spread] [color] | none | length/color | Similar to CSS box-shadow; no inset, single shadow only |

### List Bullet Rendering

| Property | Target | Values | Default | Remarks |
|----------|--------|--------|---------|---------|
| bullet-text | section | formatted text | %n. | For display=list/list-item; Variables: %n, %i, %I |
| bullet-text-color | section | color | (section's text-color) | For display=list/list-item |
| bullet-text-align | section | left, right | right | For display=list/list-item |
| bullet-font | section | [weight] [style] size family | (section's font) | For display=list/list-item |
| bullet-font-family | section | serif, sans-serif, monospace, ... | (section's font-family) | For display=list/list-item |
| bullet-font-size | section | length | (section's font-size) | For display=list/list-item |
| bullet-font-weight | section | normal, bold | (section's font-weight) | For display=list/list-item |
| bullet-font-style | section | normal, italic | (section's font-style) | For display=list/list-item |
| bullet-font-no-scale | section | yes, no | (section's font-no-scale) | For display=list/list-item |

## Notes

### Cascade
Properties marked with ✓ in the Cascade column inherit from parent sections.

### Suffixes
- **verso, recto**: Left/right page variants (verso=left, recto=right)

### Units
- **px**: Pixels (absolute)
- **em**: Relative to font size
- **%**: Percentage (layout-relative)

### Side-value Syntax
Properties like `margin`, `padding`, `border-width`, `border-style` support CSS-like side values:
- 1 value: all sides
- 2 values: top/bottom left/right
- 4 values: top right bottom left
