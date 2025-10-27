# Select Component

> Flexible dropdown/select with single/multiple selection, search, categories, and mobile adaptation

## Import

```typescript
import { DbsSelectComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsSelectComponent],
})
```

## Basic Usage

```html
<!-- Single Select -->
<dbs-select
  [values]="options"
  [formControl]="myControl"
  placeholder="Select option">
</dbs-select>

<!-- Multiple Select -->
<dbs-select
  [values]="options"
  [formControl]="myControl"
  [multipleSelect]="true"
  placeholder="Select options">
</dbs-select>
```

---

## Key Properties

### Core Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **values** | `DropdownValue[]` | `[]` | Options array [{value, label}...] |
| **formControl** | `FormControl` | - | Angular form control |
| **placeholder** | `string` | `""` | Placeholder text |
| **readonlyPlaceholder** | `string` | `"-"` | Readonly placeholder |
| **size** | `'sm'\|'md'` | `'md'` | Select size (md=40px, sm=32px) |
| **disabled** | `boolean` | `false` | Disable select |
| **readonly** | `boolean` | `false` | Read-only mode |
| **errorMsg** | `string` | `""` | Error message |
| **helpText** | `string` | `""` | Helper text |

### Selection Mode

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **multipleSelect** | `boolean` | `false` | Enable multiple selection |
| **showItemCount** | `boolean` | `false` | Show "Selected (X)" instead of tags |
| **bindSingleFormValue** | `boolean` | `false` | Return only value property (string) |
| **valuesBinded** | `boolean` | `false` | Modify original values array |

### UI Features

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **showFilter** | `boolean` | `false` | Show search filter |
| **showClear** | `boolean` | `false` | Show clear button |
| **autoHeight** | `boolean` | `false` | Auto-expand height |
| **matchParentWidth** | `boolean\|number` | `false` | Limit dropdown width to parent |

### Mobile & Positioning

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **mobileBreakpoint** | `number` | `767` | Width for mobile view (bottom sheet) |
| **mobileTitle** | `string` | `""` | Mobile bottom sheet title |
| **mobileSubtitle** | `string` | `""` | Mobile bottom sheet subtitle |
| **popperPosition** | `string` | `'bottom-start'` | Dropdown position |
| **popperGap** | `number` | `8` | Gap between trigger and dropdown (px) |

### Search

| Property | Type | Description |
|----------|------|-------------|
| **searchkeyWords** | `string[]` | Properties to search by (default: all) |

### DropdownValue Interface

```typescript
interface DropdownValue {
  value: string;           // Required unique identifier
  label: string;           // Display text
  category?: string;       // Group category
  isDisabled?: boolean;    // Disable this option
  selected?: boolean;      // Preselect (single)
  checked?: boolean;       // Preselect (multiple)
  tooltipValue?: string;   // Tooltip text
}
```

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| **onSelect** | `EventEmitter` | Selected values (depends on bindSingleFormValue) |
| **onSelectDropdownValue** | `EventEmitter` | Always emits DropdownValue objects |
| **searchValueChange** | `EventEmitter<string>` | Search query changed |
| **menuClick** | `EventEmitter` | Option clicked |
| **onClose** | `EventEmitter` | Menu closed |
| **overlayClicked** | `EventEmitter` | Mobile overlay clicked |

---

## Examples

### Single Select Basic

```typescript
// Component
options: DropdownValue[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' }
];
selectedControl = new FormControl(null);
```

```html
<dbs-select
  [values]="options"
  [formControl]="selectedControl"
  placeholder="Choose an option">
</dbs-select>
```

### Multiple Select

```html
<dbs-select
  [values]="options"
  [formControl]="multiControl"
  [multipleSelect]="true"
  placeholder="Choose multiple">
</dbs-select>
```

### With Search Filter

```html
<dbs-select
  [values]="longList"
  [formControl]="control"
  [showFilter]="true"
  placeholder="Search and select">
</dbs-select>
```

### With Categories

```typescript
// Component
categorizedOptions: DropdownValue[] = [
  { category: 'Fruits', value: 'apple', label: 'Apple' },
  { category: 'Fruits', value: 'banana', label: 'Banana' },
  { category: 'Vegetables', value: 'carrot', label: 'Carrot' },
  { category: 'Vegetables', value: 'potato', label: 'Potato' }
];
```

```html
<dbs-select
  [values]="categorizedOptions"
  [formControl]="control"
  [showFilter]="true">
</dbs-select>
```

### Show Item Count (Multiple)

```html
<!-- Shows "Selected (3)" instead of tags -->
<dbs-select
  [values]="options"
  [formControl]="multiControl"
  [multipleSelect]="true"
  [showItemCount]="true">
</dbs-select>
```

### With Clear Button

```html
<dbs-select
  [values]="options"
  [formControl]="control"
  [showClear]="true"
  placeholder="Select...">
</dbs-select>
```

### Bind Only Value (String)

```typescript
// Component
control = new FormControl('2'); // Just the value string
```

```html
<!-- Returns only 'value' property, not full object -->
<dbs-select
  [values]="options"
  [formControl]="control"
  [bindSingleFormValue]="true">
</dbs-select>
<!-- control.value will be: "2" (not {value: "2", label: "Option 2"}) -->
```

### With Field Label

```html
<dbs-select
  [values]="options"
  [formControl]="control"
  [fieldLabel]="'Country'"
  [fieldLabelDisplayTooltipIcon]="true"
  [fieldLabelTooltipText]="'Select your country'"
  [helpText]="'Choose from the list'"
  [errorMsg]="control.invalid ? 'Required' : ''">
</dbs-select>
```

### Pre-selected Values

```typescript
// Single select - using FormControl
singleControl = new FormControl({ value: '2', label: 'Option 2' });

// Multiple select - using FormControl
multiControl = new FormControl([
  { value: '1', label: 'Option 1', checked: true },
  { value: '3', label: 'Option 3', checked: true }
]);
```

```html
<dbs-select [values]="options" [formControl]="singleControl"></dbs-select>

<dbs-select
  [values]="options"
  [formControl]="multiControl"
  [multipleSelect]="true">
</dbs-select>
```

### Mobile Configuration

```html
<dbs-select
  [values]="options"
  [formControl]="control"
  [mobileBreakpoint]="768"
  [mobileTitle]="'Select Option'"
  [mobileSubtitle]="'Choose from the list'"
  [bottomSheetHeight]="'60vh'"
  [bottomSheetMaxheight]="'90vh'">
</dbs-select>
```

### With Slots

```html
<dbs-select [values]="options" [formControl]="control">
  <svg-icon startSlot iconName="search"></svg-icon>
  <div endSlot>+{{control.value ? '1' : ''}}</div>
</dbs-select>
```

### Disabled State

```typescript
// Use FormControl.disable()
control = new FormControl({ value: disabled: true });
// OR
control.disable();
```

```html
<dbs-select
  [values]="options"
  [formControl]="control">
</dbs-select>
```

### Read-Only

```html
<!-- Single -->
<dbs-select
  [values]="options"
  [formControl]="control"
  [readonly]="true"
  [readonlyPlaceholder]="'Not selected'">
</dbs-select>

<!-- Multiple -->
<dbs-select
  [values]="options"
  [formControl]="multiControl"
  [multipleSelect]="true"
  [readonly]="true">
</dbs-select>
<!-- Displays as: value1, value2, value3 -->
```

### Size Variants

```html
<dbs-select [values]="options" [formControl]="control" [size]="'sm'"></dbs-select>
<dbs-select [values]="options" [formControl]="control" [size]="'md'"></dbs-select>
```

---

## Form Integration

```typescript
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbsSelectComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DbsSelectComponent, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <!-- Single Select -->
      <dbs-select
        formControlName="country"
        [values]="countries"
        [fieldLabel]="'Country'"
        [showFilter]="true"
        [errorMsg]="getError('country')"
        placeholder="Select country">
      </dbs-select>

      <!-- Multiple Select -->
      <dbs-select
        formControlName="interests"
        [values]="interests"
        [multipleSelect]="true"
        [fieldLabel]="'Interests'"
        [errorMsg]="getError('interests')"
        placeholder="Select interests">
      </dbs-select>

      <button type="submit" [disabled]="!form.valid">Submit</button>
    </form>
  `
})
export class FormComponent {
  countries: DropdownValue[] = [
    { value: 'sg', label: 'Singapore' },
    { value: 'my', label: 'Malaysia' },
    { value: 'id', label: 'Indonesia' }
  ];

  interests: DropdownValue[] = [
    { value: 'tech', label: 'Technology' },
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' }
  ];

  form = this.fb.group({
    country: [null, Validators.required],
    interests: [[], Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  getError(field: string): string {
    const control = this.form.get(field);
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'This field is required';
    return 'Invalid value';
  }

  submit() {
    console.log(this.form.value);
    // { country: {value: 'sg', label: 'Singapore'}, interests: [...] }
  }
}
```

---

## Behavior Notes

- **Mobile view** automatically activates when window width < `mobileBreakpoint` (default 767px)
- **Multiple select** shows tags by default, or count with `showItemCount="true"`
- **Non-matching values** in FormControl display but aren't selectable
- **Categories** create grouped sections with headers
- **Search** filters by all properties unless `searchkeyWords` limits scope
- **Clear button** clears selection and search
- **Dropdown positioning** auto-adjusts based on available space

---

## Custom Templates

```html
<dbs-select [values]="options" [formControl]="control">
  <!-- Custom option template -->
  <ng-template #selectOptionTemplate let-option let-index="index">
    <div class="custom-option" [class.selected]="option.selected">
      <dbs-avatar [name]="option.value"></dbs-avatar>
      <div>
        <div class="title">{{option.label}}</div>
        <div class="subtitle">{{option.category}}</div>
      </div>
    </div>
  </ng-template>

  <!-- Top section (doesn't scroll) -->
  <ng-template #selectTopSectionTemplate>
    <dbs-button size="sm">Add New</dbs-button>
  </ng-template>
</dbs-select>
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
--color-text-secondary            /* Secondary/placeholder text */
--color-text-success              /* Success state */
--color-text-error                /* Error state */
--color-text-disabled             /* Disabled text */
--color-background-level-0        /* Default background */
--color-background-level-1        /* Hover/selected background */
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

/* Select container */
dbs-select {
  width: 100%;
  max-width: 400px;
}

/* Small size select */
dbs-select[size="sm"] {
  font-size: 14px;
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

/* Multiple select tags container */
.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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

/* Grid layout for multiple selects */
.select-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

/* Inline label and select */
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

.inline-field dbs-select {
  flex: 1;
}
```

---

## Complete Example with Styling

### TypeScript (country-selector.component.ts)

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DbsSelectComponent, DropdownValue } from '@dbs-angular/core';

@Component({
  selector: 'app-country-selector',
  standalone: true,
  imports: [DbsSelectComponent, ReactiveFormsModule],
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent {
  selectorForm: FormGroup;

  countries: DropdownValue[] = [
    { category: 'Asia', value: 'sg', label: 'Singapore' },
    { category: 'Asia', value: 'my', label: 'Malaysia' },
    { category: 'Asia', value: 'id', label: 'Indonesia' },
    { category: 'Asia', value: 'th', label: 'Thailand' },
    { category: 'Europe', value: 'uk', label: 'United Kingdom' },
    { category: 'Europe', value: 'de', label: 'Germany' },
    { category: 'Europe', value: 'fr', label: 'France' },
    { category: 'Americas', value: 'us', label: 'United States' },
    { category: 'Americas', value: 'ca', label: 'Canada' },
    { category: 'Americas', value: 'mx', label: 'Mexico' }
  ];

  languages: DropdownValue[] = [
    { value: 'en', label: 'English' },
    { value: 'zh', label: 'Chinese' },
    { value: 'ms', label: 'Malay' },
    { value: 'ta', label: 'Tamil' },
    { value: 'hi', label: 'Hindi' }
  ];

  interests: DropdownValue[] = [
    { value: 'tech', label: 'Technology' },
    { value: 'finance', label: 'Finance' },
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'travel', label: 'Travel' },
    { value: 'food', label: 'Food & Dining' }
  ];

  constructor(private fb: FormBuilder) {
    this.selectorForm = this.fb.group({
      country: [null, Validators.required],
      language: [null, Validators.required],
      interests: [[], Validators.required],
      preferredRegion: ['sg']
    });
  }

  get countryError(): string {
    const control = this.selectorForm.get('country');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'Please select a country';
    return 'Invalid country';
  }

  get languageError(): string {
    const control = this.selectorForm.get('language');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'Please select a language';
    return 'Invalid language';
  }

  get interestsError(): string {
    const control = this.selectorForm.get('interests');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'Please select at least one interest';
    return 'Invalid interests';
  }

  isValid(fieldName: string): boolean {
    const control = this.selectorForm.get(fieldName);
    return control?.valid && control?.touched && !!control?.value;
  }

  onSubmit() {
    if (this.selectorForm.valid) {
      console.log('Form submitted:', this.selectorForm.value);
    }
  }
}
```

### HTML (country-selector.component.html)

```html
<form [formGroup]="selectorForm" (ngSubmit)="onSubmit()" class="form-container">
  <h2>User Preferences</h2>

  <!-- Single Select with Search -->
  <div class="form-field">
    <dbs-select
      formControlName="country"
      [values]="countries"
      [fieldLabel]="'Country'"
      [showFilter]="true"
      [showClear]="true"
      [required]="true"
      [errorMsg]="countryError"
      [helpText]="'Select your country of residence'"
      placeholder="Search or select country">
    </dbs-select>

    @if (isValid('country')) {
      <div class="success-indicator">
        <svg-icon iconName="checkmark"></svg-icon>
        <span>Country selected</span>
      </div>
    }
  </div>

  <!-- Single Select (Small Size) -->
  <div class="form-field">
    <dbs-select
      formControlName="language"
      [values]="languages"
      [fieldLabel]="'Preferred Language'"
      [size]="'sm'"
      [required]="true"
      [errorMsg]="languageError"
      [helpText]="'Choose your preferred language'"
      placeholder="Select language">
    </dbs-select>

    @if (isValid('language')) {
      <div class="success-indicator">
        <svg-icon iconName="checkmark"></svg-icon>
        <span>Language selected</span>
      </div>
    }
  </div>

  <!-- Multiple Select with Tags -->
  <div class="form-field">
    <dbs-select
      formControlName="interests"
      [values]="interests"
      [multipleSelect]="true"
      [fieldLabel]="'Interests'"
      [required]="true"
      [errorMsg]="interestsError"
      [helpText]="'Select one or more interests'"
      placeholder="Select interests">
    </dbs-select>

    @if (isValid('interests')) {
      <div class="success-indicator">
        <svg-icon iconName="checkmark"></svg-icon>
        <span>{{selectorForm.get('interests')?.value?.length}} interests selected</span>
      </div>
    }
  </div>

  <!-- Multiple Select with Item Count -->
  <div class="form-field">
    <dbs-select
      formControlName="interests"
      [values]="interests"
      [multipleSelect]="true"
      [showItemCount]="true"
      [fieldLabel]="'Interests (Item Count View)'"
      placeholder="Select interests">
    </dbs-select>
  </div>

  <!-- Single Select with String Value Binding -->
  <div class="form-field">
    <dbs-select
      formControlName="preferredRegion"
      [values]="countries"
      [bindSingleFormValue]="true"
      [fieldLabel]="'Preferred Region'"
      [showFilter]="true"
      placeholder="Select region">
    </dbs-select>
    <p class="helper-text">Selected value: {{selectorForm.get('preferredRegion')?.value}}</p>
  </div>

  <!-- Submit Button -->
  <div class="form-actions">
    <button
      type="submit"
      class="submit-btn"
      [disabled]="!selectorForm.valid">
      Submit
    </button>
    <button
      type="button"
      class="cancel-btn"
      (click)="selectorForm.reset()">
      Reset
    </button>
  </div>
</form>
```

### CSS (country-selector.component.css)

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

dbs-select {
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

.helper-text {
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-top: 4px;
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
<dbs-select style="width: 100%;"></dbs-select>

<!-- Max width (400px standard) -->
<dbs-select style="width: 100%; max-width: 400px;"></dbs-select>

<!-- Fixed width -->
<dbs-select style="width: 320px;"></dbs-select>

<!-- Responsive width -->
<dbs-select [ngStyle]="{ width: '100%', 'max-width': isMobile ? '100%' : '400px' }">
</dbs-select>
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

### Dropdown Width Control

```html
<!-- Match parent width -->
<dbs-select
  [matchParentWidth]="true"
  [values]="options"
  [formControl]="control">
</dbs-select>

<!-- Fixed dropdown width (pixels) -->
<dbs-select
  [matchParentWidth]="400"
  [values]="options"
  [formControl]="control">
</dbs-select>
```

### Multiple Select Tags Styling

```css
/* Tags container (handled by component) */
dbs-select ::ng-deep .dbs-tag {
  margin: 2px;
}

/* Custom tag spacing if needed */
.form-field dbs-select {
  --tag-gap: 8px;
}
```

### State-based Styling

```html
<!-- Success state -->
@if (formControl.valid && formControl.touched) {
  <div style="margin-top: 8px; color: var(--color-text-success); font-size: 14px;">
    ✓ Valid selection
  </div>
}

<!-- Error state (handled by component's errorMsg) -->
<dbs-select
  [errorMsg]="'This field is required'"
  [formControl]="control">
</dbs-select>

<!-- Disabled state -->
<dbs-select
  [disabled]="true"
  [formControl]="control">
</dbs-select>
```

### Mobile Bottom Sheet Styling

```html
<!-- Configure mobile view -->
<dbs-select
  [values]="options"
  [formControl]="control"
  [mobileBreakpoint]="768"
  [mobileTitle]="'Select Option'"
  [mobileSubtitle]="'Choose from the list below'"
  [bottomSheetHeight]="'60vh'"
  [bottomSheetMaxheight]="'90vh'">
</dbs-select>
```

```css
/* Mobile-specific adjustments */
@media (max-width: 768px) {
  dbs-select {
    width: 100%;
    max-width: 100%;
  }
}
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

.inline-form dbs-select {
  flex: 1;
}
```

```html
<div class="inline-form">
  <label>Country:</label>
  <dbs-select
    [values]="countries"
    [formControl]="countryControl"
    placeholder="Select country">
  </dbs-select>
</div>
```

---

**Component File:** `select.md`
**Priority:** 🔴 CRITICAL
**Last Updated:** 2025-10-27
