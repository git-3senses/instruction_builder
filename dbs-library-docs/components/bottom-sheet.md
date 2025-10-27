# Bottom Sheet Component

> Adaptive panel used primarily for dropdowns on mobile; supports two-way opened state, overlay, search/header/footer slots

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsBottomSheetComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsBottomSheetComponent],
})
export class BottomSheetHost {}
```

---

## Basic Usage

```html
<dbs-bottom-sheet
  [(opened)]="opened"
  [title]="'Sheet Title'"
  [subtitle]="'Sheet Subtitle'"
  [hasOverlay]="true"
  [componentMaxHeight]="'95vh'">
  <div searchSlot style="padding-bottom:8px"><dbs-search></dbs-search></div>
  <div style="min-height: 200px">Content goes here</div>
  <dbs-button footerSlot>Action</dbs-button>
</dbs-bottom-sheet>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | '' | Header title. |
| subtitle | string | '' | Header subtitle. |
| opened | boolean (two-way) | false | Controls open/close state. |
| hasOverlay | boolean | true | Display overlay behind the sheet. |
| componentHeight | string | - | Sets css `height` of the sheet; limited by `componentMaxHeight`. |
| componentMaxHeight | string | '95vh' | Sets css `max-height`; can use `100%`/`100dvh` etc. |
| footerButtonLayout | 'stretched'|'stacked' | 'stretched' | Mobile layout of footer buttons. |
| swipeDistanceThreshold | number | 1000 | Drag distance to trigger swipe close. |
| swipeTimeThreshold | number | 1000 | Drag time threshold to trigger swipe close. |

### Events

- onClosed — emitted when the sheet finishes closing with transition
- openedChange — emitted when `opened` changes
- overlayClicked — emitted when overlay is clicked

### Slots

- (default) — Main content
- searchSlot — Search area
- headerSlot — Fully custom header (replaces default)
- footerSlot — Footer button content

### Methods

- openBottomSheet(): void — opens the sheet
- closeBottomSheet(): void — closes the sheet

---

## Examples

```html
<!-- Method-based open -->
<div>Current state: {{ bottomSheet.opened }}</div>
<dbs-button (click)="bottomSheet.openBottomSheet()">openBottomSheet()</dbs-button>
<dbs-bottom-sheet #bottomSheet [title]="'Options'" [(opened)]="opened">
  <div style="min-height: 200px">Body content...</div>
  <dbs-button footerSlot>Next<svg-icon iconName="chevron-right" endSlot></svg-icon></dbs-button>
  <dbs-button footerSlot>Cancel</dbs-button>
</dbs-bottom-sheet>
```

---

## Styling Best Practices

- Keep `componentMaxHeight` to a quantitative value to preserve open/close transitions.
- On mobile, use `footerButtonLayout="stretched"` by default; switch to `stacked` for multiple actions.

---

## Behavior Notes

- On smaller screens, dropdowns may render as bottom sheets for responsiveness.
- Deprecated: `setFullWidth`, `centerContent`, `close`, `fullyPullUp`, `hasFooter`, `header`, `isFooterSticky`, `isHeaderSticky`, `subHeader`, `updateHeight`, and `bottom-sheet-*` element selectors — prefer current inputs and slots.

---

**Component File:** `bottom-sheet.md`
**Last Updated:** 2025-10-27

