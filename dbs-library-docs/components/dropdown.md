# Dropdown Menu Component

> Event-driven dropdown menu for single selections (not for form controls - use dbs-select for forms)

## Import

```typescript
import { DbsDropdownMenuComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsDropdownMenuComponent],
})
```

## Basic Usage

```html
<!-- Basic Dropdown -->
<dbs-button (click)="showDropdown=true" [id]="'parentId'">
  Open Dropdown
</dbs-button>
<dbs-dropdown
  #dropdown
  [(showDropdown)]="showDropdown"
  [values]="values"
  [parentId]="'parentId'"
  (onSelect)="onSelect($event)">
</dbs-dropdown>

<!-- Icon Button Dropdown -->
<dbs-icon-button (click)="showDropdown=true" [id]="'menuBtn'">
  <svg-icon iconName="more-vertical"></svg-icon>
</dbs-icon-button>
<dbs-dropdown
  [popperPosition]="'bottom-start'"
  [(showDropdown)]="showDropdown"
  [values]="values"
  [parentId]="'menuBtn'"
  (onSelect)="onSelect($event)">
</dbs-dropdown>
```

---

## Key Properties

### Core Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **values** | `DropdownValue[]` | `[]` | Dropdown options array |
| **parentId** | `string` | `""` | ID of parent element to attach to |
| **showDropdown** | `boolean` | `false` | Show/hide dropdown |
| **showFilter** | `boolean` | `false` | Show search filter |
| **keepSelectState** | `boolean` | `false` | Keep last selected item highlighted |
| **matchParentWidth** | `boolean\|number` | `false` | Match parent width or set max-width |
| **popperPosition** | `PopperPositionType` | `'bottom'` | Position relative to parent |
| **popperGap** | `number` | `8` | Gap between parent and dropdown (px) |
| **mobileBreakpoint** | `number` | `767` | Trigger bottom sheet (px) |
| **mobileTitle** | `string` | `""` | Title for mobile bottom sheet |
| **bottomSheetHeight** | `string` | `undefined` | Custom bottom sheet height |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| **onSelect** | `EventEmitter<DropdownValue>` | Emits selected option |
| **menuClick** | `EventEmitter` | Emits when option clicked |
| **showDropdownChange** | `EventEmitter<boolean>` | Emits when dropdown opens/closes |

### DropdownValue Interface

```typescript
interface DropdownValue {
  value: string;
  label: string;
  category?: string;
  isDisabled?: boolean;
}
```

---

## CSS & Styling

### Design Tokens Used

```css
/* Colors */
--color-background-level-0        /* Dropdown background */
--color-background-level-1        /* Option hover */
--color-text-primary              /* Option text */
--color-text-secondary            /* Category text */
--color-border                    /* Dropdown border */

/* Spacing */
--input-select-option-border-radius  /* Option border radius */
--text-small-font-size            /* Small text size */

/* Typography */
--font-size-body-md               /* 16px */
--font-size-body-sm               /* 14px */
```

### Component Styling

```css
/* Custom option template styling */
.default-style {
  display: flex;
  padding: 8px;
  border-radius: var(--input-select-option-border-radius);
  cursor: pointer;
  transition: background-color 0.2s;
}

.default-style:hover {
  background-color: var(--color-background-level-1);
}

.default-style.selected {
  background-color: var(--color-background-level-1);
  font-weight: 500;
}

.default-style.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Custom template container */
.custom-container {
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
}

.custom-container-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.custom-container-text .name {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
}

.custom-container-text .email {
  font-size: var(--text-small-font-size);
  color: var(--color-text-subtle);
}
```

---

## Complete Example with Styling

### TypeScript (actions-dropdown.component.ts)

```typescript
import { Component } from '@angular/core';
import {
  DbsDropdownMenuComponent,
  DbsButtonComponent,
  DbsIconButtonComponent,
  DropdownValue
} from '@dbs-angular/core';

@Component({
  selector: 'app-actions-dropdown',
  standalone: true,
  imports: [
    DbsDropdownMenuComponent,
    DbsButtonComponent,
    DbsIconButtonComponent
  ],
  templateUrl: './actions-dropdown.component.html',
  styleUrls: ['./actions-dropdown.component.css']
})
export class ActionsDropdownComponent {
  showDropdown = false;
  showActionsDropdown = false;
  selected: DropdownValue | null = null;

  // Simple dropdown options
  statusOptions: DropdownValue[] = [
    { category: 'Active', value: 'approved', label: 'Approved' },
    { category: 'Active', value: 'pending', label: 'Pending Review' },
    { category: 'Active', value: 'in-progress', label: 'In Progress' },
    { category: 'Inactive', value: 'rejected', label: 'Rejected' },
    { category: 'Inactive', value: 'archived', label: 'Archived' }
  ];

  // Action menu options
  actionOptions: DropdownValue[] = [
    { value: 'edit', label: 'Edit' },
    { value: 'duplicate', label: 'Duplicate' },
    { value: 'export', label: 'Export' },
    { value: 'delete', label: 'Delete', isDisabled: false }
  ];

  onSelect(option: DropdownValue) {
    this.selected = option;
    console.log('Selected:', option);

    if (option.value === 'delete') {
      this.confirmDelete();
    } else if (option.value === 'edit') {
      this.editItem();
    }
  }

  onActionSelect(option: DropdownValue) {
    console.log('Action:', option.value);
  }

  editItem() {
    console.log('Edit action triggered');
  }

  confirmDelete() {
    console.log('Delete confirmation');
  }
}
```

### HTML (actions-dropdown.component.html)

```html
<div class="demo-container">
  <h2>Dropdown Examples</h2>

  <!-- Status Dropdown with Categories and Search -->
  <div class="dropdown-example">
    <h3>Status Dropdown (with categories & search)</h3>

    <dbs-button
      (click)="showDropdown=true"
      [id]="'statusBtn'">
      {{selected ? selected.label : 'Select Status'}}
    </dbs-button>

    <dbs-dropdown
      #dropdown
      [(showDropdown)]="showDropdown"
      [values]="statusOptions"
      [parentId]="'statusBtn'"
      [showFilter]="true"
      [keepSelectState]="true"
      [matchParentWidth]="true"
      [mobileTitle]="'Select Status'"
      (onSelect)="onSelect($event)">
    </dbs-dropdown>

    @if (selected) {
      <div class="selection-display">
        <span class="label">Selected:</span>
        <span class="value">{{selected.label}}</span>
      </div>
    }
  </div>

  <!-- Actions Menu with Icon Button -->
  <div class="dropdown-example">
    <h3>Actions Menu</h3>

    <div class="actions-demo">
      <dbs-icon-button
        (click)="showActionsDropdown=true"
        [id]="'actionsBtn'">
        <svg-icon iconName="more-vertical"></svg-icon>
      </dbs-icon-button>

      <dbs-dropdown
        [popperPosition]="'bottom-start'"
        [(showDropdown)]="showActionsDropdown"
        [values]="actionOptions"
        [parentId]="'actionsBtn'"
        [popperGap]="4"
        (onSelect)="onActionSelect($event)">
      </dbs-dropdown>
    </div>
  </div>

  <!-- Multiple Trigger Buttons -->
  <div class="dropdown-example">
    <h3>Multiple Triggers (Single Dropdown)</h3>

    <div class="button-group">
      @for (id of [1,2,3]; track id) {
        <dbs-button
          (click)="showDropdown=true"
          [id]="id.toString()">
          Button {{id}}
        </dbs-button>
      }
    </div>

    <dbs-dropdown
      [(showDropdown)]="showDropdown"
      [values]="statusOptions"
      [parentId]="'1'"
      [mobileTitle]="'Select Option'"
      (onSelect)="onSelect($event)">
    </dbs-dropdown>
  </div>
</div>
```

### CSS (actions-dropdown.component.css)

```css
.demo-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 24px;
}

.demo-container h2 {
  margin: 0 0 32px 0;
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.demo-container h3 {
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 500;
  color: var(--color-text-primary);
}

/* Dropdown Examples */
.dropdown-example {
  margin-bottom: 48px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--color-border);
}

.dropdown-example:last-child {
  border-bottom: none;
}

/* Selection Display */
.selection-display {
  margin-top: 16px;
  padding: 12px 16px;
  background: var(--color-background-level-1);
  border-radius: 4px;
  display: flex;
  gap: 8px;
}

.selection-display .label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.selection-display .value {
  font-size: 14px;
  color: var(--color-text-primary);
}

/* Actions Demo */
.actions-demo {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: var(--color-background-level-0);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

/* Button Group */
.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
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

### Dropdown Positioning

```html
<!-- Bottom start (most common for actions) -->
<dbs-dropdown [popperPosition]="'bottom-start'" [parentId]="'btn'"></dbs-dropdown>

<!-- Bottom (centered) -->
<dbs-dropdown [popperPosition]="'bottom'" [parentId]="'btn'"></dbs-dropdown>

<!-- Top start -->
<dbs-dropdown [popperPosition]="'top-start'" [parentId]="'btn'"></dbs-dropdown>
```

### Width Control

```html
<!-- Match parent width -->
<dbs-dropdown [matchParentWidth]="true"></dbs-dropdown>

<!-- Set max-width in pixels -->
<dbs-dropdown [matchParentWidth]="300"></dbs-dropdown>
```

### Custom Option Template

```html
<dbs-dropdown
  [values]="options"
  [parentId]="'btn'"
  [(showDropdown)]="show">

  <ng-template #optionTemplate let-option>
    <div class="default-style">
      <dbs-avatar [name]="option.value"></dbs-avatar>
      <div class="custom-container-text">
        <span class="name">{{option.value}}</span>
        <span class="email">{{option.label}}</span>
      </div>
    </div>
  </ng-template>
</dbs-dropdown>
```

```css
.custom-container-text {
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  gap: 4px;
}

.custom-container-text .name {
  font-size: 14px;
  font-weight: 500;
}

.custom-container-text .email {
  font-size: var(--text-small-font-size);
  color: var(--color-text-subtle);
}
```

---

## Behavior Notes

- **NOT a form control** - use `dbs-select` for form integration
- **Single selection only** - emits events, doesn't manage form state
- **Mobile adaptation** - automatically switches to bottom sheet below `mobileBreakpoint`
- **keepSelectState** - highlights last selected option (visual only)
- **Multiple parents** - one dropdown can attach to multiple trigger buttons

---

**Component File:** `dropdown.md`
**Priority:** 🔴 CRITICAL
**Last Updated:** 2025-10-27
