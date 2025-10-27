# DBS Angular Library - Common Patterns

> Shared conventions, patterns, and best practices across DBS components

---

## Component Naming Conventions

### Import Pattern

```typescript
import { DbsComponentNameComponent } from '@dbs-angular/core';
```

**Rules:**
- All components prefixed with `Dbs`
- PascalCase for class names
- Append `Component` suffix

### Selector Pattern

```html
<dbs-component-name></dbs-component-name>
```

**Rules:**
- All selectors prefixed with `dbs-`
- Kebab-case for multi-word components
- Self-closing for components without content

---

## Size Variants

Most components support standardized size variants:

```typescript
size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
```

### Size Usage by Component

| Component | Sizes Available | Default |
|-----------|----------------|---------|
| Button | xs, sm, md, lg | md |
| Icon Button | xs, sm, md, lg | md |
| Floating Action Button | xs, sm, md, lg | md |
| Avatar | xs, sm, md, lg, xl | md |

### Size Selection Guidelines

- **xs (extra-small):** Compact UIs, inline actions, dense layouts
- **sm (small):** Secondary actions, mobile-optimized
- **md (medium):** Default size, most common use
- **lg (large):** Primary actions, prominent CTAs
- **xl (extra-large):** Hero sections, profile displays (avatars only)

---

## Variant Patterns

Components use `variant` property for visual styles:

### Button Variants

```typescript
variant: 'primary' | 'secondary' | 'plain' | 'positive' | 'destructive'
```

- **primary:** High-emphasis actions (submit, save, continue)
- **secondary:** Medium-emphasis actions (cancel, back)
- **plain:** Low-emphasis actions (in cards, dialogs)
- **positive:** Strong positive outcomes (approve, confirm)
- **destructive:** Potentially destructive actions (delete, remove)

### Icon Button Variants

```typescript
variant: 'standard' | 'outline' | 'circle'
```

### Avatar Variants

```typescript
variant: 'text' | 'logo' | 'icon' | 'profile-image' | 'squared'
```

### Accordion Variants

```typescript
variant: 'box' | 'separator'
```

---

## Content Slots Pattern

DBS components use Angular content projection with named slots:

### Common Slot Names

```html
<dbs-component>
  <!-- Default slot (unnamed) -->
  Main content goes here

  <!-- Named slots -->
  <element startSlot>Before main content</element>
  <element endSlot>After main content</element>
  <element headerSlot>Custom header</element>
  <element footerSlot>Custom footer</element>
  <element iconSlot>Icon content</element>
</dbs-component>
```

### Slot Naming Convention

| Slot Name | Purpose | Common In |
|-----------|---------|-----------|
| `(default)` | Main content | All components |
| `startSlot` | Before main content | Button, Icon content |
| `endSlot` | After main content | Button, Icon content |
| `headerSlot` | Custom header | Accordion, Bottom Sheet |
| `footerSlot` | Custom footer | Bottom Sheet |
| `iconSlot` | Icon content | Card Button |
| `titleSlot` | Custom title | Card Button |
| `subtitleSlot` | Custom subtitle | Card Button |
| `searchSlot` | Search component | Bottom Sheet |
| `headerEndSlot` | Header trailing content | Accordion |
| `headerStartSlot` | Header leading content | Accordion |
| `headerBottomSlot` | Bottom of header | Accordion |

### Slot Usage Example

```html
<dbs-button>
  <svg-icon startSlot iconName="chevron-left"></svg-icon>
  Button Text
  <svg-icon endSlot iconName="chevron-right"></svg-icon>
</dbs-button>
```

---

## Common Input Properties

### Boolean Flags

```typescript
[disabled]="true"    // Disable interaction
[dim]="true"         // For dark backgrounds
[opened]="true"      // Control visibility
[loading]="true"     // Show loading state
[fullWidth]="true"   // Span full width
[bound]="true"       // Apply negative margin (buttons)
```

### State Management

```typescript
// Two-way binding for state
[(opened)]="isOpen"

// One-way with event
[opened]="isOpen"
(openedChange)="isOpen = $event"
```

---

## Event Handling Patterns

### Standard Events

```typescript
(click)="handleClick($event)"           // Click events
(openedChange)="handleChange($event)"   // State changes
(onSelect)="handleSelect($event)"       // Selection events
```

### Event Naming Convention

- Use `Change` suffix for state changes: `openedChange`, `selectedChange`
- Use `on` prefix for action events: `onSelect`, `onClosed`
- Some legacy events use different patterns (check component docs)

### Event Example

```typescript
// Component
export class MyComponent {
  isAlertOpen = true;

  onAlertClose(opened: boolean) {
    console.log('Alert opened:', opened);
    this.isAlertOpen = opened;
  }
}
```

```html
<!-- Template -->
<dbs-alert
  [opened]="isAlertOpen"
  (openedChange)="onAlertClose($event)"
  title="Warning">
  Alert message
</dbs-alert>
```

---

## Styling with Design Tokens

### Using CSS Variables

```css
.custom-component {
  /* Colors */
  background-color: var(--color-background-level-0);
  color: var(--color-text);
  border-color: var(--color-border);

  /* Spacing */
  padding: var(--spacing-md);
  margin: var(--spacing-sm);
  gap: var(--spacing-xs);

  /* Typography */
  font-size: var(--typography-size);
  line-height: var(--typography-leading);
}
```

### Common Design Token Categories

- `--color-background-level-{0-3}` - Background colors
- `--color-text` - Primary text color
- `--color-text-low` - Secondary text color
- `--color-border` - Border colors
- `--spacing-{xs,sm,md,lg,xl}` - Spacing values
- `--typography-*` - Typography properties

---

## Component Method Patterns

### Common Methods

```typescript
// Get reference to component
@ViewChild('componentRef') componentRef!: DbsComponentName;

// Call component methods
this.componentRef.toggle();         // Toggle state
this.componentRef.open();           // Open/show
this.componentRef.close();          // Close/hide
```

### Method Example

```typescript
// Component
export class MyComponent {
  @ViewChild('alertRef') alertRef!: DbsAlertComponent;

  closeAlert() {
    this.alertRef.closeAlert();
  }
}
```

```html
<!-- Template -->
<dbs-alert #alertRef title="Alert">Content</dbs-alert>
<dbs-button (click)="closeAlert()">Close Alert</dbs-button>
```

---

## Accessibility Patterns

### ARIA Labels

```html
<!-- Use semantic HTML when possible -->
<dbs-button type="submit" aria-label="Submit form">
  Submit
</dbs-button>

<!-- Icon-only buttons should have aria-label -->
<dbs-icon-button aria-label="Close dialog">
  <svg-icon iconName="close"></svg-icon>
</dbs-icon-button>
```

### Keyboard Navigation

Most components support standard keyboard interactions:
- **Enter/Space:** Activate buttons
- **Escape:** Close modals/sheets
- **Tab:** Navigate between interactive elements
- **Arrow keys:** Navigate lists/menus

---

## Deprecated Properties

Many components have deprecated properties for backward compatibility:

### Common Deprecations

| Deprecated | Use Instead | Reason |
|------------|-------------|---------|
| `label` | `title` | Naming consistency |
| `type` | `variant` | Clearer terminology |
| `toggle` | `opened` | Clearer state naming |
| `expanded` | `opened` | Naming consistency |
| `btnName` | Content slot | More flexible |
| `img_src` | `<img>` slot | Better control |

**Note:** Deprecated properties are marked in component documentation with:
```
(deprecated - IBGT/ODS) Use XYZ instead.
```

---

## Form Integration

### Form Submit Pattern

```typescript
// Component
export class FormComponent {
  formGroup = this.formBuilder.group({
    // form controls
  });

  onSubmit() {
    if (this.formGroup.valid) {
      // Handle submit
    }
  }
}
```

```html
<!-- Template -->
<form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
  <!-- form fields -->

  <dbs-button type="submit">Submit</dbs-button>
</form>
```

---

## Responsive Design Patterns

### Mobile-First Approach

```html
<!-- Bottom Sheet for mobile dropdowns -->
<dbs-bottom-sheet
  [(opened)]="isOpen"
  title="Options">
  <!-- Dropdown content -->
</dbs-bottom-sheet>
```

### Adaptive Components

- **Bottom Sheet:** Automatically adapts for mobile
- **Buttons:** Use `fullWidth` on mobile breakpoints
- **Accordion:** Collapsible sections for smaller screens

---

## Icon Integration

### With svg-icon Component

```html
<dbs-button>
  <svg-icon startSlot iconName="chevron-left"></svg-icon>
  Previous
</dbs-button>
```

### Icon Sizing in Buttons

DLS dictates:
- **Gap:** 8px between icon and text
- **Icon size:** 16px width/height

```html
<style>
  svg-icon {
    width: 16px;
    height: 16px;
  }
</style>
```

---

## Best Practices

### Component Selection

✅ **DO:**
- Use primary buttons for main actions
- Use plain buttons for low-emphasis actions
- Use appropriate size variants for context
- Provide aria-labels for icon-only components
- Use design tokens for custom styling

❌ **DON'T:**
- Use multiple primary buttons on same screen
- Mix button variants without clear hierarchy
- Override component styles directly
- Use disabled buttons in forms (use validation instead)

### Performance

- Import only components you need (tree-shaking)
- Use standalone components
- Lazy load heavy components when possible

### Consistency

- Follow DLS guidelines for spacing, colors
- Use consistent size variants across similar actions
- Maintain visual hierarchy with variant usage

---

**Token Usage:** ~2,000 tokens
**Last Updated:** 2025-10-24
