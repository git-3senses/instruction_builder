# Calendar Input Component

> Date input with popover calendar, min/max date validation, mobile bottom sheet, and formatting

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { DbsCalendarInputComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DbsCalendarInputComponent],
})
export class CalendarInputHost {}
```

---

## Basic Usage

```html
<dbs-calendar-input></dbs-calendar-input>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| dateFormat | string | 'DD/MM/YYYY' | Display format; must align with `seperator`. |
| seperator | string | '/' | Date separator for display and placeholder. |
| disabled | boolean | false | Disable the control. |
| isReadOnly | boolean | false | Read-only mode. |
| minDate | Date | new Date(1000,0,1) | Minimum selectable date. |
| maxDate | Date | new Date(3000,11,31) | Maximum selectable date. |
| mobileView | boolean | false | Render in a bottom sheet for mobile. |
| monthMode | boolean | false | Show only month/year (auto true if `dateFormat` = MM/YYYY). |
| numberOfFutureYears | number | 1000 | Allowed future year range. |
| numberOfPastYears | number | 1000 | Allowed past year range. |
| position | PopperPositionType | 'bottom-right' | Popover position relative to the icon. |
| showClear | boolean | false | Show clear button. |
| size | 'sm'|'md' | 'md' | Control size. |
| todayButton | boolean | true | Show today button. |
| todaySelect | boolean | false | If true, today button selects today. |

### Events

- dateUpdated — emits when the date is updated

### Methods

- formatDate(): void
- validateDate(): void

---

## FormControl Integration

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { DbsCalendarInputComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-calendar-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DbsCalendarInputComponent],
  templateUrl: './calendar-demo.component.html',
  styleUrls: ['./calendar-demo.component.css']
})
export class CalendarDemoComponent {
  formControl = new UntypedFormControl({ date: new Date() }, [Validators.required]);
  minDate = new Date('10 July 2023');
  maxDate = new Date('10 July 2025');
}
```

```html
<!-- calendar-demo.component.html -->
<p>FormControl Value (Date): {{ formControl.value?.date | date:'d MMM y h:mm:ss a' }}</p>
<dbs-calendar-input [formControl]="formControl" [minDate]="minDate" [maxDate]="maxDate"></dbs-calendar-input>
```

```css
/* calendar-demo.component.css */
:host { display: block; }
```

---

## Min/Max Date Validators (Examples)

```typescript
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minDateValidator(minDate: Date) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value?.date) return null; // let required handle empties
    return control.value.date < minDate ? { minDate: true } : null;
  };
}

export function maxDateValidator(maxDate: Date) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value?.date) return null;
    return control.value.date > maxDate ? { maxDate: true } : null;
  };
}
```

---

## Styling Best Practices

- Ensure `dateFormat` and `seperator` are aligned for consistent display and parsing.
- Use `size='sm'` for dense form rows; `md` for defaults.
- Prefer `mobileView` for small screens to provide a bottom sheet experience.

---

## Behavior Notes

- Out-of-range years beyond `numberOfFutureYears`/`numberOfPastYears` are treated as invalid, and control value becomes null.
- When `monthMode` is enabled, only month/year selection is available.

---

**Component File:** `calendar-input.md`
**Last Updated:** 2025-10-27

