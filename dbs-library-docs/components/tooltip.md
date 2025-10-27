# Tooltip Directive

> Contextual helper displayed on hover/focus/click over any element

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsTooltipDirective, DbsButtonComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsTooltipDirective, DbsButtonComponent],
})
export class TooltipHost {}
```

---

## Basic Usage

```html
<dbs-button
  dbsToolTip
  [tooltipPosition]="'top'"
  [tooltipTitle]="'This is a title'"
  [tooltipText]="'A tooltip can help give hints or more information about a label or other indicator.'">
  Button tooltip
</dbs-button>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| tooltipPosition | PopperPositionType | 'top' | Tooltip position relative to trigger. |
| tooltipTitle | string | "" | Optional title line. |
| tooltipText | string | "" | Tooltip body text. |
| contentTemplate | TemplateRef<any> | - | Custom content template to render inside tooltip. |
| contentContext | any | - | Context object passed to `contentTemplate`. |
| offsetX | number | 0 | Horizontal offset in px. |
| offsetY | number | 0 | Vertical offset in px. |
| tooltipDisplay | boolean | true | Show/hide tooltip programmatically. |

### Slot

- (default) — The element that triggers the tooltip

---

## Positions

```html
<select (change)="tooltipPosition = $event.target.value">
  <option>top</option>
  <option>bottom</option>
  <option>left</option>
  <option>right</option>
  <!-- plus -start/-end/-left/-right variants as supported -->
</select>

<dbs-button dbsToolTip [tooltipPosition]="tooltipPosition" [tooltipTitle]="'Title'" [tooltipText]="'Text'">
  {{ tooltipPosition }} tooltip
</dbs-button>
```

---

## Custom Content Template

```html
<ng-template #tooltipTemplate let-item="item">
  <strong class="heading">{{ item.title }}</strong>
  <div class="body">{{ item.content1 }}</div>
  <div class="body">{{ item.content2 }}</div>
</ng-template>

<dbs-button
  dbsToolTip
  [tooltipPosition]="'top'"
  [contentContext]="{ item: { title: 'Template Title', content1: 'Template Content 1', content2: 'Template Content 2' } }"
  [contentTemplate]="tooltipTemplate">
  Custom tooltip
</dbs-button>
```

---

## Offset and Viewport Fit

```html
<dbs-button
  dbsToolTip
  [offsetX]="50"
  [offsetY]="-20"
  [tooltipPosition]="'top'"
  [tooltipTitle]="'Title'"
  [tooltipText]="'Text'">
  Button tooltip
</dbs-button>
```

Tooltip repositions automatically to remain within the viewport.

---

## Styling Best Practices

- Keep content concise; use `tooltipTitle` for a short heading and `tooltipText` for a single sentence.
-,When more content is needed, prefer `contentTemplate` for structured layout.
- Avoid tooltips for critical information; ensure keyboard/focus access.

---

## Behavior Notes

- Works on buttons, icons, and any element; attach via `dbsToolTip` attribute.
- `tooltipDisplay=false` hides tooltip programmatically (e.g., when dialogs open).
- Offsets fine-tune position when overlapping with UI.

---

**Directive File:** `tooltip.md`
**Last Updated:** 2025-10-27

