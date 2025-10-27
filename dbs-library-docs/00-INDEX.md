# DBS Angular Library - Quick Reference Index

> **Load this file first** to see all available components without consuming many tokens.

## Package Information

- **Package:** `@dbs-angular/core`
- **Supported Angular Versions:** 18, 19, 20
- **Design System:** DBS Design Language System (DLS)

## Installation

```bash
# Choose version based on your Angular version
npm install @dbs-angular/core@[18|19|20] @dbs/design-tokens @dls/icons @tanstack/angular-table @tanstack/match-sorter-utils d3 moment
```

## Import Pattern

```typescript
import { DbsComponentName } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsComponentName],
})
```

## Usage Pattern

```html
<dbs-component-name [property]="value">Content</dbs-component-name>
```

---

## Available Components

### Action Components

| Component | Selector | Purpose | Doc File |
|-----------|----------|---------|----------|
| **Button** | `<dbs-button>` | Primary/secondary/plain action buttons | [button.md](components/button.md) |
| **Icon Button** | `<dbs-icon-button>` | Icon-only buttons (standard/outline/circle) | [icon-button.md](components/icon-button.md) |
| **Floating Action Button** | `<dbs-floating-action-button>` | Fixed floating button for primary actions | [floating-action-button.md](components/floating-action-button.md) |
| **Card Button** | `<dbs-card-button>` | Card-like button for navigation | [card-button.md](components/card-button.md) |

### Display Components

| Component | Selector | Purpose | Doc File |
|-----------|----------|---------|----------|
| **Avatar** | `<dbs-avatar>` | User profile images/initials with color schemes | [avatar.md](components/avatar.md) |
| **Badge** | `<dbs-badge>` | Status indicators and notification dots | [badge.md](components/badge.md) |
| **Alert** | `<dbs-alert>` | Inline error/warning messages | [alert.md](components/alert.md) |
| **Information Banner** | `<dbs-information-banner>` | Inline banner with variants | [information-banner.md](components/information-banner.md) |
| **Tooltip** | `dbsToolTip` | Helper on hover/focus/click | [tooltip.md](components/tooltip.md) |
| **Snackbar** | `<dbs-snackbar>` | Transient feedback/toast with actions | [snackbar.md](components/snackbar.md) |
| **Snackbar Container** | `<dbs-snackbar-container>` | Manage and stack snackbars | [snackbar-container.md](components/snackbar-container.md) |
| **Chip** | `<dbs-chip>` | Small label with optional dismiss | [chip.md](components/chip.md) |
| **Chip List** | `<dbs-chip-list>` | Render and manage a list of chips | [chip-list.md](components/chip-list.md) |
| **Progress Bar** | `<dbs-progressbar>` | Linear progress indicator | [progress-bar.md](components/progress-bar.md) |
| **Link** | `<dbs-link>` | Styled anchor links | [link.md](components/link.md) |

### Navigation Components

| Component | Selector | Purpose | Doc File |
|-----------|----------|---------|----------|
| **Breadcrumb** | `<dbs-breadcrumb>` | Navigation trail with truncation | [breadcrumb.md](components/breadcrumb.md) |
| **Bottom Sheet** | `<dbs-bottom-sheet>` | Mobile-responsive dropdown/modal | [bottom-sheet.md](components/bottom-sheet.md) |
| **Tabs** | `<dbs-tabs>` | Tab navigation (default/filter/switch) | [tabs.md](components/tabs.md) |
| **Pagination** | `<dbs-pagination>` | Page navigation and item counters | [pagination.md](components/pagination.md) |
| **Primary Side Nav** | `<dbs-nav-side-primary>` | App-level vertical navigation | [nav-side-primary.md](components/nav-side-primary.md) |
| **Secondary Side Nav** | `<dbs-nav-side-secondary>` | Contextual page navigation | [nav-side-secondary.md](components/nav-side-secondary.md) |

### Layout Components

| Component | Selector | Purpose | Doc File |
|-----------|----------|---------|----------|
| **Accordion** | `<dbs-accordion>` | Expandable/collapsible content sections | [accordion.md](components/accordion.md) |
| **Drawer** | `<dbs-drawer>` | Sliding panel with overlay | [drawer.md](components/drawer.md) |
| **Drawer Header** | `<dbs-drawer-header>` | Drawer title and actions | [drawer-header.md](components/drawer-header.md) |
| **Drawer Footer** | `<dbs-drawer-footer>` | Drawer actions bar | [drawer-footer.md](components/drawer-footer.md) |

### Form Components

| Component | Selector | Purpose | Doc File |
|-----------|----------|---------|----------|
| **Input** | `<dbs-input>` | Text input with validation, icons, helper text | [input.md](components/input.md) |
| **Input Stepper** | `<dbs-input-stepper>` | Numeric input with increment/decrement buttons | [input-stepper.md](components/input-stepper.md) |
| **Select** | `<dbs-select>` | Dropdown select with search and multi-select | [select.md](components/select.md) |
| **Checkbox** | `<dbs-checkbox>` | Checkbox with indeterminate state | [checkbox.md](components/checkbox.md) |
| **Radio** | `<dbs-radio>` | Radio button for single selection | [radio.md](components/radio.md) |
| **Text Area** | `<dbs-textarea>` | Multi-line text input with counter/validation | [text-area.md](components/text-area.md) |
| **Switch** | `<dbs-switch>` | Binary toggle | [switch.md](components/switch.md) |
| **Calendar Input** | `<dbs-calendar-input>` | Date input with popover calendar | [calendar-input.md](components/calendar-input.md) |
| **File Upload** | `<dbs-file-upload>` | Drag-and-drop upload with progress | [file-upload.md](components/file-upload.md) |
| **File Download** | `<dbs-file-download>` | Downloadable file item | [file-download.md](components/file-download.md) |
| **Search** | `<dbs-search>` | Search input with built-in filtering | [search.md](components/search.md) |

### Data Display Components

| Component | Selector | Purpose | Doc File |
|-----------|----------|---------|----------|
| **Card** | `<dbs-card>` | Content card with header/body/footer sections | [card.md](components/card.md) |
| **Table** | `<dbs-table>` | Data table with sorting, filtering, pagination | [table.md](components/table.md) |
| **Loader** | `<dbs-loader>` | Loading spinner/indicator | [loader.md](components/loader.md) |

### Overlay Components

| Component | Selector | Purpose | Doc File |
|-----------|----------|---------|----------|
| **Modal** | `<dbs-modal>` | Dialog/modal with header and footer | [modal.md](components/modal.md) |
| **Focus Overlay** | `<dbs-focus-overlay>` | Top-layer dialog using native HTML dialog element | [focus-overlay.md](components/focus-overlay.md) |
| **Dropdown** | `<dbs-dropdown>` | Action dropdown menu (event-driven, not form) | [dropdown.md](components/dropdown.md) |
---

## Foundation & Utilities

| Topic | Description | Doc File |
|-------|-------------|----------|
| **Installation & Setup** | Angular.json config, peer dependencies, theme setup | [01-FOUNDATION.md](01-FOUNDATION.md) |
| **Design Tokens** | CSS variables, theming, color system | [01-FOUNDATION.md](01-FOUNDATION.md) |
| **Typography** | Heading, label, body styles, font configuration | [01-FOUNDATION.md](01-FOUNDATION.md) |
| **SVG Icons** | Icon system, svg-icon component usage | [01-FOUNDATION.md](01-FOUNDATION.md) |
| **Common Patterns** | Slots, sizes, variants, event handling | [02-COMMON-PATTERNS.md](02-COMMON-PATTERNS.md) |

---

## Quick Component Selection Guide

**Need to...?**

- Submit a form → Button (variant="primary")
- Show user profile → Avatar (variant="profile-image")
- Display error → Alert (opened=true)
- Show status → Badge (priority="high/medium/low")
- Add icon action → Icon Button (variant="standard/outline/circle")
- Navigate breadcrumb trail → Breadcrumb
- Show/hide content → Accordion
- Mobile dropdown → Bottom Sheet
- Primary floating action → Floating Action Button
- Card-based navigation → Card Button
- Text input → Input
- Number input → Input Stepper
- Dropdown selection → Select
- Multiple choices → Checkbox
- Single choice → Radio
- Long text → Text Area
- On/off toggle → Switch
- Date selection → Calendar Input
- Upload files → File Upload
- Display data → Table
- Show dialog → Modal
- Top-layer overlay → Focus Overlay
- Action menu → Dropdown
- Search/filter → Search

---

## Common Properties (Across Multiple Components)

### Size Variants
```typescript
size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
```

### Common Inputs
```typescript
disabled: boolean     // Disable interaction
dim: boolean         // For dark backgrounds
opened: boolean      // Control visibility
variant: string      // Component-specific variants
```

### Common Slots
```html
<dbs-component>
  <element startSlot>Before content</element>
  <element endSlot>After content</element>
  Default content
</dbs-component>
```

---

## Theme Options

Available theme schemes:
- **DBS:** Light/Dark (regular/compact)
- **POSB:** Light/Dark (regular/compact)
- **iWealth:** Light/Dark (regular/compact)
- **GlobeSend:** Light/Dark (regular)

See [01-FOUNDATION.md](01-FOUNDATION.md) for theme configuration.

---

## Next Steps

1. **New Project Setup** → Read [01-FOUNDATION.md](01-FOUNDATION.md)
2. **Using Specific Component** → Read component file in `/components/`
3. **Understanding Patterns** → Read [02-COMMON-PATTERNS.md](02-COMMON-PATTERNS.md)

---

**Token Usage:** ~500 tokens
**Last Updated:** 2025-10-27

