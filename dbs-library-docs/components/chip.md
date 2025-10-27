# Chip Component

> Small label/badge with optional dismiss button and leading icon

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsChipComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsChipComponent],
})
export class ChipHost {}
```

---

## Basic Usage

```html
<dbs-chip [label]="'basic chip'"></dbs-chip>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| label | string | '' | Text content of the chip. |
| dismissible | boolean | false | Show a dismiss button. |

### Slots

- startSlot — leading icon/content
- (default) — when not using `label`, you can project custom content

### Events

- onDismiss — emits when dismiss button is clicked (only when `dismissible`)

---

## Examples

```html
<!-- Dismissible -->
<dbs-chip [label]="'dismissible chip'" [dismissible]="true"></dbs-chip>

<!-- With icon via startSlot -->
<dbs-chip [label]="'chip with icon'">
  <svg-icon startSlot iconName="user" fill="var(--color-icon-active)" style="width: 16px; height: 16px;"></svg-icon>
  <!-- label is rendered by component -->
</dbs-chip>
```

---

## Styling Best Practices

- Use concise labels; chips should be short and scannable.
- Use leading icons sparingly to reinforce meaning.
- Prefer consistent spacing with tokens: gap 8px, height consistent across sets.

---

## Behavior Notes

- `onDismiss` should remove the chip from its parent list when applicable.
- If projecting custom content (instead of `label`), ensure adequate contrast and padding.

---

**Component File:** `chip.md`
**Last Updated:** 2025-10-27

