# Checkbox Component

> Standard checkbox with label, description, validation states, and indeterminate support

## Import

```typescript
import { DbsCheckboxComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsCheckboxComponent],
})
```

## Basic Usage

```html
<!-- Basic -->
<dbs-checkbox [label]="'Accept terms'"></dbs-checkbox>

<!-- With FormControl -->
<dbs-checkbox
  [formControl]="termsControl"
  [label]="'I agree to terms'">
</dbs-checkbox>

<!-- With Description -->
<dbs-checkbox
  [label]="'Subscribe to newsletter'"
  [description]="'Receive weekly updates'">
</dbs-checkbox>
```

---

## Key Properties

### Core Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **label** | `string` | `""` | Checkbox label text |
| **checked** | `boolean` | `false` | Checked state |
| **indeterminate** | `boolean` | `false` | Indeterminate state (mixed) |
| **disabled** | `boolean` | `false` | Disable checkbox |
| **readonly** | `boolean` | `false` | Readonly mode (prevents changes) |
| **value** | `string` | `""` | Checkbox value |
| **checkboxId** | `string` | Auto | Checkbox ID |

### UI Features

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **description** | `string` | `""` | Helper text below label |
| **size** | `'sm'\|'md'` | `'md'` | Checkbox size |
| **status** | `'default'\|'error'` | `'default'` | Validation status |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| **onChange** | `EventEmitter` | Value changed |
| **onInput** | `EventEmitter` | Each value alteration |
| **onFocus** | `EventEmitter` | Focus gained |
| **onBlur** | `EventEmitter` | Focus lost |

### Slots

| Slot | Description |
|------|-------------|
| **(default)** | Custom content replacing label |
| **labelStartSlot** | Content before label |
| **labelEndSlot** | Content after label |

---

## Examples

### Basic Checkbox

```html
<dbs-checkbox [label]="'Basic checkbox'"></dbs-checkbox>
```

### With Field Label

```html
<dbs-field-label>Email Preferences</dbs-field-label>
<dbs-checkbox [label]="'Send me updates'"></dbs-checkbox>
```

### With Description

```html
<dbs-checkbox
  [label]="'Enable notifications'"
  [description]="'Get alerts for important events'">
</dbs-checkbox>
```

### Size Variants

```html
<!-- Medium (default) -->
<dbs-field-label size="md">Medium Label</dbs-field-label>
<dbs-checkbox
  [size]="'md'"
  [label]="'Medium checkbox'">
</dbs-checkbox>

<!-- Small -->
<dbs-field-label size="sm">Small Label</dbs-field-label>
<dbs-checkbox
  [size]="'sm'"
  [label]="'Small checkbox'">
</dbs-checkbox>
```

### Checked State

```html
<dbs-checkbox
  [label]="'Pre-checked'"
  [checked]="true">
</dbs-checkbox>
```

### Indeterminate State

```html
<!-- Useful for "select all" functionality -->
<dbs-checkbox
  #parentCheckbox
  [label]="'Select all'"
  [indeterminate]="true">
</dbs-checkbox>

<p>Indeterminate: {{parentCheckbox.indeterminate}}</p>
<p>Checked: {{parentCheckbox.checked}}</p>
```

### Disabled States

```html
<dbs-checkbox
  [label]="'Unchecked disabled'"
  [disabled]="true"
  [checked]="false">
</dbs-checkbox>

<dbs-checkbox
  [label]="'Checked disabled'"
  [disabled]="true"
  [checked]="true">
</dbs-checkbox>

<dbs-checkbox
  [label]="'Indeterminate disabled'"
  [disabled]="true"
  [indeterminate]="true">
</dbs-checkbox>
```

### Read-Only States

```html
<!-- Note: Native checkbox doesn't have readonly, but DBS implements it -->
<dbs-checkbox
  [label]="'Unchecked readonly'"
  [readonly]="true"
  [checked]="false">
</dbs-checkbox>

<dbs-checkbox
  [label]="'Checked readonly'"
  [readonly]="true"
  [checked]="true">
</dbs-checkbox>
```

### Validation Status

```html
<!-- Default -->
<dbs-checkbox
  [status]="'default'"
  [label]="'Default status'">
</dbs-checkbox>

<!-- Error -->
<dbs-checkbox
  [status]="'error'"
  [label]="'Error status'">
</dbs-checkbox>
```

### Event Handling

```typescript
// Component
export class MyComponent {
  onEvent(event: DbsCustomEventValue<DbsCheckboxComponent>) {
    console.log('Event type:', event.type);
    console.log('Checked:', event.instance?.checked);
  }
}
```

```html
<dbs-checkbox
  [label]="'Interactive checkbox'"
  [value]="'checkboxValue'"
  (onBlur)="onEvent($event)"
  (onChange)="onEvent($event)"
  (onFocus)="onEvent($event)"
  (onInput)="onEvent($event)">
</dbs-checkbox>
```

---

## Form Integration

### Reactive Form Control

```typescript
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DbsCheckboxComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DbsCheckboxComponent, ReactiveFormsModule],
  template: `
    <dbs-checkbox
      [formControl]="termsControl"
      [label]="'I agree to the terms and conditions'">
    </dbs-checkbox>

    <p>Checked: {{termsControl.value}}</p>
    <p>Touched: {{termsControl.touched}}</p>
    <p>Dirty: {{termsControl.dirty}}</p>
    <p>Valid: {{termsControl.valid}}</p>
  `
})
export class FormComponent {
  termsControl = new FormControl(false, Validators.requiredTrue);
}
```

### Form Group

```typescript
export class BurgerFormComponent {
  burgerForm = new FormGroup({
    tomato: new FormControl(false),
    cheese: new FormControl(false),
    lettuce: new FormControl(false),
    krabbyPatty: new FormControl(false),
    secretFormula: new FormControl(false)
  });

  onCheckboxChange(event: DbsCustomEventValue<DbsCheckboxComponent>) {
    const value = (event.event!.target as HTMLInputElement).value;
    const isChecked = (event.event!.target as HTMLInputElement).checked;
    this.burgerForm.controls[value].setValue(isChecked);
  }
}
```

```html
<form [formGroup]="burgerForm">
  <dbs-checkbox
    formControlName="tomato"
    [label]="'Tomato'"
    [value]="'tomato'"
    (onChange)="onCheckboxChange($event)">
  </dbs-checkbox>

  <dbs-checkbox
    formControlName="cheese"
    [label]="'Cheese'"
    [value]="'cheese'"
    (onChange)="onCheckboxChange($event)">
  </dbs-checkbox>

  <dbs-checkbox
    formControlName="lettuce"
    [label]="'Lettuce'"
    [value]="'lettuce'"
    (onChange)="onCheckboxChange($event)">
  </dbs-checkbox>
</form>

<p>Ingredients:
  @for (ingredient of burgerForm.value | keyvalue; track ingredient.key) {
    @if (ingredient.value) {
      {{ingredient.key}}
    }
  }
</p>
```

### Form Array

```typescript
export class OrdersComponent {
  formBuilder = inject(FormBuilder);

  defaultBurger = {
    tomato: false,
    cheese: false,
    lettuce: false
  };

  orders = this.formBuilder.group({
    burgers: this.formBuilder.array([
      this.formBuilder.group(this.defaultBurger)
    ])
  });

  get burgers() {
    return this.orders.get('burgers') as FormArray;
  }

  addBurger() {
    const burger = this.formBuilder.group(this.defaultBurger);
    this.burgers.push(burger);
  }

  onCheckboxChange(index: number, event: DbsCustomEventValue<DbsCheckboxComponent>) {
    const value = (event.event!.target as HTMLInputElement).value;
    const isChecked = (event.event!.target as HTMLInputElement).checked;
    const burger: any = {...this.burgers.controls[index].value};
    burger[value] = isChecked;
    this.burgers.controls[index].setValue(burger);
  }
}
```

```html
<form [formGroup]="orders">
  <div formArrayName="burgers">
    @for (burger of burgers.controls; track $index) {
      <div [formGroupName]="$index">
        <dbs-checkbox
          formControlName="tomato"
          [label]="'Tomato'"
          [value]="'tomato'"
          (onChange)="onCheckboxChange($index, $event)">
        </dbs-checkbox>

        <dbs-checkbox
          formControlName="cheese"
          [label]="'Cheese'"
          [value]="'cheese'"
          (onChange)="onCheckboxChange($index, $event)">
        </dbs-checkbox>
      </div>
    }
  </div>

  <dbs-button (click)="addBurger()">+ Add another order</dbs-button>
</form>
```

---

## Indeterminate Directive

The `indeterminateCheckbox` directive controls child checkboxes and manages indeterminate state.

### Import

```typescript
import { DbsIndeterminateDirective } from '@dbs-angular/core';

@Component({
  imports: [DbsCheckboxComponent, DbsIndeterminateDirective]
})
```

### Usage

```typescript
export class SelectAllComponent {
  checkboxChecked = false;

  itemsForm = new FormGroup({
    item1: new FormControl(false),
    item2: new FormControl(true)
  });
}
```

```html
<!-- Parent checkbox with directive -->
<dbs-checkbox
  indeterminateCheckbox
  [attachedFormGroup]="itemsForm"
  [(checkboxChecked)]="checkboxChecked"
  [label]="'Select All'">
</dbs-checkbox>

<!-- Child checkboxes -->
<div style="margin-left: 24px;">
  <dbs-checkbox
    [formControl]="itemsForm.controls.item1"
    [label]="'Item 1'">
  </dbs-checkbox>

  <dbs-checkbox
    [formControl]="itemsForm.controls.item2"
    [label]="'Item 2'">
  </dbs-checkbox>
</div>
```

**Behavior:**
- Parent checkbox becomes **indeterminate** when some (but not all) children are checked
- Clicking parent checkbox **checks/unchecks all** children
- Parent checkbox updates automatically when children change

---

## Custom Content Slots

### Default Slot (Custom Label)

```html
<div class="dbs-checkbox--center">
  <dbs-checkbox #checkbox>
    <label [for]="checkbox.checkboxId" class="custom-label">
      <div class="content">
        <dbs-avatar [variant]="'logo'">
          <img src="./favicon.svg" />
        </dbs-avatar>

        <div>
          <div class="account">My Account</div>
          <div class="account-number">7383682-293-1</div>
        </div>

        <dbs-currency-pair
          [currency]="'sgd'"
          [amount]="'10000'">
        </dbs-currency-pair>
      </div>
    </label>
  </dbs-checkbox>
</div>
```

**Note:** Use `.dbs-checkbox--center` class on host or parent to center-align checkbox for tall custom content.

---

## Behavior Notes

- **Indeterminate state** is visual only (value is still true/false)
- **Readonly** prevents changes (native checkbox doesn't support this)
- **Status="error"** changes visual styling (red border)
- **Disabled** prevents all interaction
- **Custom slots** require manual `[for]` binding to `checkbox.checkboxId`

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
--color-background-primary        /* Checkbox checked background */
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
/* Checkbox group container */
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

/* Individual checkbox wrapper */
.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

/* Field label above checkboxes */
.field-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

/* Checkbox with centered alignment for tall content */
.dbs-checkbox--center {
  align-items: center;
}

/* Success/Error messages */
.validation-message {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
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
/* Vertical checkbox list */
.checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

/* Horizontal checkbox layout */
.checkbox-row {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

/* Grid layout for multiple checkboxes */
.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

/* Indented child checkboxes */
.checkbox-children {
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
```

---

## Complete Example with Styling

### TypeScript (preferences-form.component.ts)

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DbsCheckboxComponent, DbsIndeterminateDirective } from '@dbs-angular/core';

@Component({
  selector: 'app-preferences-form',
  standalone: true,
  imports: [DbsCheckboxComponent, DbsIndeterminateDirective, ReactiveFormsModule],
  templateUrl: './preferences-form.component.html',
  styleUrls: ['./preferences-form.component.css']
})
export class PreferencesFormComponent {
  preferencesForm: FormGroup;
  notificationsGroup: FormGroup;
  selectAllChecked = false;

  constructor(private fb: FormBuilder) {
    this.notificationsGroup = this.fb.group({
      email: [false],
      sms: [false],
      push: [false]
    });

    this.preferencesForm = this.fb.group({
      termsAccepted: [false, Validators.requiredTrue],
      newsletter: [false],
      marketing: [false],
      notifications: this.notificationsGroup
    });
  }

  get termsError(): string {
    const control = this.preferencesForm.get('termsAccepted');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'You must accept the terms';
    return 'Invalid';
  }

  isValid(fieldName: string): boolean {
    const control = this.preferencesForm.get(fieldName);
    return control?.valid && control?.touched && !!control?.value;
  }

  getNotificationCount(): number {
    const notifications = this.notificationsGroup.value;
    return Object.values(notifications).filter(v => v === true).length;
  }

  onSubmit() {
    if (this.preferencesForm.valid) {
      console.log('Form submitted:', this.preferencesForm.value);
    } else {
      // Mark all as touched to show errors
      this.preferencesForm.markAllAsTouched();
    }
  }
}
```

### HTML (preferences-form.component.html)

```html
<form [formGroup]="preferencesForm" (ngSubmit)="onSubmit()" class="form-container">
  <h2>User Preferences</h2>

  <!-- Required Checkbox with Validation -->
  <div class="form-section">
    <dbs-checkbox
      formControlName="termsAccepted"
      [label]="'I accept the terms and conditions'"
      [description]="'You must accept to continue'"
      [status]="termsError ? 'error' : 'default'"
      [required]="true">
    </dbs-checkbox>

    @if (termsError && preferencesForm.get('termsAccepted')?.touched) {
      <div class="validation-message error">
        <svg-icon iconName="error"></svg-icon>
        <span>{{termsError}}</span>
      </div>
    }

    @if (isValid('termsAccepted')) {
      <div class="validation-message success">
        <svg-icon iconName="checkmark"></svg-icon>
        <span>Thank you for accepting</span>
      </div>
    }
  </div>

  <!-- Simple Checkboxes -->
  <div class="form-section">
    <div class="field-label">Communication Preferences</div>

    <div class="checkbox-group">
      <dbs-checkbox
        formControlName="newsletter"
        [label]="'Subscribe to newsletter'"
        [description]="'Weekly updates about new features'">
      </dbs-checkbox>

      <dbs-checkbox
        formControlName="marketing"
        [label]="'Receive marketing emails'"
        [description]="'Promotional offers and discounts'">
      </dbs-checkbox>
    </div>
  </div>

  <!-- Checkbox Group with Select All (Indeterminate) -->
  <div class="form-section">
    <div class="field-label">Notification Channels</div>

    <dbs-checkbox
      indeterminateCheckbox
      [attachedFormGroup]="notificationsGroup"
      [(checkboxChecked)]="selectAllChecked"
      [label]="'Enable all notifications'"
      [size]="'md'">
    </dbs-checkbox>

    <div class="checkbox-children">
      <dbs-checkbox
        [formControl]="notificationsGroup.controls['email']"
        [label]="'Email notifications'"
        [description]="'Receive notifications via email'"
        [size]="'sm'">
      </dbs-checkbox>

      <dbs-checkbox
        [formControl]="notificationsGroup.controls['sms']"
        [label]="'SMS notifications'"
        [description]="'Receive notifications via SMS'"
        [size]="'sm'">
      </dbs-checkbox>

      <dbs-checkbox
        [formControl]="notificationsGroup.controls['push']"
        [label]="'Push notifications'"
        [description]="'Receive push notifications on mobile'"
        [size]="'sm'">
      </dbs-checkbox>
    </div>

    @if (getNotificationCount() > 0) {
      <div class="validation-message success">
        <svg-icon iconName="checkmark"></svg-icon>
        <span>{{getNotificationCount()}} notification channel(s) enabled</span>
      </div>
    }
  </div>

  <!-- Horizontal Layout Example -->
  <div class="form-section">
    <div class="field-label">Quick Options</div>

    <div class="checkbox-row">
      <dbs-checkbox
        [label]="'Remember me'"
        [size]="'sm'">
      </dbs-checkbox>

      <dbs-checkbox
        [label]="'Stay signed in'"
        [size]="'sm'">
      </dbs-checkbox>

      <dbs-checkbox
        [label]="'Enable auto-save'"
        [size]="'sm'">
      </dbs-checkbox>
    </div>
  </div>

  <!-- Disabled State Example -->
  <div class="form-section">
    <div class="field-label">Premium Features (Disabled)</div>

    <div class="checkbox-group">
      <dbs-checkbox
        [label]="'Advanced analytics'"
        [description]="'Available with premium plan'"
        [disabled]="true"
        [checked]="false">
      </dbs-checkbox>

      <dbs-checkbox
        [label]="'Priority support'"
        [description]="'24/7 dedicated support'"
        [disabled]="true"
        [checked]="false">
      </dbs-checkbox>
    </div>
  </div>

  <!-- Submit Button -->
  <div class="form-actions">
    <button
      type="submit"
      class="submit-btn"
      [disabled]="!preferencesForm.valid">
      Save Preferences
    </button>
    <button
      type="button"
      class="cancel-btn"
      (click)="preferencesForm.reset()">
      Reset
    </button>
  </div>
</form>
```

### CSS (preferences-form.component.css)

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

.field-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.checkbox-children {
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
}

.checkbox-row {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.validation-message {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
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

  .checkbox-row {
    flex-direction: column;
  }

  .checkbox-children {
    margin-left: 16px;
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
/* Standard checkbox group spacing */
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 16px; /* 16px between checkboxes */
}

/* Section spacing */
:host {
  display: flex;
  flex-direction: column;
  gap: 24px; /* 24px between sections */
}
```

### Horizontal Layout

```css
/* Inline checkboxes */
.checkbox-row {
  display: flex;
  gap: 24px; /* 24px between horizontal checkboxes */
  flex-wrap: wrap;
}

/* Grid layout */
.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

### Indented Children (Select All Pattern)

```css
/* Parent checkbox */
.parent-checkbox {
  margin-bottom: 8px;
}

/* Child checkboxes indented */
.checkbox-children {
  margin-left: 24px; /* 24px indent */
  display: flex;
  flex-direction: column;
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
<dbs-checkbox
  [status]="'error'"
  [label]="'Required checkbox'"
  [formControl]="control">
</dbs-checkbox>

<!-- Error message -->
@if (control.invalid && control.touched) {
  <div style="margin-top: 4px; color: var(--color-text-error); font-size: 12px;">
    This field is required
  </div>
}
```

### Custom Content Alignment

```css
/* Center-align checkbox for tall custom content */
.dbs-checkbox--center {
  align-items: center;
}
```

```html
<div class="dbs-checkbox--center">
  <dbs-checkbox #checkbox>
    <label [for]="checkbox.checkboxId" class="custom-label">
      <div class="title">Custom Title</div>
      <div class="description">Long description content...</div>
    </label>
  </dbs-checkbox>
</div>
```

---

## Accessibility

- Checkboxes are keyboard accessible (Space to toggle)
- Labels are properly associated with inputs
- Disabled state prevents focus
- ARIA attributes are handled automatically

---

**Component File:** `checkbox.md`
**Priority:** 🔴 CRITICAL
**Last Updated:** 2025-10-27
