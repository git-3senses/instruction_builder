# Input Stepper Component

> Numeric input with increase/decrease controls for precise value adjustment

## Import

```typescript
import { DbsInputStepperComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsInputStepperComponent],
})
```

## Basic Usage

```html
<dbs-input-stepper
  [formControl]="formControl"
  [step]="1"
  [min]="0"
  [max]="100"
  [placeholder]="'0.00'"
  [helpText]="'Enter a value'"
  (blur)="onBlur($event)"
  (change)="onChange($event)">
</dbs-input-stepper>
```

---

## Key Features

- **Numeric value control:** Value changes via typing or increase/decrease controls
- **Auto-formatting:** Large numbers formatted with locale-specific thousands separators
- **Auto-clamping:** Values exceeding min/max are clamped automatically on blur
- **Step controls:** Disabled at min/max values, accelerate on long-hold (150ms)
- **Keyboard navigation:** Up↑/Down↓ arrow keys increase/decrease value
- **Accessibility:** Visually hidden labels for screen readers
- **Fractional support:** Handles decimal values based on step precision

---

## Properties

### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **formControl** | `FormControl` | - | Angular form control (required) |
| **step** | `number` | `1` | Increment/decrement step value. Float values set fraction digits |
| **min** | `number` | `NaN` | Minimum value. Disables decrease control at min |
| **max** | `number` | `NaN` | Maximum value. Disables increase control at max |
| **placeholder** | `string` | `"0.00"` | Placeholder text |
| **helpText** | `string` | `""` | Helper text below input (shown unless error) |
| **errorMsg** | `string` | `""` | Error message when form control is invalid |
| **disabled** | `boolean` | `false` | Disables input and controls |
| **readonly** | `boolean` | `false` | Makes value readonly, hides controls |
| **readonlyPlaceholder** | `string` | `"-"` | Placeholder when readonly with no value |
| **required** | `boolean` | `false` | Marks input as required |
| **restrictTyping** | `boolean` | `false` | Only allow value changes via controls (no typing) |
| **size** | `'sm' \| 'md'` | `'md'` | Font size: md=16px, sm=14px |
| **locale** | `string` | System default | Locale for number formatting |
| **longHoldIntervalDuration** | `number` | `150` | Interval for long-hold acceleration (ms) |
| **id** | `string` | Auto-generated | Unique input ID |
| **name** | `string` | Auto-generated | Unique input name |

### Accessibility Props

| Property | Type | Description |
|----------|------|-------------|
| **aria-describedby** | `string` | IDs of elements describing this input |
| **aria-description** | `string` | Description string for the element |
| **aria-invalid** | `boolean` | Whether input value is invalid |
| **aria-label** | `string` | Label for the input |
| **aria-labelledby** | `string` | IDs of elements labeling this input |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| **blur** | `Observable<FocusEvent>` | Emitted when focus removed from input |
| **change** | `Observable<string>` | Emitted on each value alteration |
| **keyup** | `Observable<KeyboardEvent>` | Emitted when key is released |

---

## Examples

### Basic with Label

```html
<div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
  <label>Quantity</label>
  <span>Current: {{formControl.value}}</span>
</div>

<dbs-input-stepper
  [formControl]="formControl"
  [step]="1"
  [min]="0"
  [max]="100"
  [helpText]="'Select quantity'">
</dbs-input-stepper>
```

### Fractional Steps (Decimals)

```html
<!-- step=0.5 auto-formats to 1 decimal place -->
<dbs-input-stepper
  [formControl]="priceControl"
  [step]="0.5"
  [min]="0"
  [max]="1000"
  [placeholder]="'0.0'">
</dbs-input-stepper>
```

### At Minimum/Maximum

```html
<!-- Start at min (decrease disabled) -->
<dbs-input-stepper
  [formControl]="minControl"
  [step]="1"
  [min]="0"
  [max]="100">
</dbs-input-stepper>

<!-- Start at max (increase disabled) -->
<dbs-input-stepper
  [formControl]="maxControl"
  [step]="1"
  [min]="0"
  [max]="100">
</dbs-input-stepper>
```

### Read-Only

```html
<!-- Controls hidden, value not editable but focusable -->
<dbs-input-stepper
  [formControl]="formControl"
  [readonly]="true"
  [readonlyPlaceholder]="'No value set'">
</dbs-input-stepper>
```

### Disabled

```html
<!-- Completely disabled -->
<dbs-input-stepper
  [formControl]="formControl"
  [disabled]="true"
  [step]="1">
</dbs-input-stepper>
```

### With Error/Success Messages

```typescript
// Component
export class MyComponent {
  formControl = new FormControl('', Validators.required);

  get isInvalid() {
    return this.formControl.invalid && this.formControl.touched;
  }

  get isSuccess() {
    return this.formControl.valid && this.formControl.value;
  }
}
```

```html
<!-- Error state -->
<dbs-input-stepper
  [formControl]="formControl"
  [errorMsg]="'This field is required'"
  [helpText]="'Enter a value'">
</dbs-input-stepper>

<!-- Success state -->
<dbs-input-stepper
  [formControl]="formControl">
</dbs-input-stepper>
@if (isSuccess) {
  <div style="display: flex; align-items: center; margin-top: 8px; color: var(--color-text-success);">
    <svg-icon iconName="checkmark"></svg-icon>
    <span style="margin-left: 4px;">Success!</span>
  </div>
}
```

### Compact Size

```html
<!-- Apply 'compact' class for smaller height (32px container, 16px input) -->
<dbs-input-stepper
  class="compact"
  [formControl]="formControl"
  [step]="1">
</dbs-input-stepper>
```

### Restrict Typing (Controls Only)

```html
<!-- User can only change value via +/- buttons -->
<dbs-input-stepper
  [formControl]="formControl"
  [restrictTyping]="true"
  [step]="1">
</dbs-input-stepper>
```

---

## Behavior Details

### Formatting

- **On typing:** Large numbers (e.g., 1000) formatted with thousands separators based on locale
- **On blur:** Values clamped to min/max, fractions rounded to step precision

### Control States

- **Decrease button:** Disabled when value is at or below `min`
- **Increase button:** Disabled when value is at or above `max`
- **Long-hold:** Hold button for 150ms to accelerate value changes

### Keyboard Support

- **Arrow Up (↑):** Increase value by step
- **Arrow Down (↓):** Decrease value by step
- Works when input has focus

---

## Deprecated Properties

| Deprecated | Use Instead | Reason |
|------------|-------------|--------|
| `decimal_places` | Step precision | Fraction digits derived from step |
| `hideMinus` | Set `min` value | Auto-disables at min |
| `hidePlus` | Set `max` value | Auto-disables at max |
| `maximum_value` | `max` | Naming consistency |
| `minimum_value` | `min` | Naming consistency |
| `readOnly` | `readonly` | Casing consistency |
| `step_value` | `step` | Naming consistency |

---

## CSS & Styling

### Design Tokens Used

```css
/* Colors */
--color-border                    /* Default border */
--color-border-focus              /* Focus state border */
--color-border-error              /* Error state border */
--color-text-success              /* Success message color */
--color-text-error                /* Error message color */
--color-text-disabled             /* Disabled text color */
--color-background-disabled       /* Disabled background */

/* Spacing */
--spacing-xs                      /* 4px - Small gaps */
--spacing-sm                      /* 8px - Standard gaps */
--spacing-md                      /* 16px - Medium gaps */
--spacing-lg                      /* 24px - Large gaps */

/* Typography */
--font-size-body-md               /* 16px - Default size */
--font-size-body-sm               /* 14px - Small size */
```

### Component Styling

```css
/* Form field container */
.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
}

/* Label styling */
.form-field label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 4px;
}

/* Input stepper container */
dbs-input-stepper {
  width: 100%;
  max-width: 320px;
}

/* Compact variant */
dbs-input-stepper.compact {
  height: 32px;
}

/* Success indicator */
.success-message {
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: var(--color-text-success);
  font-size: 14px;
  gap: 4px;
}
```

### Layout Patterns

```css
/* Horizontal form layout */
.form-row {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.form-row .form-field {
  flex: 1;
}

/* Grid layout for multiple steppers */
.stepper-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

/* Label with value display */
.label-with-value {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.label-with-value label {
  font-size: 14px;
  font-weight: 500;
}

.label-with-value .current-value {
  font-size: 14px;
  color: var(--color-text-secondary);
}
```

---

## Complete Example with Styling

### TypeScript (order-form.component.ts)

```typescript
import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DbsInputStepperComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [DbsInputStepperComponent, ReactiveFormsModule],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  quantityControl = new FormControl(1, [
    Validators.required,
    Validators.min(1),
    Validators.max(999)
  ]);

  priceControl = new FormControl(10.00, [
    Validators.required,
    Validators.min(0)
  ]);

  get isQuantityValid() {
    return this.quantityControl.valid && this.quantityControl.value;
  }

  get isPriceValid() {
    return this.priceControl.valid && this.priceControl.value;
  }

  onQuantityChange(value: string) {
    console.log('Quantity changed:', value);
  }

  onPriceChange(value: string) {
    console.log('Price changed:', value);
  }
}
```

### HTML (order-form.component.html)

```html
<div class="order-form">
  <!-- Quantity Field -->
  <div class="form-field">
    <div class="label-with-value">
      <label>Order Quantity</label>
      <span class="current-value">Current: {{quantityControl.value}}</span>
    </div>

    <dbs-input-stepper
      [formControl]="quantityControl"
      [step]="1"
      [min]="1"
      [max]="999"
      [errorMsg]="'Please enter a quantity between 1-999'"
      [helpText]="'Minimum order: 1 unit'"
      (change)="onQuantityChange($event)">
    </dbs-input-stepper>

    @if (isQuantityValid) {
      <div class="success-message">
        <svg-icon iconName="checkmark"></svg-icon>
        <span>Quantity confirmed</span>
      </div>
    }
  </div>

  <!-- Price Field -->
  <div class="form-field">
    <label>Unit Price (SGD)</label>

    <dbs-input-stepper
      [formControl]="priceControl"
      [step]="0.5"
      [min]="0"
      [max]="10000"
      [placeholder]="'0.00'"
      [helpText]="'Price per unit'"
      (change)="onPriceChange($event)">
    </dbs-input-stepper>
  </div>

  <!-- Compact Size Example -->
  <div class="form-field">
    <label>Adjustment</label>

    <dbs-input-stepper
      class="compact"
      [formControl]="quantityControl"
      [step]="1"
      [min]="-10"
      [max]="10"
      [size]="'sm'">
    </dbs-input-stepper>
  </div>
</div>
```

### CSS (order-form.component.css)

```css
.order-form {
  max-width: 600px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-field label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
}

.label-with-value {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.current-value {
  font-size: 14px;
  color: var(--color-text-secondary);
  font-weight: 400;
}

dbs-input-stepper {
  width: 100%;
  max-width: 320px;
}

dbs-input-stepper.compact {
  max-width: 200px;
}

.success-message {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  color: var(--color-text-success);
  font-size: 14px;
}

.success-message svg-icon {
  width: 16px;
  height: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .order-form {
    padding: 16px;
  }

  dbs-input-stepper {
    max-width: 100%;
  }
}
```

---

## Styling Best Practices

### Width Control

```html
<!-- Full width (max 320px) -->
<dbs-input-stepper style="width: 100%; max-width: 320px;"></dbs-input-stepper>

<!-- Fixed width -->
<dbs-input-stepper style="width: 200px;"></dbs-input-stepper>

<!-- Responsive width -->
<dbs-input-stepper [ngStyle]="{ width: '100%', 'max-width': isMobile ? '100%' : '320px' }">
</dbs-input-stepper>
```

### Spacing Between Fields

```css
/* Vertical spacing */
:host {
  display: flex;
  flex-direction: column;
  gap: 24px; /* 24px between form fields */
}

/* Horizontal layout */
.form-row {
  display: flex;
  gap: 16px; /* 16px between horizontal fields */
}
```

### State-based Styling

```html
<!-- Success state -->
@if (formControl.valid && formControl.value) {
  <div style="margin-top: 8px; color: var(--color-text-success);">
    ✓ Valid quantity
  </div>
}

<!-- Error state (handled by component) -->
<dbs-input-stepper
  [errorMsg]="'Required field'"
  [formControl]="control">
</dbs-input-stepper>
```

---

**Component File:** `input-stepper.md`
**Priority:** 🟡 MEDIUM
**Last Updated:** 2025-10-27
