# Chip List Component

> Render a list of chips with optional global/per-item dismiss, integration with inputs/selects, and custom chip templates

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsChipListComponent, DbsInputComponent, DbsSelectComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsChipListComponent, DbsInputComponent, DbsSelectComponent],
})
export class ChipListHost {}
```

---

## Basic Usage

```html
<div style="background-color: #fff; padding: 24px;">
  <dbs-chip-list [values]="[
    { value: 'chip1', label: 'Chip 1' },
    { value: 'chip2', label: 'Chip 2' },
    { value: 'chip3', label: 'Chip 3' }
  ]"></dbs-chip-list>
  </div>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| values | Chip<T>[] | [] | List of chips to render (`{ value: string; label: string; dismissible?: boolean; icon?: string; }`). |
| dismissible | boolean | false | Global dismissible flag; per-chip `dismissible` overrides this value. |

### Events

- onChipDismiss: emits the dismissed chip object
- valuesChange: emits the resulting values after change

### Content Child

- chipTemplateRef — use `#chipTemplate` to pass a custom per-chip template

---

## Examples

```html
<!-- Global dismissible (two-way bound list) -->
<dbs-chip-list [dismissible]="true" [(values)]="values"></dbs-chip-list>

<!-- Per-chip override -->
<div style="background-color: #fff; padding: 24px;">
  <dbs-chip-list [values]="[
    { value: 'chip1', label: 'Chip 1' },
    { value: 'chip2', label: 'Chip 2' },
    { value: 'chip3', label: 'Chip 3', dismissible: true }
  ]" [dismissible]="false"></dbs-chip-list>
</div>

<!-- Integration with Input: add on Enter -->
<dbs-input
  [(value)]="inputValue"
  (keydown.enter)="values.push({ value: inputValue, label: inputValue })"
  (keyup.enter)="inputValue = ''">
</dbs-input>
<dbs-chip-list [(values)]="values" [dismissible]="true" style="margin-top: 8px"></dbs-chip-list>

<!-- Integration with Select: multi-select values -->
<dbs-select
  [ngModel]="values"
  [values]="selectValues"
  [multipleSelect]="true"
  [showItemCount]="true"
  [placeholder]="'Select values to add to chip list'"
  (onSelect)="values = $event">
</dbs-select>
<dbs-chip-list [(values)]="values" [dismissible]="true" style="margin-top: 8px"></dbs-chip-list>

<!-- Custom chip template with icon and label color -->
<div style="background-color: #fff; padding: 24px;">
  <dbs-chip-list [values]="[
    { value: 'chip1', label: 'Chip 1', icon: 'check', dismissible: true },
    { value: 'chip2', label: 'Chip 2', icon: 'arrow-up-right' }
  ]">
    <ng-template #chipTemplate let-chip>
      <svg-icon startSlot fill="var(--color-success)" [iconName]="chip.icon" [ngStyle]="{ width: '16px', height: '16px' }"></svg-icon>
      <div labelSlot style="color: var(--color-success)">{{ chip.label }}</div>
    </ng-template>
  </dbs-chip-list>
</div>
```

---

## Styling Best Practices

- Keep chip spacing and line wrapping consistent; use container layout to manage flow.
- For long lists, allow wrapping rather than horizontal scrolling.
- Use icons as subtle cues; avoid overload that competes with labels.

---

## Behavior Notes

- When `dismissible` is set globally, individual chips can still override via their own `dismissible` property.
- Use `valuesChange` to sync with parent state when chips are added/removed.
- Custom `#chipTemplate` can project `startSlot` and `labelSlot` pieces for each chip.

---

**Component File:** `chip-list.md`
**Last Updated:** 2025-10-27

