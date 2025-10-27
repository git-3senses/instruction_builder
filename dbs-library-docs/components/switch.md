# Switch Component

> Binary toggle with small and medium sizes and controlled checked state

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsSwitchComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsSwitchComponent],
})
export class SwitchHost {}
```

---

## Basic Usage

```html
<dbs-switch (onModelChange)="onModelChange($event)" [size]="'md'"></dbs-switch>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| checked | boolean | false | Current state; when true the switch is active. |
| disabled | boolean | false | Disable user interaction. |
| size | 'md'|'sm' | 'md' | Visual size.

### Events

- onModelChange(event: boolean) — emits the new checked state when toggled

---

## Examples

```html
<!-- Controlled via handler -->
<dbs-switch (onModelChange)="value = $event" [size]="'md'"></dbs-switch>

<!-- Template refs and disabled -->
<dbs-switch #switch [disabled]="false"></dbs-switch>

<!-- Small size -->
<dbs-switch [size]="'sm'"></dbs-switch>
```

```css
/* switch examples are inline; follow DLS tokens for spacing around the control */
```

---

## Styling Best Practices

- Place labels adjacent to the switch for clarity; ensure accessible name via visible label or aria attributes.
- Use `sm` for dense forms; default to `md` elsewhere.
- Avoid using disabled to block actions when validation can be applied.

---

## Behavior Notes

- `onModelChange` is the canonical way to receive the state; store it in component state or form models.
- When disabled, the control does not emit changes.

---

**Component File:** `switch.md`
**Last Updated:** 2025-10-27

