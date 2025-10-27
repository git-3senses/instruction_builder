# Radio Components

> Radio buttons for single-choice selection with group and chicklet variants

---

## Radio Group Component

Standard radio button group for selecting one option from multiple choices.

### Import

```typescript
import { DbsRadioGroupComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsRadioGroupComponent],
})
```

### Basic Usage

```typescript
// Component
options = [
  { label: 'Option 1', value: '1', id: 'opt1' },
  { label: 'Option 2', value: '2', id: 'opt2' },
  { label: 'Option 3', value: '3', id: 'opt3' }
];
formControl = new FormControl('2');
```

```html
<dbs-radio-group
  [options]="options"
  [formControl]="formControl">
</dbs-radio-group>
```

### Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **options** | `RadioOption[]` | `[]` | Radio options array |
| **value** | `string\|boolean` | - | Selected value |
| **formControl** | `FormControl` | - | Form control |
| **disabled** | `boolean` | `false` | Disable all |
| **size** | `'sm'\|'md'` | `'md'` | Size |
| **status** | `'default'\|'error'` | `'default'` | Status |

**RadioOption:**
```typescript
{
  label: string;
  value: string | boolean;
  id: string;
  description?: string;
  disabled?: boolean;
  status?: 'default' | 'error';
}
```

### Examples

#### With Descriptions

```typescript
options = [
  { label: 'Standard', value: '1', id: 'std', description: 'Default delivery' },
  { label: 'Express', value: '2', id: 'exp', description: 'Next day' }
];
```

#### Individual Control

```typescript
options = [
  { label: 'Option 1', value: '1', id: 'opt1' },
  { label: 'Disabled', value: '2', id: 'opt2', disabled: true },
  { label: 'Error', value: '3', id: 'opt3', status: 'error' }
];
```

---

## Radio Chicklet Component

Card-style radio buttons with custom content support.

### Import

```typescript
import { DbsRadioChicletComponent } from '@dbs-angular/core';
```

### Basic Usage

```html
<dbs-radio-chiclet
  [name]="'group'"
  [label]="'Option 1'"
  [value]="'opt1'"
  [formControl]="control">
</dbs-radio-chiclet>
```

### Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **label** | `string` | `""` | Label |
| **value** | `string` | `""` | Value |
| **checked** | `boolean` | `false` | Checked (green outline) |
| **name** | `string` | `""` | Group name |
| **disabled** | `boolean` | `false` | Disable |
| **status** | `'default'\|'error'` | `'default'` | Status |

### Slots

- **(default):** Custom content
- **radioChicletIconSlot:** Icon before label
- **radioChicletTagSlot:** Tag after label

### Examples

#### With Icon & Tag

```html
<dbs-radio-chiclet
  [name]="'service'"
  [label]="'DBS Remit'"
  [value]="'remit'"
  [formControl]="control">
  <svg-icon radioChicletIconSlot [iconName]="'bank'"></svg-icon>
  <dbs-tag radioChicletTagSlot>Premium</dbs-tag>
</dbs-radio-chiclet>
```

#### Custom Content

```html
<dbs-radio-chiclet [name]="'account'" [value]="'checking'">
  <hr style="margin: 0" />
  <div style="padding: 12px">
    <p>Balance: $10,000</p>
  </div>
</dbs-radio-chiclet>
```

---

## Form Example

```typescript
export class FormComponent {
  // Radio Group
  paymentOptions = [
    { label: 'Credit Card', value: 'credit', id: 'credit' },
    { label: 'Debit Card', value: 'debit', id: 'debit' }
  ];

  // Radio Chicklets
  deliveryOptions = [
    { label: 'Standard', value: 'std', id: 'std' },
    { label: 'Express', value: 'exp', id: 'exp' }
  ];

  form = this.fb.group({
    payment: ['credit', Validators.required],
    delivery: ['std', Validators.required]
  });
}
```

```html
<form [formGroup]="form">
  <!-- Radio Group -->
  <dbs-radio-group
    [options]="paymentOptions"
    formControlName="payment">
  </dbs-radio-group>

  <!-- Radio Chicklets -->
  <dbs-radio-chicklet
    *ngFor="let opt of deliveryOptions"
    [name]="'delivery'"
    [label]="opt.label"
    [value]="opt.value"
    [formControl]="form.get('delivery')!">
  </dbs-radio-chicklet>
</form>
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
--color-text-secondary            /* Secondary/description text */
--color-text-success              /* Success state */
--color-text-error                /* Error state */
--color-text-disabled             /* Disabled text */
--color-background-primary        /* Selected state background */
--color-background-level-1        /* Chicklet hover background */
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
/* Radio group container */
.radio-group-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

/* Field label above radio group */
.field-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

/* Radio chicklets container */
.radio-chicklets {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Horizontal radio chicklets */
.radio-chicklets-horizontal {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* Validation messages */
.validation-message {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  font-size: 12px;
}

.validation-message.success {
  color: var(--color-text-success);
}

.validation-message.error {
  color: var(--color-text-error);
}
```

### Layout Patterns

```css
/* Vertical radio list (default) */
.radio-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Horizontal radio layout */
.radio-horizontal {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

/* Grid layout for radio chicklets */
.chicklet-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

/* Two-column layout */
.radio-two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
```

---

## Complete Example with Styling

### TypeScript (payment-selection.component.ts)

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {
  DbsRadioGroupComponent,
  DbsRadioChicletComponent,
  DbsFieldLabelComponent
} from '@dbs-angular/core';

interface RadioOption {
  label: string;
  value: string;
  description?: string;
  id?: string;
  disabled?: boolean;
  status?: 'default' | 'error';
}

@Component({
  selector: 'app-payment-selection',
  standalone: true,
  imports: [
    DbsRadioGroupComponent,
    DbsRadioChicletComponent,
    DbsFieldLabelComponent,
    ReactiveFormsModule
  ],
  templateUrl: './payment-selection.component.html',
  styleUrls: ['./payment-selection.component.css']
})
export class PaymentSelectionComponent {
  paymentForm: FormGroup;

  paymentMethods: RadioOption[] = [
    {
      label: 'Credit Card',
      value: 'credit',
      description: 'Pay with Visa, Mastercard, or Amex',
      id: this.generateId()
    },
    {
      label: 'Debit Card',
      value: 'debit',
      description: 'Direct debit from your account',
      id: this.generateId()
    },
    {
      label: 'PayNow',
      value: 'paynow',
      description: 'Fast and secure mobile payment',
      id: this.generateId()
    },
    {
      label: 'Bank Transfer',
      value: 'transfer',
      description: 'Transfer from your bank account',
      id: this.generateId()
    }
  ];

  deliveryOptions: RadioOption[] = [
    {
      label: 'Standard Delivery',
      value: 'standard',
      description: '5-7 business days',
      id: this.generateId()
    },
    {
      label: 'Express Delivery',
      value: 'express',
      description: '2-3 business days',
      id: this.generateId()
    },
    {
      label: 'Same Day Delivery',
      value: 'sameday',
      description: 'Order before 2 PM',
      id: this.generateId()
    }
  ];

  accountTypes: RadioOption[] = [
    { label: 'Savings', value: 'savings', id: this.generateId() },
    { label: 'Current', value: 'current', id: this.generateId() },
    { label: 'Fixed Deposit', value: 'fd', id: this.generateId() }
  ];

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      paymentMethod: [null, Validators.required],
      deliveryOption: ['standard', Validators.required],
      accountType: [null, Validators.required]
    });
  }

  generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  get paymentMethodError(): string {
    const control = this.paymentForm.get('paymentMethod');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'Please select a payment method';
    return 'Invalid selection';
  }

  get accountTypeError(): string {
    const control = this.paymentForm.get('accountType');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'Please select an account type';
    return 'Invalid selection';
  }

  isValid(fieldName: string): boolean {
    const control = this.paymentForm.get(fieldName);
    return control?.valid && control?.touched && !!control?.value;
  }

  onPaymentMethodChange(value: string) {
    console.log('Payment method changed:', value);
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      console.log('Form submitted:', this.paymentForm.value);
    } else {
      this.paymentForm.markAllAsTouched();
    }
  }
}
```

### HTML (payment-selection.component.html)

```html
<form [formGroup]="paymentForm" (ngSubmit)="onSubmit()" class="form-container">
  <h2>Payment & Delivery</h2>

  <!-- Radio Group (Standard Radio Buttons) -->
  <div class="form-section">
    <dbs-field-label>Payment Method</dbs-field-label>

    <dbs-radio-group
      [options]="paymentMethods"
      formControlName="paymentMethod"
      [size]="'md'"
      (valueChange)="onPaymentMethodChange($event)">
    </dbs-radio-group>

    @if (paymentMethodError && paymentForm.get('paymentMethod')?.touched) {
      <div class="validation-message error">
        <svg-icon iconName="error"></svg-icon>
        <span>{{paymentMethodError}}</span>
      </div>
    }

    @if (isValid('paymentMethod')) {
      <div class="validation-message success">
        <svg-icon iconName="checkmark"></svg-icon>
        <span>Payment method selected</span>
      </div>
    }
  </div>

  <!-- Radio Chicklets (Card-style Radio Buttons) -->
  <div class="form-section">
    <dbs-field-label>Delivery Option</dbs-field-label>

    <div class="radio-chicklets">
      <dbs-radio-chicklet
        *ngFor="let option of deliveryOptions"
        [name]="'delivery'"
        [label]="option.label"
        [value]="option.value"
        [id]="option.id"
        [formControl]="paymentForm.get('deliveryOption')">
        <div radioChicletContentSlot class="chicklet-description">
          {{option.description}}
        </div>
      </dbs-radio-chicklet>
    </div>

    @if (isValid('deliveryOption')) {
      <div class="validation-message success">
        <svg-icon iconName="checkmark"></svg-icon>
        <span>Delivery option selected</span>
      </div>
    }
  </div>

  <!-- Horizontal Radio Group (Small Size) -->
  <div class="form-section">
    <dbs-field-label size="sm">Account Type</dbs-field-label>

    <dbs-radio-group
      [options]="accountTypes"
      formControlName="accountType"
      [size]="'sm'"
      [status]="accountTypeError ? 'error' : 'default'">
    </dbs-radio-group>

    @if (accountTypeError && paymentForm.get('accountType')?.touched) {
      <div class="validation-message error">
        <svg-icon iconName="error"></svg-icon>
        <span>{{accountTypeError}}</span>
      </div>
    }
  </div>

  <!-- Radio Chicklets in Grid Layout -->
  <div class="form-section">
    <dbs-field-label>Preferred Communication</dbs-field-label>

    <div class="chicklet-grid">
      <dbs-radio-chicklet
        [name]="'communication'"
        [label]="'Email'"
        [value]="'email'"
        [id]="generateId()">
        <svg-icon radioChicletIconSlot iconName="mail"></svg-icon>
      </dbs-radio-chicklet>

      <dbs-radio-chicklet
        [name]="'communication'"
        [label]="'SMS'"
        [value]="'sms'"
        [id]="generateId()">
        <svg-icon radioChicletIconSlot iconName="phone"></svg-icon>
      </dbs-radio-chicklet>

      <dbs-radio-chicklet
        [name]="'communication'"
        [label]="'Push Notification'"
        [value]="'push'"
        [id]="generateId()">
        <svg-icon radioChicletIconSlot iconName="bell"></svg-icon>
      </dbs-radio-chicklet>
    </div>
  </div>

  <!-- Submit Button -->
  <div class="form-actions">
    <button
      type="submit"
      class="submit-btn"
      [disabled]="!paymentForm.valid">
      Continue to Payment
    </button>
    <button
      type="button"
      class="cancel-btn"
      (click)="paymentForm.reset()">
      Reset
    </button>
  </div>
</form>
```

### CSS (payment-selection.component.css)

```css
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.form-container h2 {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Radio group styling */
dbs-radio-group {
  width: 100%;
}

/* Radio chicklets container */
.radio-chicklets {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Chicklet description styling */
.chicklet-description {
  margin-top: 4px;
  font-size: 13px;
  color: var(--color-text-secondary);
}

/* Grid layout for chicklets */
.chicklet-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.chicklet-grid dbs-radio-chicklet {
  min-height: 80px;
}

/* Validation messages */
.validation-message {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  font-size: 12px;
}

.validation-message.success {
  color: var(--color-text-success);
}

.validation-message.error {
  color: var(--color-text-error);
}

.validation-message svg-icon {
  width: 14px;
  height: 14px;
}

/* Form actions */
.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
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

  .chicklet-grid {
    grid-template-columns: 1fr;
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

### Vertical Spacing

```css
/* Standard radio group spacing */
dbs-radio-group {
  margin-bottom: 16px;
}

/* Chicklet spacing */
.radio-chicklets {
  display: flex;
  flex-direction: column;
  gap: 12px; /* 12px between chicklets */
}

/* Section spacing */
:host {
  display: flex;
  flex-direction: column;
  gap: 32px; /* 32px between sections */
}
```

### Horizontal Layout

```css
/* Horizontal radio chicklets */
.radio-chicklets-horizontal {
  display: flex;
  gap: 16px; /* 16px between horizontal chicklets */
  flex-wrap: wrap;
}

/* Prevent wrapping if needed */
.radio-chicklets-horizontal-nowrap {
  display: flex;
  gap: 16px;
  overflow-x: auto;
}
```

### Grid Layout

```css
/* Responsive grid for chicklets */
.chicklet-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

/* Two-column layout */
.chicklet-two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

/* Three-column layout */
.chicklet-three-column {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

### State-based Styling

```html
<!-- Success indicator -->
@if (formControl.valid && formControl.value) {
  <div style="margin-top: 8px; color: var(--color-text-success); font-size: 14px;">
    ✓ Option selected
  </div>
}

<!-- Error with component status -->
<dbs-radio-group
  [status]="'error'"
  [options]="options"
  [formControl]="control">
</dbs-radio-group>

<!-- Error message -->
@if (control.invalid && control.touched) {
  <div style="margin-top: 4px; color: var(--color-text-error); font-size: 12px;">
    Please select an option
  </div>
}
```

### Chicklet Custom Content

```css
/* Custom content within chicklet */
.chicklet-custom-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
}

.chicklet-custom-content .title {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-primary);
}

.chicklet-custom-content .description {
  font-size: 13px;
  color: var(--color-text-secondary);
}
```

```html
<dbs-radio-chicklet [name]="'option'" [value]="'1'">
  <div radioChicletContentSlot class="chicklet-custom-content">
    <div class="title">Premium Plan</div>
    <div class="description">$29/month</div>
  </div>
</dbs-radio-chicklet>
```

---

**Component File:** `radio.md`
**Priority:** 🔴 CRITICAL
**Last Updated:** 2025-10-27
