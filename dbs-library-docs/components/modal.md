# Modal Component

> Dialog overlay for forms, alerts, and complex interactions with header, content, and footer sections

## Import

```typescript
import { DbsModalComponent, DbsModalHeaderComponent, DbsModalFooterComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsModalComponent, DbsModalHeaderComponent, DbsModalFooterComponent],
})
```

## Basic Usage

```html
<!-- Basic Modal -->
<dbs-button (click)="dialog.showDialog()">Show Modal</dbs-button>
<dbs-modal #dialog [title]="'Modal Title'" [subtitle]="'Optional subtitle'">
  <div class="modal-content">
    Modal content goes here
  </div>
</dbs-modal>

<!-- Modal with Footer -->
<dbs-modal #dialog2 [title]="'Confirm Action'">
  <div class="modal-content">
    Are you sure you want to proceed?
  </div>

  <dbs-modal-footer footerSlot>
    <dbs-button variant="primary" (click)="confirm()">Confirm</dbs-button>
    <dbs-button (click)="dialog2.close()">Cancel</dbs-button>
  </dbs-modal-footer>
</dbs-modal>
```

---

## Key Properties

### Core Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **title** | `string` | `""` | Modal title in header |
| **subtitle** | `string` | `""` | Optional subtitle |
| **opened** | `boolean` | `false` | Show/hide modal |
| **size** | `'sm'\|'md'\|'lg'` | `'md'` | Max width (sm=400px, md=600px, lg=960px) |
| **dismissible** | `boolean` | `true` | Allow closing via overlay/escape |
| **overlay** | `boolean` | `true` | Show backdrop overlay |
| **scrollLock** | `boolean` | `true` | Lock page scroll when open |
| **topLayer** | `boolean` | `true` | Render in top-layer (over everything) |
| **zIndex** | `number\|string` | `900` | Custom z-index value |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| **openedChange** | `EventEmitter<boolean>` | Emits when modal opens/closes |
| **openDialog** | `EventEmitter` | Emits when modal opens |
| **closeDialog** | `EventEmitter` | Emits when modal closes |

### Methods

| Method | Description |
|--------|-------------|
| **showDialog()** | Opens modal (uses topLayer setting) |
| **show()** | Opens modal in parent container |
| **showModal()** | Opens modal in top-layer |
| **close()** | Closes modal |

### Slots

| Slot | Description |
|------|-------------|
| **(default)** | Modal body content |
| **headerSlot** | Custom header (replaces default) |
| **footerSlot** | Modal footer with actions |

---

## CSS & Styling

### Design Tokens Used

```css
/* Modal Content Padding */
--modal-content-padding-top           /* Top padding */
--modal-content-padding-right         /* Right padding (mobile) */
--modal-content-padding-bottom        /* Bottom padding */
--modal-content-padding-left          /* Left padding (mobile) */
--modal-content-md-padding-right      /* Right padding (desktop) */
--modal-content-md-padding-left       /* Left padding (desktop) */

/* Colors */
--color-background-level-0            /* Modal background */
--color-text-primary                  /* Title text */
--color-text-secondary                /* Subtitle text */
--color-border                        /* Borders */

/* Spacing */
--spacing-md                          /* 16px */
--spacing-lg                          /* 24px */
```

### Component Styling

```css
/* Modal content padding (DLS recommended pattern) */
.modal-content {
  padding-top: var(--modal-content-padding-top);
  padding-right: var(--modal-content-padding-right);
  padding-bottom: var(--modal-content-padding-bottom);
  padding-left: var(--modal-content-padding-left);
}

@media only screen and (min-width: 40em) {
  .modal-content {
    padding-right: var(--modal-content-md-padding-right);
    padding-left: var(--modal-content-md-padding-left);
  }
}

/* Form container within modal */
.modal-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}

/* Modal sections */
.modal-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
```

---

## Complete Example with Styling

### TypeScript (confirmation-modal.component.ts)

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {
  DbsModalComponent,
  DbsModalHeaderComponent,
  DbsModalFooterComponent,
  DbsButtonComponent,
  DbsInputComponent,
  DbsCheckboxComponent
} from '@dbs-angular/core';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [
    DbsModalComponent,
    DbsModalHeaderComponent,
    DbsModalFooterComponent,
    DbsButtonComponent,
    DbsInputComponent,
    DbsCheckboxComponent,
    ReactiveFormsModule
  ],
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  // Simple confirmation modal
  confirmOpened = false;

  // Form modal
  formOpened = false;
  userForm: FormGroup;

  // Success modal
  successOpened = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  // Simple confirmation
  openConfirmation() {
    this.confirmOpened = true;
  }

  confirmAction() {
    console.log('Action confirmed');
    this.confirmOpened = false;
    // Perform action
    this.showSuccess();
  }

  // Form modal
  openForm() {
    this.formOpened = true;
    this.userForm.reset();
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
      this.formOpened = false;
      this.showSuccess();
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  // Success modal
  showSuccess() {
    this.successOpened = true;
    setTimeout(() => {
      this.successOpened = false;
    }, 3000);
  }

  get fullNameError(): string {
    const control = this.userForm.get('fullName');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'Name is required';
    return 'Invalid name';
  }

  get emailError(): string {
    const control = this.userForm.get('email');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'Email is required';
    if (control.errors['email']) return 'Invalid email format';
    return 'Invalid email';
  }

  get termsError(): string {
    const control = this.userForm.get('agreeTerms');
    if (!control?.touched || !control?.errors) return '';
    if (control.errors['required']) return 'You must accept the terms';
    return 'Invalid';
  }
}
```

### HTML (confirmation-modal.component.html)

```html
<div class="demo-container">
  <h2>Modal Examples</h2>

  <div class="button-group">
    <dbs-button (click)="openConfirmation()">
      Show Confirmation Modal
    </dbs-button>

    <dbs-button (click)="openForm()">
      Show Form Modal
    </dbs-button>
  </div>

  <!-- Simple Confirmation Modal (Small Size) -->
  <dbs-modal
    #confirmDialog
    [title]="'Confirm Action'"
    [subtitle]="'This action cannot be undone'"
    [size]="'sm'"
    [opened]="confirmOpened"
    (openedChange)="confirmOpened = $event">

    <div class="modal-content">
      <p>Are you sure you want to proceed with this action?</p>
    </div>

    <dbs-modal-footer footerSlot [mobileButtonLayout]="'stacked'">
      <dbs-button variant="primary" (click)="confirmAction()">
        Confirm
      </dbs-button>
      <dbs-button (click)="confirmOpened = false">
        Cancel
      </dbs-button>
    </dbs-modal-footer>
  </dbs-modal>

  <!-- Form Modal (Medium Size) -->
  <dbs-modal
    #formDialog
    [title]="'User Registration'"
    [subtitle]="'Please fill in your details'"
    [size]="'md'"
    [scrollLock]="true"
    [dismissible]="false"
    [opened]="formOpened"
    (openedChange)="formOpened = $event">

    <form [formGroup]="userForm" class="modal-form">
      <dbs-input
        formControlName="fullName"
        [fieldLabel]="'Full Name'"
        [required]="true"
        [errorMsg]="fullNameError"
        placeholder="Enter your name">
      </dbs-input>

      <dbs-input
        type="email"
        formControlName="email"
        [fieldLabel]="'Email Address'"
        [required]="true"
        [errorMsg]="emailError"
        placeholder="Enter your email">
      </dbs-input>

      <dbs-checkbox
        formControlName="agreeTerms"
        [label]="'I agree to the terms and conditions'"
        [status]="termsError ? 'error' : 'default'">
      </dbs-checkbox>

      @if (termsError && userForm.get('agreeTerms')?.touched) {
        <div class="error-message">
          {{termsError}}
        </div>
      }
    </form>

    <dbs-modal-footer footerSlot [mobileButtonLayout]="'stretched'">
      <dbs-button
        variant="primary"
        (click)="submitForm()"
        [disabled]="!userForm.valid">
        Submit
      </dbs-button>
      <dbs-button (click)="formOpened = false">
        Cancel
      </dbs-button>
    </dbs-modal-footer>
  </dbs-modal>

  <!-- Success Modal (Small Size with Custom Header) -->
  <dbs-modal
    [size]="'sm'"
    [dismissible]="true"
    [opened]="successOpened"
    (openedChange)="successOpened = $event">

    <dbs-modal-header
      headerSlot
      [title]="'Success!'"
      [subtitle]="'Your action was completed'"
      [dismissible]="true"
      (dismiss)="successOpened = false">
      <svg-icon iconSlot iconName="circle-checkmark-filled" fill="#00ab61"></svg-icon>
    </dbs-modal-header>

    <div class="modal-content success-content">
      <p>Your request has been processed successfully.</p>
    </div>
  </dbs-modal>
</div>
```

### CSS (confirmation-modal.component.css)

```css
.demo-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 24px;
}

.demo-container h2 {
  margin: 0 0 24px 0;
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.button-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* Modal Content (DLS recommended pattern) */
.modal-content {
  padding-top: var(--modal-content-padding-top);
  padding-right: var(--modal-content-padding-right);
  padding-bottom: var(--modal-content-padding-bottom);
  padding-left: var(--modal-content-padding-left);
}

@media only screen and (min-width: 40em) {
  .modal-content {
    padding-right: var(--modal-content-md-padding-right);
    padding-left: var(--modal-content-md-padding-left);
  }
}

.modal-content p {
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text-primary);
}

/* Form Modal Styling */
.modal-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}

.error-message {
  font-size: 12px;
  color: var(--color-text-error);
  margin-top: -16px;
}

/* Success Content */
.success-content {
  text-align: center;
}

.success-content p {
  color: var(--color-text-success);
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .demo-container {
    padding: 24px 16px;
  }

  .button-group {
    flex-direction: column;
  }
}
```

---

## Styling Best Practices

### Modal Content Padding

Always use DLS recommended padding pattern:

```css
.modal-content {
  padding-top: var(--modal-content-padding-top);
  padding-right: var(--modal-content-padding-right);
  padding-bottom: var(--modal-content-padding-bottom);
  padding-left: var(--modal-content-padding-left);
}

@media only screen and (min-width: 40em) {
  .modal-content {
    padding-right: var(--modal-content-md-padding-right);
    padding-left: var(--modal-content-md-padding-left);
  }
}
```

### Size Selection

```html
<!-- Small (400px) - Confirmations, alerts -->
<dbs-modal [size]="'sm'" [title]="'Alert'">
  <div class="modal-content">Short message</div>
</dbs-modal>

<!-- Medium (600px) - Forms, short content (default) -->
<dbs-modal [size]="'md'" [title]="'Form'">
  <div class="modal-content">Form content</div>
</dbs-modal>

<!-- Large (960px) - Tables, complex info -->
<dbs-modal [size]="'lg'" [title]="'Data Table'">
  <div class="modal-content">Complex content</div>
</dbs-modal>
```

### Form Layout in Modal

```css
.modal-form {
  display: flex;
  flex-direction: column;
  gap: 24px; /* 24px between form fields */
  padding: 24px;
}
```

### Footer Button Order

DLS requires primary button first in code (for focus order), but it appears on the right:

```html
<dbs-modal-footer footerSlot>
  <!-- Primary button first (appears on right) -->
  <dbs-button variant="primary">Confirm</dbs-button>
  <!-- Secondary button second (appears on left) -->
  <dbs-button>Cancel</dbs-button>
</dbs-modal-footer>
```

---

## Behavior Notes

- **showDialog()** uses `topLayer` setting to determine rendering location
- **show()** renders modal in parent container (can scroll with page)
- **showModal()** renders in top-layer (fixed position, above everything)
- **dismissible=false** prevents closing via overlay/escape (must use close button)
- **scrollLock=true** prevents page scroll while modal is open
- **Primary button** should be first in code for correct tab focus order

---

**Component File:** `modal.md`
**Priority:** 🔴 CRITICAL
**Last Updated:** 2025-10-27
