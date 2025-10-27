# Text Area Component

> Multi-line input with labels, help text, counters, validation, and mobile resize handle

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { DbsTextAreaComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DbsTextAreaComponent],
})
export class TextAreaHost {}
```

---

## Basic Usage

```html
<dbs-textarea
  [placeholder]="'Enter message'"
  [rows]="4">
</dbs-textarea>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| placeholder | string | "" | Placeholder text. |
| value | string | "" | Initial value (when not using FormControl). |
| formControl | FormControl | - | Bind to Angular forms with validation. |
| helpText | string | "" | Helper text below the input. Hidden in readonly. |
| errorMsg | string | "" | Error message to display when invalid. |
| characterCounter | 'number'|'text' | - | Counter mode; requires `maxlength`. |
| maxlength | number | NaN | Maximum characters; blocks input beyond limit. |
| minlength | number | NaN | Minimum characters required. |
| rows | number | 2 | Initial height in rows. |
| size | 'sm'|'md' | 'md' | Font sizing preset. |
| cols | number | 20 | Visible width in character columns. |
| align | 'start'|'end' | 'start' | Text alignment. |
| readonly | boolean | false | Read-only mode hides help/counter. |
| readonlyPlaceholder | string | - | Placeholder shown when `readonly` and empty. |
| disabled | boolean | false | Disable input (do not combine with disabled FormControl). |
| customResizeHandle | boolean | false | Shows custom vertical resize handle (iOS Safari). |
| tabindex | number | NaN | Keyboard tab order. |
| aria-* | string/boolean | - | ARIA labelling (`aria-label`, `aria-labelledby`, `aria-required`, etc.). |

### Events

- blur: FocusEvent
- focus: FocusEvent
- keyup: any

---

## Complete Example

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { DbsTextAreaComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-textarea-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DbsTextAreaComponent],
  templateUrl: './textarea-demo.component.html',
  styleUrls: ['./textarea-demo.component.css']
})
export class TextAreaDemoComponent {
  formControl = new UntypedFormControl('', [Validators.required, Validators.maxLength(100)]);

  // Standalone flags/props
  readonly = false;
  disabled = false;
  align: 'start' | 'end' = 'start';
}
```

```html
<!-- textarea-demo.component.html -->
<section class="stack">
  <!-- Label, help, counter (text) -->
  <dbs-textarea
    [fieldLabel]="'Field label'"
    [fieldLabelDisplayTooltipIcon]="true"
    [fieldLabelTooltipTitle]="'Tooltip title'"
    [fieldLabelTooltipText]="'Tooltip text'"
    [helpText]="'Sample help text'"
    [characterCounter]="'text'"
    [maxlength]="100"
    [rows]="4"
    [placeholder]="'Type your message'">
  </dbs-textarea>

  <!-- Form control + error message + numeric counter -->
  <dbs-textarea
    [placeholder]="'Enter up to 100 chars'"
    [helpText]="'Use a valid format'"
    [errorMsg]="'Not a valid value'"
    [characterCounter]="'number'"
    [maxlength]="100"
    [formControl]="formControl">
  </dbs-textarea>

  <!-- Sizing -->
  <div class="row">
    <dbs-textarea [size]="'sm'" [rows]="4" [placeholder]="'Small / 4 rows'"></dbs-textarea>
    <dbs-textarea [size]="'md'" [rows]="6" [placeholder]="'Medium / 6 rows'"></dbs-textarea>
  </div>

  <!-- Read-only variations -->
  <dbs-textarea [readonly]="true" [value]="'Textarea value'" [helpText]="'Hidden in readonly'"></dbs-textarea>
  <dbs-textarea [readonly]="true" [readonlyPlaceholder]="'No value'"></dbs-textarea>

  <!-- Disabled: via FormControl or via Input (use one only) -->
  <dbs-textarea [formControl]="new UntypedFormControl({ value: '', disabled: true })" [placeholder]="'Disabled via FormControl'"></dbs-textarea>
  <dbs-textarea [disabled]="true" [placeholder]="'Disabled via Input'"></dbs-textarea>

  <!-- Alignment and custom iOS resize handle -->
  <dbs-textarea [align]="align" [customResizeHandle]="true" [placeholder]="'iOS resize handle'"></dbs-textarea>
</section>
```

```css
/* textarea-demo.component.css */
.stack {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 768px) {
  .row {
    grid-template-columns: 1fr;
  }
}
```

---

## Styling Best Practices

- Use `characterCounter` only with `maxlength`; choose `number` for 0/100 and `text` for “100 characters left”.
- Prefer `cols` for width semantics; avoid fixed pixel widths. Use responsive containers and grid where needed.
- Do not combine `[disabled]` with a disabled FormControl; choose one approach.
- Keep `helpText` concise; it is hidden in readonly mode.
- Use `size='sm'` for dense layouts and mobile; `md` for default.

---

## Behavior Notes

- Readonly mode hides help/counter but preserves value presentation.
- `keyup`, `focus`, and `blur` are available for interactions and analytics.
- When using FormControl, validation drives `errorMsg` visibility (bind rules in the parent).
- `customResizeHandle` provides a consistent drag target on iOS Safari.

---

**Component File:** `text-area.md`
**Last Updated:** 2025-10-27

