# DBS Angular Library Documentation

> **Optimized documentation for Claude Code usage with minimal token consumption**

## Overview

This documentation provides a modular reference for the DBS Angular Library components. The structure is designed to minimize token usage when working with Claude Code by splitting content into focused, component-specific files.

## Documentation Structure

```
dbs-library-docs/
├── README.md                      # This file - Documentation guide
├── 00-INDEX.md                    # Quick reference index (~500 tokens)
├── 01-FOUNDATION.md               # Setup, themes, typography (~3,000 tokens)
├── 02-COMMON-PATTERNS.md          # Shared patterns & conventions (~2,000 tokens)
└── components/                    # Individual component docs (~2,000-4,000 tokens each)
    ├── accordion.md
    ├── alert.md
    ├── avatar.md
    └── [other components...]
```

## How to Use with Claude Code

### Token-Efficient Workflow

Instead of loading all documentation (45,000+ tokens), follow this approach:

1. **Start with the Index** - Load `00-INDEX.md` to see available components
2. **Load Foundation Once** - For project setup, load `01-FOUNDATION.md`
3. **Load Specific Components** - Only load the component files you're working with
4. **Reference Common Patterns** - Load `02-COMMON-PATTERNS.md` when needed

### Example Usage

**Scenario:** Build a login form with DBS components

```
Load: 00-INDEX.md           (~500 tokens)
Load: components/button.md  (~3,000 tokens)
Load: components/alert.md   (~2,500 tokens)
Total: ~6,000 tokens vs 45,000!
```

## Quick Start

### Installation

```bash
# Angular 18
npm install @dbs-angular/core@18 @dbs/design-tokens @dls/icons @tanstack/angular-table @tanstack/match-sorter-utils d3 moment

# Angular 19
npm install @dbs-angular/core@19 @dbs/design-tokens @dls/icons @tanstack/angular-table @tanstack/match-sorter-utils d3 moment

# Angular 20
npm install @dbs-angular/core@20 @dbs/design-tokens @dls/icons @tanstack/angular-table @tanstack/match-sorter-utils d3 moment
```

### Basic Import Pattern

```typescript
import { DbsComponentName } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsComponentName],
})
export class MyComponent {}
```

### Basic Usage

```html
<dbs-component [property]="value">Content</dbs-component>
```

## Component Categories

### Actions
- Button
- Icon Button
- Floating Action Button
- Card Button

### Display
- Avatar
- Badge
- Alert

### Navigation
- Breadcrumb
- Bottom Sheet

### Layout
- Accordion

## File Naming Convention

- Core documentation: `00-`, `01-`, `02-` prefix (numerical order)
- Components: `component-name.md` (kebab-case)
- Use hyphens for multi-word components (e.g., `icon-button.md`)

## Token Budget Guidelines

| File Type | Approximate Tokens | When to Load |
|-----------|-------------------|--------------|
| INDEX | ~500 | Every session start |
| FOUNDATION | ~3,000 | Once per project setup |
| COMMON-PATTERNS | ~2,000 | When needed for reference |
| Component Files | ~2,000-4,000 | Only what you're using |

## Maintenance

### Adding New Components

1. Create new file in `components/` folder
2. Follow the standard template structure
3. Update `00-INDEX.md` with the new component
4. Keep token count under 4,000 per file

### Updating Existing Components

- Update individual component files
- Keep examples concise and practical
- Remove redundant CSS/styling examples

## Support

For DBS Angular Library issues, refer to your internal DBS documentation or contact:
- IBGT team
- MOT team
- Group Design team

---

**Last Updated:** 2025-10-24
**Library Version Compatibility:** Angular 18, 19, 20
