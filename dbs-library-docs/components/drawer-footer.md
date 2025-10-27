# Drawer Footer Component

> Drawer bottom bar with start and end slots; supports mobile button layout

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsDrawerFooterComponent, DbsButtonComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsDrawerFooterComponent, DbsButtonComponent],
})
export class DrawerFooterHost {}
```

---

## Basic Usage

```html
<dbs-drawer-footer>
  <div startSlot>Single line of text.</div>
  <dbs-button endSlot variant="primary">Next</dbs-button>
  <dbs-button endSlot>Cancel</dbs-button>
</dbs-drawer-footer>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| mobileButtonLayout | 'stretched'|'stacked' | 'stretched' | Mobile layout for end-slot buttons. |

### Slots

- startSlot — left-aligned content (e.g., note)
- endSlot — right-aligned action buttons

---

## Examples

```html
<!-- Stretched (default) -->
<dbs-drawer-footer [mobileButtonLayout]="'stretched'">
  <dbs-button endSlot variant="primary">Next</dbs-button>
  <dbs-button endSlot>Cancel</dbs-button>
  <div startSlot>stretched</div>
</dbs-drawer-footer>

<!-- Stacked -->
<dbs-drawer-footer [mobileButtonLayout]="'stacked'">
  <dbs-button endSlot variant="primary">Next</dbs-button>
  <dbs-button endSlot>Cancel</dbs-button>
  <div startSlot>stacked</div>
</dbs-drawer-footer>
```

---

## Styling Best Practices

- Order end-slot buttons from primary to secondary so primary anchors to the right.
- Keep start-slot text short to avoid wrapping across actions.

---

## Behavior Notes

- Mobile layout affects only end-slot buttons; start-slot content remains at the left.

---

**Component File:** `drawer-footer.md`
**Last Updated:** 2025-10-27

