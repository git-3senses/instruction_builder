# DBS Angular Library - Foundation

> Setup, installation, theming, typography, and icon system configuration

---

## Prerequisites

| Angular Version | Minimum Version | Latest DBS Library Version |
|-----------------|-----------------|----------------------------|
| v18 ⚠️ | 18.0.0 | 18.34.1 |
| v19 | 19.2.4 | 19.30.1 |
| v20 | 20.0.0 | 20.8.1 |

---

## Installation

### 1. Install Package and Peer Dependencies

```bash
# Angular 18
npm install @dbs-angular/core@18 @dbs/design-tokens @dls/icons @tanstack/angular-table @tanstack/match-sorter-utils d3 moment

# Angular 19
npm install @dbs-angular/core@19 @dbs/design-tokens @dls/icons @tanstack/angular-table @tanstack/match-sorter-utils d3 moment

# Angular 20
npm install @dbs-angular/core@20 @dbs/design-tokens @dls/icons @tanstack/angular-table @tanstack/match-sorter-utils d3 moment
```

### 2. Configure angular.json

Add the following to your project's build options:

```json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "options": {
            "baseHref": "/route/to/your/app/base/",
            "assets": [
              // OPTION 1 (legacy): source icons from @dbs-angular/core
              {
                "glob": "**/*",
                "input": "node_modules/@dbs-angular/core/assets/ibgt-global-styles/svg",
                "output": "./ibgt-global-styles/svg/"
              },
              // OPTION 2 (recommended): source icons from @dls/icons
              {
                "glob": "**/*",
                "input": "node_modules/@dls/icons/src",
                "output": "./assets/dls/svg/"
              }
            ],
            "styles": [
              // Theme (choose one based on your brand)
              "node_modules/@dbs/design-tokens/themes/posb_light_base_base/css/tokens.css",

              // Font assets (required)
              "node_modules/@dbs-angular/core/assets/fonts/400.css",
              "node_modules/@dbs-angular/core/assets/fonts/500.css",
              "node_modules/@dbs-angular/core/assets/fonts/600.css",

              // OPTIONAL: For legacy use (migrated apps)
              "node_modules/@dbs-angular/core/assets/ibgt-global-styles/_icons.scss"
            ]
          }
        }
      }
    }
  }
}
```

### 3. Add HttpClient Provider

```typescript
// app.config.ts OR main.ts
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideHttpClient(),
    // ... other providers
  ],
};
```

### 4. Start Development Server

```bash
npm start
```

---

## Design Tokens & Theming

Design Tokens are styling values (spacing, color, typography, etc.) from the centralized `@dbs/design-tokens` package. DBS Angular Library components consume these tokens via CSS variables.

### Available Themes

| Scheme | Scale | Theme ID |
|--------|-------|----------|
| **DBS Dark** | Regular | `dbs_dark_base_base` |
| **DBS Dark** | Compact | `dbs_dark_base_compact-desktop` |
| **DBS Light** | Regular | `dbs_light_base_base` |
| **DBS Light** | Compact | `dbs_light_base_compact-desktop` |
| **iWealth Dark** | Regular | `iwealth_dark_base_base` |
| **iWealth Dark** | Compact | `iwealth_dark_base_compact-desktop` |
| **iWealth Light** | Regular | `iwealth_light_base_base` |
| **iWealth Light** | Compact | `iwealth_light_base_compact-desktop` |
| **POSB Dark** | Regular | `posb_dark_base_base` |
| **POSB Dark** | Compact | `posb_dark_base_compact-desktop` |
| **POSB Light** | Regular | `posb_light_base_base` |
| **POSB Light** | Compact | `posb_light_base_xs` |
| **GlobeSend Dark** | Regular | `gs_dark_base_base` |
| **GlobeSend Light** | Regular | `gs_light_base_base` |

### Using Design Tokens

Once configured in angular.json, tokens are available as CSS variables throughout your app:

```html
<style>
  main {
    /* Sets background to base (level 0) background colour */
    background-color: var(--color-background-level-0);
    color: var(--color-text);
  }
</style>
<main>...</main>
```

### Switching Themes

Update angular.json to reference a different theme:

```json
"styles": [
  "node_modules/@dbs/design-tokens/themes/posb_dark_base_compact-desktop/css/tokens.css"
]
```

---

## Typography

Global typography styles provide consistent text styling across your applications.

### Setup Typography Stylesheets

**Option 1: Import in styles.scss**

```scss
@import "../node_modules/@dbs-angular/core/assets/global/_dbs-reset.scss";
@import "../node_modules/@dbs-angular/core/assets/global/_dbs-typography.scss";
@import "../node_modules/@dbs-angular/core/assets/global/_dbs-base.scss";
```

**Option 2: Add to angular.json**

```json
"styles": [
  // SCSS version
  "node_modules/@dbs-angular/core/assets/global/_dbs-reset.scss",
  "node_modules/@dbs-angular/core/assets/global/_dbs-typography.scss",
  "node_modules/@dbs-angular/core/assets/global/_dbs-base.scss",

  // OR CSS version
  "node_modules/@dbs-angular/core/assets/global/dbs-reset.css",
  "node_modules/@dbs-angular/core/assets/global/dbs-typography.css",
  "node_modules/@dbs-angular/core/assets/global/dbs-base.css"
]
```

### Typography Stylesheets

**dbs-reset:** Removes default browser styles (margins, box-sizing)

**dbs-typography:** Provides classes for styling text elements

**dbs-base:** Provides default styles for native HTML elements

### Heading Classes

```html
<strong class="heading heading--2xl">Largest heading</strong>
<strong class="heading heading--xl">Extra large heading</strong>
<strong class="heading heading--lg">Large heading</strong>
<strong class="heading">Default heading</strong>
<strong class="heading heading--sm">Small heading</strong>
<strong class="heading heading--xs">Extra small heading</strong>
<strong class="heading heading--2xs">Smallest heading</strong>
```

### Label Classes

```html
<span class="label">Default label</span>
<span class="label label--sm">Small label</span>
<span class="label label--xs">Extra small label</span>
```

### Body Classes

```html
<p class="body">
  Default body text
  <strong class="body__bold">with bold text</strong>
</p>
<p class="body body--sm">Small body text</p>
```

### Default HTML Element Styles

When `dbs-base` is included, native HTML elements receive default styling:

```html
<!-- Headings -->
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

<!-- Text styles -->
<span class="title">Title text</span>
<span class="title--small">Small title</span>
<span class="text">Default text</span>
<span class="text--small">Small text</span>
<span class="text--footnote">Footnote text</span>
<span class="text--tiny">Tiny text</span>

<!-- Paragraphs and links -->
<p>Paragraph text</p>
<a href="#">Default link</a>
<a href="#" class="bound">Bound link</a>
<a href="#" class="link--product">Product link</a>
<a href="#" class="link--subtle">Subtle link</a>
<a href="#" class="link--text">Text link</a>
<a href="#" class="link--dim">Dim link</a>
```

### Overriding Default Styles

Typography classes can override default element styles:

```html
<article>
  <h1 class="heading heading--xs">Small site title as h1</h1>
  <h2 class="heading heading--2xl">Large article title as h2</h2>
  <p class="body">Article body text</p>
  <p class="body body--sm">Footnote as small body</p>
</article>
```

---

## SVG Icon System

The `<svg-icon>` component simplifies usage of icons from the `@dls/icons` library.

### Import and Usage

```typescript
import { DbsSvgIconComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsSvgIconComponent],
})
```

```html
<svg-icon [iconName]="'logo-social-whatsapp'" [fill]="'red'"></svg-icon>
```

### Icon Properties

```typescript
[iconName]="'icon-name'"        // Icon file name (required)
[fill]="'color'"                // Icon fill color (default: CSS token)
[base64]="true"                 // Convert to base64 (for printing)
[iconLocation]="'custom/path'"  // Override default location
```

### Setting Global Icon Location

Configure default icon path at app level:

```typescript
// app.component.ts
import { DbsSvgIconService } from '@dbs-angular/core';

export class AppComponent {
  constructor(private iconService: DbsSvgIconService) {
    // Default is 'assets/dls/svg'
    this.iconService.globalIconLocation = "assets/images";
  }
}
```

### Available Icons (Sample)

```
admin-setting, airplane-shield, airplay, alarm-reminder-vibrate,
align-center, align-justify, align-left, align-right, ambulance,
anchor, arrow-back, arrow-down, arrow-left, arrow-right, arrow-up,
arrow-down-circle, arrow-left-circle, arrow-right-circle,
arrow-up-circle, arrow-undo, arrow-redo, at-sign, atm, award,
backspace, bag-cash, bank-account, bank-delete, bank-limit,
bank-mail, bank-plus, bar-chart, basketball, battery, bell,
bell-alert, bell-filled, bell-off, chevron-left, chevron-right,
chevron-up, chevron-down, close, plus, plus-circle, user,
[and many more...]
```

Refer to `@dls/icons` package for complete icon list.

---

## Quick Component Import Example

```typescript
import { Component } from '@angular/core';
import { DbsButtonComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DbsButtonComponent],
  template: '<dbs-button>Hello DBS</dbs-button>',
})
export class AppComponent {}
```

---

## Notes for MFE Projects

For Micro Frontend (MFE) projects:
- Global typography styles should be managed at the **host/shell application** level
- Avoid duplicating font and theme configurations in remote applications
- Ensure consistent design token versions across all MFEs

---

**Token Usage:** ~3,000 tokens
**Last Updated:** 2025-10-24

