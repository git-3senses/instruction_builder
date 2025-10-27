# Progress Bar Component

> Linear progress indicator with color mapping, error state, and controlled progress

---

## Import

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsProgressBarComponent, DbsButtonComponent, DbsSwitchComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsProgressBarComponent, DbsButtonComponent, DbsSwitchComponent],
})
export class ProgressBarHost {}
```

---

## Basic Usage

```html
<dbs-progressbar [progress]="70"></dbs-progressbar>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| progress | number|null | 0 | Percentage filled; when `null`, acts as an indeterminate loader. |
| minValue | number | 0 | Minimum progress bound. |
| maxValue | number | 100 | Maximum progress bound. |
| color | 'green'|'yellow'|'red' | - | Fixed color override. |
| colorMapping | { inProgress: 'green'|'yellow'|'red'; complete: 'green'|'yellow'|'red' } | { inProgress: 'yellow', complete: 'green' } | Map color by state. Partial configs allowed. |
| progressState | 'inProgress'|'complete' | 'inProgress' | Sets state; when set to 'complete', progress is set to `maxValue` and color derived from mapping. |
| errorState | boolean | false | When true: visual width maxes; fixed color is red; `progress` value unchanged. |

### Events

- progressStateChange: string — emits when `progressState` changes

---

## Example

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsProgressBarComponent, DbsButtonComponent, DbsSwitchComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-progress-demo',
  standalone: true,
  imports: [CommonModule, DbsProgressBarComponent, DbsButtonComponent, DbsSwitchComponent],
  templateUrl: './progress-demo.component.html',
  styleUrls: ['./progress-demo.component.css']
})
export class ProgressDemoComponent {
  currProgress = signal(0);
  currErrorState = signal(false);

  inc(n = 10) { this.currProgress.set(Math.min(100, this.currProgress() + n)); }
  reset() { this.currProgress.set(0); }
  complete() { this.currProgress.set(100); }
}
```

```html
<!-- progress-demo.component.html -->
<div class="controls">
  <dbs-button (click)="reset()">Reset progress</dbs-button>
  <dbs-button (click)="inc(10)">Increment by 10</dbs-button>
  <dbs-button (click)="complete()">Trigger complete</dbs-button>
</div>
<div class="toggle">
  <dbs-switch [checked]="currErrorState()" (change)="currErrorState.set(!currErrorState())"></dbs-switch>
  <span style="margin-left: 8px;">Toggle error state</span>
  <span style="margin-left: 16px;">Current progress: {{ currProgress() }}</span>
  </div>

<dbs-progressbar
  [minValue]="0"
  [maxValue]="100"
  [progress]="currProgress()"
  [progressState]="'inProgress'"
  [errorState]="currErrorState()"
></dbs-progressbar>

<!-- Fixed color -->
<dbs-progressbar [color]="'green'" [progress]="70"></dbs-progressbar>

<!-- Custom color mapping -->
<dbs-progressbar [progress]="70" [colorMapping]="{ inProgress: 'red', complete: 'yellow' }"></dbs-progressbar>
```

```css
/* progress-demo.component.css */
.controls { display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0 24px; }
.toggle { margin: 16px 0 24px; display: flex; align-items: center; }
```

---

## Styling Best Practices

- Use mapping defaults to communicate typical states (yellow in progress, green complete).
- Reserve `errorState` for genuine failures; it forces a red visual regardless of `progress`.
- Avoid mixing deprecated props; use `progressState` and `colorMapping` instead of legacy flags.

---

## Behavior Notes

- When `progressState` is set to 'complete', the bar fills to `maxValue` and color comes from mapping.
- With `errorState=true`, the visual bar is full and red while value remains unchanged for logic.

---

**Component File:** `progress-bar.md`
**Last Updated:** 2025-10-27

