# Input Component

> Comprehensive text input with validation, formatting, and accessibility support

## Import

```typescript
import { DbsInputComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsInputComponent],
})
```

## Basic Usage

```html
<!-- Text Input -->
<dbs-input
  [formControl]="myControl"
  placeholder="Enter text">
</dbs-input>

<!-- Number with Formatting -->
<dbs-input
  type="number"
  [formControl]="numberControl"
  [autoFormatNumber]="true">
</dbs-input>

<!-- Password with Eye Icon -->
<dbs-input
  type="password"
  [showEyeIcon]="true"
  placeholder="Password">
</dbs-input>
```

---

## Key Properties

### Core Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **formControl** | `FormControl` | - | Angular form control |
| **type** | `string` | `'text'` | text/password/number/email/tel |
| **placeholder** | `string` | `""` | Placeholder text |
| **size** | `'sm'\|'md'` | `'md'` | Input size |
| **disabled** | `boolean` | `false` | Disable input |
| **readonly** | `boolean` | `false` | Read-only mode |
| **required** | `boolean` | `false` | Mark as required |
| **errorMsg** | `string` | `""` | Error message |
| **helpText** | `string` | `""` | Helper text |
| **fieldLabel** | `string` | `""` | Label text |

### Number Formatting

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **autoFormatNumber** | `boolean` | `false` | Enable thousand separators |
| **allowNegativeNumber** | `boolean` | `false` | Allow negative values |
| **locale** | `string` | `'en'` | Number format locale |
| **roundingOptions** | `object` | - | {option: 'down'\|'up'\|'round', decimalPlaces: number} |

### UI Features

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **showClear** | `boolean` | `false` | Show clear button when focused |
| **showEyeIcon** | `boolean` | `false` | Password visibility toggle |
| **showCharacterCounter** | `boolean` | `false` | Show character count (needs maxlength) |
| **maxlength** | `number` | - | Max character length |
| **minlength** | `number` | - | Min character length |

### Validation

| Property | Type | Description |
|----------|------|-------------|
| **min** | `number` | Minimum value (number type) |
| **max** | `number` | Maximum value (number type) |
| **ariaLabel** | `string` | ARIA label |
| **ariaRequired** | `boolean` | ARIA required state |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| **focus** | `EventEmitter` | Focus gained |
| **blur** | `EventEmitter` | Focus lost |
| **change** | `EventEmitter` | Value changed |
| **keyup** | `EventEmitter` | Key released |

---

## Examples

### Text Input with Label

```html
<dbs-input
  [formControl]="nameControl"
  [fieldLabel]="'Full Name'"
  [required]="true"
  [errorMsg]="'Name is required'"
  [helpText]="'Enter your legal name'"
  placeholder="John Doe">
</dbs-input>
```

### Number Input with Formatting

```typescript
// Component
roundingOptions = { option: 'round', decimalPlaces: 2 };
```

```html
<dbs-input
  type="number"
  [formControl]="amountControl"
  [autoFormatNumber]="true"
  [allowNegativeNumber]="true"
  [roundingOptions]="roundingOptions"
  [min]="0"
  [max]="999999"
  placeholder="0.00">
</dbs-input>
<!-- Displays: 1,000.00 -->
```

### Password with Toggle

```html
<dbs-input
  type="password"
  [formControl]="passwordControl"
  [showEyeIcon]="true"
  [minlength]="8"
  [maxlength]="20"
  [showCharacterCounter]="true"
  placeholder="Enter password">
</dbs-input>
```

### With Clear Button

```html
<dbs-input
  [formControl]="searchControl"
  [showClear]="true"
  placeholder="Search...">
  <svg-icon startSlot iconName="search"></svg-icon>
</dbs-input>
```

### Email with Validation

```typescript
// Component
emailControl = new FormControl('', [Validators.required, Validators.email]);

get emailError() {
  if (this.emailControl.hasError('required')) return 'Email required';
  if (this.emailControl.hasError('email')) return 'Invalid email';
  return '';
}
```

```html
<dbs-input
  type="email"
  [formControl]="emailControl"
  [fieldLabel]="'Email'"
  [errorMsg]="emailError"
  placeholder="name@example.com">
</dbs-input>
```

### Size Variants

```html
<dbs-input [size]="'sm'" placeholder="Small"></dbs-input>
<dbs-input [size]="'md'" placeholder="Medium"></dbs-input>
```

### With Prefix/Suffix

```html
<dbs-input placeholder="Amount">
  <span startSlot>$</span>
  <svg-icon endSlot iconName="info"></svg-icon>
</dbs-input>
```

### Mobile Optimized

```html
<!-- Phone number -->
<dbs-input
  type="tel"
  [inputmode]="'numeric'"
  [autocomplete]="'tel'"
  placeholder="+65 1234 5678">
</dbs-input>

<!-- Email -->
<dbs-input
  type="email"
  [inputmode]="'email'"
  [autocapitalize]="'none'"
  placeholder="email@example.com">
</dbs-input>
```

---

## Form Example

```typescript
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbsInputComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DbsInputComponent, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <dbs-input
        formControlName="name"
        [fieldLabel]="'Name'"
        [required]="true"
        [errorMsg]="getError('name')">
      </dbs-input>

      <dbs-input
        type="number"
        formControlName="amount"
        [autoFormatNumber]="true"
        [fieldLabel]="'Amount'"
        [errorMsg]="getError('amount')">
      </dbs-input>

      <button type="submit" [disabled]="!form.valid">Submit</button>
    </form>
  `
})
export class FormComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    amount: [null, [Validators.required, Validators.min(0)]]
  });

  constructor(private fb: FormBuilder) {}

  getError(field: string): string {
    const control = this.form.get(field);
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'Required';
    if (control.errors['minlength']) return `Min ${control.errors['minlength'].requiredLength} chars`;
    if (control.errors['min']) return `Min value ${control.errors['min'].min}`;
    return 'Invalid';
  }

  submit() {
    console.log(this.form.value);
  }
}
```

---

## CSS & Styling

### Design Tokens Used

```css
/* Colors */
--color-border                    /* Default border */
--color-border-focus              /* Focus state border */
--color-border-error              /* Error state border */
--color-text-primary              /* Primary text */
--color-text-secondary            /* Secondary/helper text */
--color-text-success              /* Success state */
--color-text-error                /* Error state */
--color-text-disabled             /* Disabled text */
--color-background-disabled       /* Disabled background */

/* Spacing */
--spacing-xs                      /* 4px */
--spacing-sm                      /* 8px */
--spacing-md                      /* 16px */
--spacing-lg                      /* 24px */

/* Typography */
--font-size-body-md               /* 16px - md size */
--font-size-body-sm               /* 14px - sm size */
--font-weight-regular             /* 400 */
--font-weight-medium              /* 500 */
```

### Component Styling

```css
/* Form field wrapper */
.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
}

/* Field label */
.form-field label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 4px;
}

/* Input container */
dbs-input {
  width: 100%;
  max-width: 400px;
}

/* Small size inputs */
dbs-input[size="sm"] {
  font-size: 14px;
}

/* Input with prefix/suffix icons */
.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

/* Helper text */
.helper-text {
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-top: 4px;
}

/* Error text */
.error-text {
  font-size: 12px;
  color: var(--color-text-error);
  margin-top: 4px;
}

/* Success indicator */
.success-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  color: var(--color-text-success);
  font-size: 14px;
}
```

### Layout Patterns

```css
/* Vertical form layout */
.form-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
  padding: 24px;
}

/* Horizontal form row */
.form-row {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.form-row .form-field {
  flex: 1;
}

/* Grid layout for multiple inputs */
.input-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

/* Inline label and input */
.inline-field {
  display: flex;
  align-items: center;
  gap: 12px;
}

.inline-field label {
  min-width: 120px;
  font-size: 14px;
  font-weight: 500;
}

.inline-field dbs-input {
  flex: 1;
}
```

---

## Complete Example with Styling

### TypeScript (user-form.component.ts)

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DbsInputComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [DbsInputComponent, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;
  roundingOptions = { option: 'round', decimalPlaces: 2 };

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+65\s\d{4}\s\d{4}$/)]],
      salary: [null, [Validators.required, Validators.min(0)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      searchQuery: ['']
    });
  }

  get fullNameError(): string {
    const control = this.userForm.get('fullName');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'Full name is required';
    if (control.errors['minlength']) return 'Name must be at least 3 characters';
    return 'Invalid name';
  }

  get emailError(): string {
    const control = this.userForm.get('email');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'Email is required';
    if (control.errors['email']) return 'Invalid email format';
    return 'Invalid email';
  }

  get phoneError(): string {
    const control = this.userForm.get('phone');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'Phone number is required';
    if (control.errors['pattern']) return 'Format: +65 1234 5678';
    return 'Invalid phone number';
  }

  get salaryError(): string {
    const control = this.userForm.get('salary');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'Salary is required';
    if (control.errors['min']) return 'Salary must be positive';
    return 'Invalid salary';
  }

  get passwordError(): string {
    const control = this.userForm.get('password');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'Password is required';
    if (control.errors['minlength']) return 'Password must be at least 8 characters';
    return 'Invalid password';
  }

  isValid(fieldName: string): boolean {
    const control = this.userForm.get(fieldName);
    return control?.valid && control?.touched && !!control?.value;
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
    }
  }
}
```

### HTML (user-form.component.html)

```html
<form [formGroup]="userForm" (ngSubmit)="onSubmit()" class="form-container">
  <h2>User Registration</h2>

  <!-- Full Name -->
  <div class="form-field">
    <dbs-input
      formControlName="fullName"
      [fieldLabel]="'Full Name'"
      [required]="true"
      [errorMsg]="fullNameError"
      [helpText]="'Enter your legal name'"
      placeholder="John Doe">
    </dbs-input>

    @if (isValid('fullName')) {
      <div class="success-indicator">
        <svg-icon iconName="checkmark"></svg-icon>
        <span>Name confirmed</span>
      </div>
    }
  </div>

  <!-- Email -->
  <div class="form-field">
    <dbs-input
      type="email"
      formControlName="email"
      [fieldLabel]="'Email Address'"
      [required]="true"
      [errorMsg]="emailError"
      [helpText]="'We'll never share your email'"
      [inputmode]="'email'"
      [autocapitalize]="'none'"
      placeholder="john.doe@example.com">
    </dbs-input>

    @if (isValid('email')) {
      <div class="success-indicator">
        <svg-icon iconName="checkmark"></svg-icon>
        <span>Email verified</span>
      </div>
    }
  </div>

  <!-- Phone Number (Small Size) -->
  <div class="form-field">
    <dbs-input
      type="tel"
      formControlName="phone"
      [fieldLabel]="'Phone Number'"
      [size]="'sm'"
      [required]="true"
      [errorMsg]="phoneError"
      [helpText]="'Singapore number only'"
      [inputmode]="'numeric'"
      [autocomplete]="'tel'"
      placeholder="+65 1234 5678">
    </dbs-input>
  </div>

  <!-- Salary (Number with Formatting) -->
  <div class="form-field">
    <dbs-input
      type="number"
      formControlName="salary"
      [fieldLabel]="'Annual Salary (SGD)'"
      [autoFormatNumber]="true"
      [roundingOptions]="roundingOptions"
      [min]="0"
      [max]="999999"
      [required]="true"
      [errorMsg]="salaryError"
      [helpText]="'Gross annual salary'"
      placeholder="0.00">
      <span startSlot>$</span>
    </dbs-input>
  </div>

  <!-- Password with Eye Icon and Character Counter -->
  <div class="form-field">
    <dbs-input
      type="password"
      formControlName="password"
      [fieldLabel]="'Password'"
      [showEyeIcon]="true"
      [minlength]="8"
      [maxlength]="20"
      [showCharacterCounter]="true"
      [required]="true"
      [errorMsg]="passwordError"
      [helpText]="'8-20 characters'"
      placeholder="Enter password">
    </dbs-input>
  </div>

  <!-- Search with Clear Button -->
  <div class="form-field">
    <dbs-input
      formControlName="searchQuery"
      [fieldLabel]="'Search'"
      [showClear]="true"
      [size]="'sm'"
      placeholder="Search...">
      <svg-icon startSlot iconName="search"></svg-icon>
    </dbs-input>
  </div>

  <!-- Submit Button -->
  <div class="form-actions">
    <button
      type="submit"
      class="submit-btn"
      [disabled]="!userForm.valid">
      Submit
    </button>
    <button
      type="button"
      class="cancel-btn"
      (click)="userForm.reset()">
      Reset
    </button>
  </div>
</form>
```

### CSS (user-form.component.css)

```css
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-container h2 {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

dbs-input {
  width: 100%;
}

.success-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  color: var(--color-text-success);
  font-size: 14px;
}

.success-indicator svg-icon {
  width: 16px;
  height: 16px;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.submit-btn,
.cancel-btn {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn {
  background-color: var(--color-background-primary);
  color: var(--color-text-on-primary);
}

.submit-btn:hover:not(:disabled) {
  background-color: var(--color-background-primary-hover);
}

.submit-btn:disabled {
  background-color: var(--color-background-disabled);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

.cancel-btn {
  background-color: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.cancel-btn:hover {
  background-color: var(--color-background-level-1);
}

/* Responsive */
@media (max-width: 768px) {
  .form-container {
    padding: 24px 16px;
  }

  .form-actions {
    flex-direction: column;
  }

  .submit-btn,
  .cancel-btn {
    width: 100%;
  }
}
```

---

## Styling Best Practices

### Width Control

```html
<!-- Full width -->
<dbs-input style="width: 100%;"></dbs-input>

<!-- Max width (400px standard) -->
<dbs-input style="width: 100%; max-width: 400px;"></dbs-input>

<!-- Fixed width -->
<dbs-input style="width: 320px;"></dbs-input>

<!-- Responsive width -->
<dbs-input [ngStyle]="{ width: '100%', 'max-width': isMobile ? '100%' : '400px' }">
</dbs-input>
```

### Spacing Between Fields

```css
/* Vertical spacing */
:host {
  display: flex;
  flex-direction: column;
  gap: 24px; /* 24px between fields */
}

/* Horizontal layout */
.form-row {
  display: flex;
  gap: 16px; /* 16px between horizontal fields */
}
```

### Prefix/Suffix Alignment

```css
/* Icon in start slot */
dbs-input svg-icon[startSlot] {
  width: 20px;
  height: 20px;
  color: var(--color-text-secondary);
}

/* Text in start slot (e.g., currency) */
dbs-input span[startSlot] {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-primary);
}

/* Icon in end slot */
dbs-input svg-icon[endSlot] {
  width: 20px;
  height: 20px;
  color: var(--color-text-secondary);
}
```

### State-based Styling

```html
<!-- Success state -->
@if (formControl.valid && formControl.touched) {
  <div style="margin-top: 8px; color: var(--color-text-success); font-size: 14px;">
    ✓ Valid input
  </div>
}

<!-- Error state (handled by component's errorMsg) -->
<dbs-input
  [errorMsg]="'This field is required'"
  [formControl]="control">
</dbs-input>

<!-- Disabled state -->
<dbs-input
  [disabled]="true"
  [formControl]="control">
</dbs-input>
```

### Inline Form Layout

```css
.inline-form {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.inline-form label {
  min-width: 120px;
  padding-top: 12px;
  font-size: 14px;
  font-weight: 500;
}

.inline-form dbs-input {
  flex: 1;
}
```

```html
<div class="inline-form">
  <label>Email:</label>
  <dbs-input
    type="email"
    [formControl]="emailControl"
    placeholder="Enter email">
  </dbs-input>
</div>
```

---

## Behavior Notes

- **Number formatting** applies on blur (not while typing)
- **Clear button** only shows when focused with value
- **Character counter** requires `maxlength` to be set
- **Password eye** toggles between text/password type
- Values are **clamped** to min/max on blur

---

**Component File:** `input.md`
**Priority:** 🔴 CRITICAL
**Last Updated:** 2025-10-27
