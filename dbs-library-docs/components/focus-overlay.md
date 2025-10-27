# Focus Overlay Component

> Top-layer dialog overlay using native HTML `dialog` element for maximum z-index control and accessibility

## Import

```typescript
import { DbsFocusOverlayComponent, DbsFocusOverlayFooterComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsFocusOverlayComponent, DbsFocusOverlayFooterComponent],
})
```

## Basic Usage

```html
<dbs-button (click)="focusOverlay.showFocusOverlay()">
  Show Focus Overlay
</dbs-button>

<dbs-focus-overlay
  #focusOverlay
  [title]="'Important Information'"
  [dismissible]="true"
  (closeBtnPressed)="handleClose()"
  (openedChange)="isOpen = $event">
  <p>Focus overlay content goes here</p>
</dbs-focus-overlay>
```

---

## Key Properties

### DbsFocusOverlayComponent

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **title** | `string` | `""` | Title displayed in header |
| **opened** | `boolean` | `false` | Controls overlay visibility (two-way bindable) |
| **dismissible** | `boolean` | `true` | Allow closing via overlay click, ESC key, or close button |
| **topLayer** | `boolean` | `true` | Use top layer (`showModal()`) or inline (`show()`) |
| **overlay** | `boolean` | `true` | Show/hide backdrop overlay |
| **fullWidth** | `boolean` | `false` | Allow content beyond 1200px max-width |
| **scrollLock** | `boolean` | `false` | Lock background scrolling when open |
| **zIndex** | `number\|string` | `800` | Custom z-index for overlay |
| **dialogId** | `string` | - | Custom ID for dialog element |

### DbsFocusOverlayFooterComponent

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **fullWidth** | `boolean` | `false` | Full-width footer buttons |
| **mobileButtonLayout** | `'stretched'\|'stacked'` | - | Mobile button layout style |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| **openedChange** | `EventEmitter<boolean>` | Two-way binding for opened state |
| **closeBtnPressed** | `EventEmitter<void>` | Emits when close button clicked |
| **overlayClicked** | `EventEmitter<void>` | Emits when backdrop clicked |
| **openDialog** | `EventEmitter<void>` | Emits when dialog opens |

### Methods

| Method | Description |
|--------|-------------|
| **showFocusOverlay()** | Show overlay (respects `topLayer` setting) |
| **showModal()** | Force show at top layer |
| **show()** | Force show inline (within parent) |
| **close()** | Programmatically close overlay |

### Content Slots

| Slot | Description |
|------|-------------|
| **(default)** | Main content area |
| **headerSlot** | Full custom header replacement |
| **headerStartSlot** | Header start content (left side) |
| **headerEndSlot** | Header end content (right side) |
| **headerBottomSlot** | Content below header title |
| **footerSlot** | Footer content (use with `dbs-focus-overlay-footer`) |

---

## Opening Methods

### Method 1: Template Reference (Recommended)

```typescript
export class ExampleComponent {
  handleClose() {
    console.log('Overlay closed');
  }
}
```

```html
<dbs-button (click)="focusOverlay.showFocusOverlay()">
  Open Overlay
</dbs-button>

<dbs-focus-overlay
  #focusOverlay
  [title]="'Notification'"
  (closeBtnPressed)="handleClose()">
  <p>Your action was successful!</p>
</dbs-focus-overlay>
```

### Method 2: Two-Way Binding

```typescript
export class ExampleComponent {
  isOpen = false;

  openOverlay() {
    this.isOpen = true;
  }
}
```

```html
<dbs-button (click)="openOverlay()">Open Overlay</dbs-button>

<dbs-focus-overlay
  [title]="'Settings'"
  [(opened)]="isOpen">
  <p>Configure your preferences</p>
  <dbs-button (click)="isOpen = false">Close</dbs-button>
</dbs-focus-overlay>
```

**Important:** Do NOT use both `#templateRef.showFocusOverlay()` and `[opened]` together.

---

## Top Layer vs Inline

### Top Layer (Default)

Renders at browser's top layer using `showModal()` - appears above all other content.

```html
<dbs-focus-overlay
  #overlay
  [title]="'Top Layer Dialog'"
  [topLayer]="true">
  <p>This appears above everything</p>
</dbs-focus-overlay>
```

### Inline Rendering

Renders within parent component using `show()` - respects stacking context.

```html
<div style="position: relative; height: 500px; overflow: hidden;">
  <dbs-button (click)="overlay.showFocusOverlay()">
    Open Inline
  </dbs-button>

  <dbs-focus-overlay
    #overlay
    [title]="'Inline Dialog'"
    [topLayer]="false"
    [overlay]="false">
    <p>This renders within parent container</p>
  </dbs-focus-overlay>
</div>
```

---

## Dismissible vs Non-Dismissible

### Dismissible (Default)

Can be closed via:
- Clicking backdrop overlay
- Pressing ESC key
- Clicking close button in header

```html
<dbs-focus-overlay
  [title]="'Dismissible'"
  [dismissible]="true">
  <p>Click outside or press ESC to close</p>
</dbs-focus-overlay>
```

### Non-Dismissible

Can only be closed programmatically via `.close()` method or `opened` binding.

```typescript
export class ConfirmComponent {
  handleConfirm() {
    // Perform action
    this.confirmOverlay.close();
  }
}
```

```html
<dbs-focus-overlay
  #confirmOverlay
  [title]="'Confirm Action'"
  [dismissible]="false">
  <p>Are you sure you want to delete this item?</p>

  <dbs-button
    variant="primary"
    (click)="handleConfirm()">
    Confirm
  </dbs-button>
  <dbs-button (click)="confirmOverlay.close()">
    Cancel
  </dbs-button>
</dbs-focus-overlay>
```

---

## Header Customization

### Default Header (with Title)

```html
<dbs-focus-overlay [title]="'Default Header'">
  <p>Content here</p>
</dbs-focus-overlay>
```

### Header with Icon (Start Slot)

```html
<dbs-focus-overlay [title]="'Security Alert'">
  <div headerStartSlot style="display: flex;">
    <svg-icon
      iconName="key"
      style="background-color: var(--color-crimson-00);
             fill: var(--color-data-red-80);
             border-radius: 50%;
             padding: var(--size-8);">
    </svg-icon>
  </div>

  <p>Your password will expire soon.</p>
</dbs-focus-overlay>
```

### Custom Header Actions (End Slot)

```html
<dbs-focus-overlay [title]="'Settings'">
  <dbs-icon-button
    headerEndSlot
    variant="standard"
    size="sm"
    aria-label="Help"
    (click)="showHelp()">
    <svg-icon iconName="help-circle"></svg-icon>
  </dbs-icon-button>

  <p>Application settings</p>
</dbs-focus-overlay>
```

### Header Bottom Slot

```html
<dbs-focus-overlay [title]="'User Profile'">
  <p headerBottomSlot style="font-size: 14px; color: var(--color-text-secondary);">
    Last updated: 2 days ago
  </p>

  <p>Profile information...</p>
</dbs-focus-overlay>
```

### Fully Custom Header

```html
<dbs-focus-overlay>
  <div headerSlot style="padding: 24px; background: var(--color-background-primary);">
    <h2 style="margin: 0; color: white;">Custom Styled Header</h2>
  </div>

  <p>Content with completely custom header</p>
</dbs-focus-overlay>
```

---

## Footer Usage

### Standard Footer with Buttons

```typescript
export class FormComponent {
  saveData() {
    // Save logic
    this.formOverlay.close();
  }
}
```

```html
<dbs-focus-overlay
  #formOverlay
  [title]="'Edit Profile'">

  <dbs-input [fieldLabel]="'Name'"></dbs-input>
  <dbs-input [fieldLabel]="'Email'"></dbs-input>

  <dbs-focus-overlay-footer
    footerSlot
    [mobileButtonLayout]="'stretched'">
    <dbs-button
      footerEndSlot
      variant="primary"
      (click)="saveData()">
      Save Changes
    </dbs-button>
    <dbs-button
      footerEndSlot
      (click)="formOverlay.close()">
      Cancel
    </dbs-button>
  </dbs-focus-overlay-footer>
</dbs-focus-overlay>
```

**Note:** Buttons in `footerEndSlot` appear right-to-left (first button on right).

### Footer with Start and End Content

```html
<dbs-focus-overlay [title]="'Checkout'">
  <p>Order summary...</p>

  <dbs-focus-overlay-footer footerSlot>
    <div footerStartSlot style="font-weight: 600;">
      Total: $129.99
    </div>

    <dbs-button footerEndSlot variant="primary">
      Place Order
    </dbs-button>
    <dbs-button footerEndSlot>
      Back
    </dbs-button>
  </dbs-focus-overlay-footer>
</dbs-focus-overlay>
```

### Fully Custom Footer

```html
<dbs-focus-overlay [title]="'Terms & Conditions'">
  <p>Long terms text...</p>

  <div footerSlot style="padding: 16px; text-align: center;">
    <dbs-checkbox>I agree to the terms</dbs-checkbox>
    <dbs-button variant="primary" style="margin-top: 12px;">
      Accept
    </dbs-button>
  </div>
</dbs-focus-overlay>
```

---

## Overlay Click Detection

Detect when user clicks backdrop (useful for confirmation dialogs).

```typescript
export class UnsavedChangesComponent {
  hasUnsavedChanges = true;
  showConfirmClose = false;

  handleOverlayClick() {
    if (this.hasUnsavedChanges) {
      this.showConfirmClose = true;
      // Keep overlay open, show confirmation
    }
  }

  confirmClose() {
    this.showConfirmClose = false;
    this.editOverlay.close();
  }
}
```

```html
<dbs-focus-overlay
  #editOverlay
  [title]="'Edit Document'"
  [dismissible]="false"
  (overlayClicked)="handleOverlayClick()">

  <dbs-textarea [fieldLabel]="'Content'"></dbs-textarea>

  @if (showConfirmClose) {
    <dbs-alert [opened]="true" variant="warning">
      You have unsaved changes. Discard them?
      <dbs-button (click)="confirmClose()">Discard</dbs-button>
      <dbs-button (click)="showConfirmClose = false">Keep Editing</dbs-button>
    </dbs-alert>
  }
</dbs-focus-overlay>
```

---

## CSS & Styling

### Design Tokens

```css
/* Overlay colors */
--color-background-level-0        /* Overlay background */
--color-text-primary              /* Header text */
--color-border                    /* Borders */

/* Spacing */
--size-8                          /* 8px - Icon padding */
--spacing-md                      /* 16px - Standard padding */
--spacing-lg                      /* 24px - Large padding */

/* Special tokens */
--color-crimson-00                /* Icon background (alerts) */
--color-data-red-80               /* Icon fill (alerts) */
```

### Component Styling

```css
/* Overlay container */
dbs-focus-overlay {
  --max-width: 1200px;           /* Default max content width */
}

dbs-focus-overlay[fullWidth="true"] {
  --max-width: none;             /* Remove width restriction */
}

/* Header styling */
dbs-focus-overlay::part(header) {
  padding: 24px;
  border-bottom: 1px solid var(--color-border);
}

/* Content area */
dbs-focus-overlay::part(content) {
  padding: 24px;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

/* Footer */
dbs-focus-overlay-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

/* Backdrop overlay */
dbs-focus-overlay::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
```

### Custom Z-Index

```html
<!-- Place overlay above other custom elements -->
<dbs-focus-overlay
  [title]="'High Priority'"
  [zIndex]="1000">
  <p>This appears above z-index 800 elements</p>
</dbs-focus-overlay>
```

---

## Complete Example

### TypeScript (notification-overlay.component.ts)

```typescript
import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {
  DbsFocusOverlayComponent,
  DbsFocusOverlayFooterComponent,
  DbsButtonComponent,
  DbsInputComponent,
  DbsSwitchComponent
} from '@dbs-angular/core';

interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  frequency: string;
}

@Component({
  selector: 'app-notification-overlay',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DbsFocusOverlayComponent,
    DbsFocusOverlayFooterComponent,
    DbsButtonComponent,
    DbsInputComponent,
    DbsSwitchComponent
  ],
  templateUrl: './notification-overlay.component.html',
  styleUrls: ['./notification-overlay.component.css']
})
export class NotificationOverlayComponent {
  isOpen = false;
  hasChanges = false;
  showUnsavedWarning = false;

  settings: NotificationSettings = {
    email: true,
    push: false,
    sms: false,
    frequency: 'daily'
  };

  originalSettings: NotificationSettings = { ...this.settings };

  openSettings() {
    this.originalSettings = { ...this.settings };
    this.isOpen = true;
    this.hasChanges = false;
  }

  handleSettingChange() {
    this.hasChanges = JSON.stringify(this.settings) !==
                      JSON.stringify(this.originalSettings);
  }

  handleOverlayClick() {
    if (this.hasChanges) {
      this.showUnsavedWarning = true;
    } else {
      this.isOpen = false;
    }
  }

  discardChanges() {
    this.settings = { ...this.originalSettings };
    this.hasChanges = false;
    this.showUnsavedWarning = false;
    this.isOpen = false;
  }

  saveSettings() {
    console.log('Saving settings:', this.settings);
    // API call here
    this.hasChanges = false;
    this.isOpen = false;
  }
}
```

### HTML (notification-overlay.component.html)

```html
<div class="settings-container">
  <h2>Notification Preferences</h2>

  <dbs-button
    variant="primary"
    (click)="openSettings()">
    Configure Notifications
  </dbs-button>

  <dbs-focus-overlay
    [title]="'Notification Settings'"
    [(opened)]="isOpen"
    [dismissible]="!hasChanges"
    (overlayClicked)="handleOverlayClick()">

    <!-- Header icon -->
    <div headerStartSlot class="header-icon">
      <svg-icon iconName="bell"></svg-icon>
    </div>

    <!-- Subtitle in header -->
    <p headerBottomSlot class="header-subtitle">
      Manage how you receive updates
    </p>

    <!-- Main content -->
    <div class="settings-content">
      <!-- Email notifications -->
      <div class="setting-row">
        <div class="setting-info">
          <h4>Email Notifications</h4>
          <p>Receive updates via email</p>
        </div>
        <dbs-switch
          [(ngModel)]="settings.email"
          (ngModelChange)="handleSettingChange()">
        </dbs-switch>
      </div>

      <!-- Push notifications -->
      <div class="setting-row">
        <div class="setting-info">
          <h4>Push Notifications</h4>
          <p>Browser push notifications</p>
        </div>
        <dbs-switch
          [(ngModel)]="settings.push"
          (ngModelChange)="handleSettingChange()">
        </dbs-switch>
      </div>

      <!-- SMS notifications -->
      <div class="setting-row">
        <div class="setting-info">
          <h4>SMS Notifications</h4>
          <p>Text message alerts</p>
        </div>
        <dbs-switch
          [(ngModel)]="settings.sms"
          (ngModelChange)="handleSettingChange()">
        </dbs-switch>
      </div>

      <!-- Frequency -->
      <div class="setting-row">
        <dbs-input
          [fieldLabel]="'Notification Frequency'"
          [(ngModel)]="settings.frequency"
          (ngModelChange)="handleSettingChange()"
          placeholder="e.g., daily, weekly">
        </dbs-input>
      </div>

      <!-- Unsaved changes warning -->
      @if (showUnsavedWarning) {
        <div class="warning-box">
          <h4>Unsaved Changes</h4>
          <p>You have unsaved changes. What would you like to do?</p>
          <div class="warning-actions">
            <dbs-button
              variant="primary"
              (click)="saveSettings()">
              Save Changes
            </dbs-button>
            <dbs-button (click)="discardChanges()">
              Discard
            </dbs-button>
            <dbs-button (click)="showUnsavedWarning = false">
              Keep Editing
            </dbs-button>
          </div>
        </div>
      }
    </div>

    <!-- Footer -->
    <dbs-focus-overlay-footer
      footerSlot
      [mobileButtonLayout]="'stretched'">

      <div footerStartSlot class="changes-indicator">
        @if (hasChanges) {
          <span class="unsaved-badge">Unsaved changes</span>
        }
      </div>

      <dbs-button
        footerEndSlot
        variant="primary"
        [disabled]="!hasChanges"
        (click)="saveSettings()">
        Save Changes
      </dbs-button>

      <dbs-button
        footerEndSlot
        (click)="handleOverlayClick()">
        Cancel
      </dbs-button>
    </dbs-focus-overlay-footer>
  </dbs-focus-overlay>
</div>
```

### CSS (notification-overlay.component.css)

```css
.settings-container {
  padding: 32px 24px;
  max-width: 800px;
  margin: 0 auto;
}

.settings-container h2 {
  margin: 0 0 24px 0;
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary);
}

/* Header styling */
.header-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--color-background-primary);
  border-radius: 50%;
}

.header-icon svg-icon {
  fill: white;
  width: 20px;
  height: 20px;
}

.header-subtitle {
  margin: 8px 0 0 0;
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

/* Content styling */
.settings-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0;
}

.setting-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-background-level-0);
}

.setting-info {
  flex: 1;
}

.setting-info h4 {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.setting-info p {
  margin: 0;
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

/* Warning box */
.warning-box {
  padding: 16px;
  background-color: var(--color-background-warning-subtle);
  border: 1px solid var(--color-border-warning);
  border-radius: 8px;
  margin-top: 16px;
}

.warning-box h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-warning);
}

.warning-box p {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: var(--color-text-primary);
}

.warning-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

/* Footer */
.changes-indicator {
  display: flex;
  align-items: center;
}

.unsaved-badge {
  display: inline-flex;
  padding: 4px 12px;
  background-color: var(--color-background-warning-subtle);
  color: var(--color-text-warning);
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .settings-content {
    gap: 16px;
  }

  .setting-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .warning-actions {
    flex-direction: column;
  }

  .warning-actions dbs-button {
    width: 100%;
  }
}
```

---

## Styling Best Practices

### Full-Width Content

```html
<dbs-focus-overlay
  [title]="'Dashboard'"
  [fullWidth]="true">
  <!-- Content can exceed 1200px -->
  <div style="width: 100%; min-width: 1400px;">
    Wide content here
  </div>
</dbs-focus-overlay>
```

### Scroll Lock

```html
<!-- Prevent background scrolling when overlay is open -->
<dbs-focus-overlay
  [title]="'Long Form'"
  [scrollLock]="true">
  <div style="height: 2000px;">
    Long scrollable content
  </div>
</dbs-focus-overlay>
```

### Custom Backdrop

```css
/* Custom backdrop opacity */
dbs-focus-overlay::backdrop {
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}
```

---

## Behavior Notes

- **Top Layer:** Uses native `<dialog>` element's top-layer rendering
- **ESC Key:** Automatically closes dismissible overlays
- **Focus Trap:** Focus stays within overlay when open
- **Accessibility:** Proper ARIA attributes and keyboard navigation
- **Backdrop Click:** Only works when `dismissible="true"`
- **Two-Way Binding:** Use `[(opened)]` for reactive state management
- **Method Priority:** `showFocusOverlay()` respects `topLayer` setting
- **Z-Index:** Default 800, customizable via `[zIndex]` property
- **Scroll Lock:** Uses `dbs-overlay` for background scroll prevention
- **Footer Button Order:** Buttons in `footerEndSlot` render right-to-left

---

**Component File:** `focus-overlay.md`
**Last Updated:** 2025-10-28
