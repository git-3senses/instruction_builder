# DBS Angular Library Foundation

```markdown
### DBS Angular Library

## Welcome
DBS Angular Library is a shared Angular UI component library guided by the DBS Design Language System (DLS). This is a collaborative effort between IBGT, MOT, and Group Design to streamline UI development for Angular applications across the bank.
## Installation and usage
Install, configure, and use DBS Angular Library in your application.
# Installation and Usage
This guide will show you how to install, configure, and use the DBS Angular Library components in your application.
# Prerequisites
The minimum Angular versions of the application are as follows:
Angular	Minimum Angular version	Latest DBS Angular Library version
v18 ⚠️	18.0.0	18.34.1
v19	19.2.4	19.30.1
v20	20.0.0	20.8.1
# Installation
1. Run one of the following commands to install the library and its peer dependencies.
# Angular 18
npm install @dbs-angular/core@18 @dbs/design-tokens @dls/icons @tanstack/angular-table @tanstack/match-sorter-utils d3 moment

# Angular 19
npm install @dbs-angular/core@19 @dbs/design-tokens @dls/icons @tanstack/angular-table @tanstack/match-sorter-utils d3 moment

# Angular 20
npm install @dbs-angular/core@20 @dbs/design-tokens @dls/icons @tanstack/angular-table @tanstack/match-sorter-utils d3 moment

2. In angular.json, add the following to your project's build options.
// angular.json
{
  ...
  "projects": {
    ...
    "my-app": {
      ...
      "architect": {
        ...
        "build": {
          ...
          "options": {
            // If custom base path is required for your app
            "baseHref": "/route/to/your/app/base/",
            "assets": [
              // ... other assets

              // OPTION 1 (legacy): source icons from `@dbs-angular/core/assets/ibgt-global-styles/svg`
              {
                "glob": "**/*",
                "input": "node_modules/@dbs-angular/core/assets/ibgt-global-styles/svg",
                "output": "./ibgt-global-styles/svg/"
              },
              // OPTION 2 (recommended): source icons from `@dls/icons`
              {
                "glob": "**/*",
                "input": "node_modules/@dls/icons/src",
                "output": "./assets/dls/svg/"
              }
            ],
            "styles": [
              // ... other styles

              /** Other themes are available: dbs_light_base_base, dbs_dark_base_base... */
              "node_modules/@dbs/design-tokens/themes/posb_light_base_base/css/tokens.css",

              /** Include font assets */
              "node_modules/@dbs-angular/core/assets/fonts/400.css",
              "node_modules/@dbs-angular/core/assets/fonts/500.css",
              "node_modules/@dbs-angular/core/assets/fonts/600.css",

              /** OPTIONAL: For legacy use (migrated apps) */
              "node_modules/@dbs-angular/core/assets/ibgt-global-styles/_icons.scss"
            ],
          }
        }
      }
    }
  }
}
3. Add the provider for HttpClient into your app config.
// app.config.ts OR main.ts
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [
    // ... other providers,
    provideHttpClient(),
  ],
};
4. Run npm start.

## Usage
Here is an example of using the Button component.

# Import DbsButtonComponent.
import { DbsButtonComponent } from '@dbs-angular/core'`;

# Add DbsButtonComponent to your component/module imports array.
imports: [DbsButtonComponent];

# Render dbs-button in your template.
<dbs-button>Hello</dbs-button>

Refer to each component's documentation for usage examples and the API reference.

---------

## Design Tokens & Theming
Design Tokens are all the styling values needed to construct and maintain a design system — spacing, color, typography, object styles, animation, etc.

Group Design maintains a centralised repository of design tokens in the @dbs/design-tokens package. DBS Angular Library components consume these tokens in the form of CSS variables, which can also be used in your Angular application.

# Setup
If you have not done so, add the design tokens CSS file to your angular.json.
/* angular.json */
"styles": [
  ...
  /** Other themes are available: dbs_light_base_base, dbs_dark_base_base... */
  "node_modules/@dbs/design-tokens/themes/posb_light_base_base/css/tokens.css",
],

# Usage
Once added, the tokens should be available throughout your application, and you can use them by referencing the CSS variables.
<style>
  main {
    /* Sets the application's background to the base (level 0) background colour */
    background-color: var(--color-background-level-0);
  }
</style>
<main>...</main>

Refer to the Brand and Experience Portal for more information on each of the tokens and where they should be used in your application.

# Themes
There are many themes available in the @dbs/design-tokens package. Choose one that meets the needs of your project.

The available themes are listed below. Theme IDs are typically in this format: {scheme}_{contrast}_{scale}. {contrast} is a legacy value so it always evaluates to base.

Scheme	Scale	Theme ID
DBS Dark	Regular	dbs_dark_base_base
DBS Dark	Compact	dbs_dark_base_compact-desktop
DBS Light	Regular	dbs_light_base_base
DBS Light	Compact	dbs_light_base_compact-desktop
iWealth Dark	Regular	iwealth_dark_base_base
iWealth Dark	Compact	iwealth_dark_base_compact-desktop
iWealth Light	Regular	iwealth_light_base_base
iWealth Light	Compact	iwealth_light_base_compact-desktop
POSB Dark	Regular	posb_dark_base_base
POSB Dark	Compact	posb_dark_base_compact-desktop
POSB Light	Regular	posb_light_base_base
POSB Light	Compact	posb_light_base_xs
GlobeSend Dark	Regular	gs_dark_base_base
GlobeSend Light	Regular	gs_light_base_base

To switch themes, simply update the angular.json file to reference a different theme:
/* angular.json */
"styles": [
  ...
  /* POSB Dark (compact desktop) theme */
  "node_modules/@dbs/design-tokens/themes/posb_dark_base_compact-desktop/css/tokens.css",
],

----------

## Typography

This guide explains the global typography styles that can be applied to your applications.

These stylesheets are meant to provide consistent and centralised styling of text elements in your applications.

# Setup

1. If you have not done so, add the required font assets to your angular.json.
/* angular.json */
"styles": [
  ...
  "node_modules/@dbs-angular/core/assets/fonts/400.css",
  "node_modules/@dbs-angular/core/assets/fonts/500.css",
  "node_modules/@dbs-angular/core/assets/fonts/600.css",
],

2. Import the global typography stylesheets into your application's styles.scss or angular.json.
Note: For MFE projects, these styles should be managed and added at the host/shell application.

/* in styles.scss */
@import "../node_modules/@dbs-angular/core/assets/global/_dbs-reset.scss";
@import "../node_modules/@dbs-angular/core/assets/global/_dbs-typography.scss";
@import "../node_modules/@dbs-angular/core/assets/global/_dbs-base.scss";

/* or in angular.json */
"styles": [
  ...
  /* OPTION 1: SCSS */
  "node_modules/@dbs-angular/core/assets/global/_dbs-reset.scss",
  "node_modules/@dbs-angular/core/assets/global/_dbs-typography.scss",
  "node_modules/@dbs-angular/core/assets/global/_dbs-base.scss",
  
  /* OPTION 2: CSS */
  "node_modules/@dbs-angular/core/assets/global/dbs-reset.css",
  "node_modules/@dbs-angular/core/assets/global/dbs-typography.css",
  "node_modules/@dbs-angular/core/assets/global/dbs-base.css",
],

# Usage
There are three stylesheets provided for typography:

dbs-reset: Removes default browser styles that may cause inconsistencies, such as margins and box-sizing.

dbs-typography: Provides variables and classes for styling text elements.

dbs-base: Provides default typography styles for native HTML elements.

# dbs-reset
Reset styles remove default browser styles that may cause inconsistencies, such as margins and box-sizing.

The iframe below demonstrates the application of the reset styles on a document that is almost entirely unstyled. Click the toggle button to enable/disable the reset styles.

# dbs-typography
Typography styles are a set of classes for styling text elements in a way that adheres to DLS standards.

They utilise CSS variables from @dbs/design-tokens under the hood, and would therefore reflect the size and scale of text as defined in the applied theme.

The classes are independent of HTML elements and are made to allow text on any element to be styled.

----------

## Heading styles

# TypeSccript
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "typography-heading-story",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "typography-heading-story.component.html",
  styleUrls: ["../common/common.component.css"],
})
export class TypographyHeadingStoryComponent {}

# HTML
<section>
  <pre>.heading.heading--2xl</pre>
  <strong class="heading heading--2xl">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </strong>
</section>
<section>
  <pre>.heading.heading--xl</pre>
  <strong class="heading heading--xl">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </strong>
</section>
<section>
  <pre>.heading.heading--lg</pre>
  <strong class="heading heading--lg">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </strong>
</section>
<section>
  <pre>.heading</pre>
  <strong class="heading">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </strong>
</section>
<section>
  <pre>.heading.heading--sm</pre>
  <strong class="heading heading--sm">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration, without distinction of any kind.
  </strong>
</section>
<section>
  <pre>.heading.heading--xs</pre>
  <strong class="heading heading--xs">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration, without distinction of any kind.
  </strong>
</section>
<section>
  <pre>.heading.heading--2xs</pre>
  <strong class="heading heading--2xs">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration, without distinction of any kind, such as race, colour, sex,
    language, religion, political or other opinion, national or social origin,
    property, birth or other status.
  </strong>
</section>

# CSS
:host {
  display: block;
  color: var(--color-text);
  background-color: var(--color-background-level-0);
  padding-top: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
}

section {
  margin: 4rem 0;
}

section:first-of-type {
  margin-top: 1rem;
}

section:last-of-type {
  margin-bottom: 1rem;
}

section:has(a.link--dim) {
  background: var(--color-background-dim);
  padding: 1rem;
}

pre {
  width: fit-content;
  margin: 0 0 0.5rem;
  padding-top: 0.125rem;
  padding-right: 0.5rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1;
  background-color: var(--tag-category-background);
  color: var(--tag-category-color);
  border-radius: 1rem;
}

----------

## Label Styles

# TypeScript
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "typography-label-story",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "typography-label-story.component.html",
  styleUrls: ["../common/common.component.css"],
})
export class TypographyLabelStoryComponent {}

# HTML
<section>
  <pre>.label</pre>
  <span class="label">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </span>
</section>
<section>
  <pre>.label.label--sm</pre>
  <span class="label label--sm">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </span>
</section>
<section>
  <pre>.label.label--xs</pre>
  <span class="label label--xs">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </span>
</section>

# CSS
:host {
  display: block;
  color: var(--color-text);
  background-color: var(--color-background-level-0);
  padding-top: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
}

section {
  margin: 4rem 0;
}

section:first-of-type {
  margin-top: 1rem;
}

section:last-of-type {
  margin-bottom: 1rem;
}

section:has(a.link--dim) {
  background: var(--color-background-dim);
  padding: 1rem;
}

pre {
  width: fit-content;
  margin: 0 0 0.5rem;
  padding-top: 0.125rem;
  padding-right: 0.5rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1;
  background-color: var(--tag-category-background);
  color: var(--tag-category-color);
  border-radius: 1rem;
}

----------

## Body Styles

# TypeScript
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "typography-body-story",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "typography-body-story.component.html",
  styleUrls: ["../common/common.component.css"],
})
export class TypographyBodyStoryComponent {}

# HTML
<section>
  <pre>.body</pre>
  <pre>.body .body__bold</pre>
  <p class="body">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration,
    <strong class="body__bold">without distinction of any kind</strong>, such as
    race, colour, sex, language, religion, political or other opinion, national
    or social origin, property, birth or other status. Furthermore, no
    distinction shall be made on the basis of the political, jurisdictional or
    international status of the country or territory to which a person belongs,
    whether it be independent, trust, non-self-governing or under any other
    limitation of sovereignty.
  </p>
</section>
<section>
  <pre>.body.body--sm</pre>
  <pre>.body.body--sm .body__bold</pre>
  <p class="body body--sm">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration,
    <strong class="body body__bold">without distinction of any kind</strong>,
    such as race, colour, sex, language, religion, political or other opinion,
    national or social origin, property, birth or other status. Furthermore, no
    distinction shall be made on the basis of the political, jurisdictional or
    international status of the country or territory to which a person belongs,
    whether it be independent, trust, non-self-governing or under any other
    limitation of sovereignty.
  </p>
</section>

# CSS
:host {
  display: block;
  color: var(--color-text);
  background-color: var(--color-background-level-0);
  padding-top: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
}

section {
  margin: 4rem 0;
}

section:first-of-type {
  margin-top: 1rem;
}

section:last-of-type {
  margin-bottom: 1rem;
}

section:has(a.link--dim) {
  background: var(--color-background-dim);
  padding: 1rem;
}

pre {
  width: fit-content;
  margin: 0 0 0.5rem;
  padding-top: 0.125rem;
  padding-right: 0.5rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1;
  background-color: var(--tag-category-background);
  color: var(--tag-category-color);
  border-radius: 1rem;
}

----------

### dbs-base
The base styles provide default typography styles for native HTML elements, such as headings, paragraphs, and links.

## Default Heading Styles

# TypeScript
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "base-heading-story",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "base-heading-story.component.html",
  styleUrls: [
    "../common/common.component.css",
    "../../../../../core/assets/global/_dbs-base.scss",
  ],
})
export class BaseHeadingStoryComponent {}

# HTML
<section>
  <pre>h1</pre>
  <h1>
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </h1>
</section>
<section>
  <pre>h2</pre>
  <h2>
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </h2>
</section>
<section>
  <pre>h3</pre>
  <h3>
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </h3>
</section>
<section>
  <pre>h4</pre>
  <h4>
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </h4>
</section>
<section>
  <pre>h4</pre>
  <h4>
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </h4>
</section>
<section>
  <pre>h5</pre>
  <h5>
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </h5>
</section>
<section>
  <pre>h6</pre>
  <h6>
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </h6>
</section>
<section>
  <pre>.title</pre>
  <span class="title">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </span>
</section>
<section>
  <pre>.title--small</pre>
  <span class="title--small">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration.
  </span>
</section>

# CSS
:host {
  display: block;
  color: var(--color-text);
  background-color: var(--color-background-level-0);
  padding-top: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
}

section {
  margin: 4rem 0;
}

section:first-of-type {
  margin-top: 1rem;
}

section:last-of-type {
  margin-bottom: 1rem;
}

section:has(a.link--dim) {
  background: var(--color-background-dim);
  padding: 1rem;
}

pre {
  width: fit-content;
  margin: 0 0 0.5rem;
  padding-top: 0.125rem;
  padding-right: 0.5rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1;
  background-color: var(--tag-category-background);
  color: var(--tag-category-color);
  border-radius: 1rem;
}

----------

## Default Label Styles

# TypeScript
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "base-label-story",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "base-label-story.component.html",
  styleUrls: [
    "../common/common.component.css",
    "../../../../../core/assets/global/_dbs-base.scss",
  ],
})
export class BaseLabelStoryComponent {}

# HTML
<section>
  <pre>.text</pre>
  <span class="text">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration, without distinction of any kind, such as race, colour, sex,
    language, religion, political or other opinion, national or social origin,
    property, birth or other status.
  </span>
</section>
<section>
  <pre>.text--small</pre>
  <span class="text--small">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration, without distinction of any kind, such as race, colour, sex,
    language, religion, political or other opinion, national or social origin,
    property, birth or other status.
  </span>
</section>
<section>
  <pre>.text--footnote</pre>
  <span class="text--footnote">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration, without distinction of any kind, such as race, colour, sex,
    language, religion, political or other opinion, national or social origin,
    property, birth or other status.
  </span>
</section>
<section>
  <pre>.text--tiny</pre>
  <span class="text--tiny">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration, without distinction of any kind, such as race, colour, sex,
    language, religion, political or other opinion, national or social origin,
    property, birth or other status.
  </span>
</section>
<section>
  <pre>label</pre>
  <label>
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration, without distinction of any kind, such as race, colour, sex,
    language, religion, political or other opinion, national or social origin,
    property, birth or other status.
  </label>
</section>

# CSS
:host {
  display: block;
  color: var(--color-text);
  background-color: var(--color-background-level-0);
  padding-top: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
}

section {
  margin: 4rem 0;
}

section:first-of-type {
  margin-top: 1rem;
}

section:last-of-type {
  margin-bottom: 1rem;
}

section:has(a.link--dim) {
  background: var(--color-background-dim);
  padding: 1rem;
}

pre {
  width: fit-content;
  margin: 0 0 0.5rem;
  padding-top: 0.125rem;
  padding-right: 0.5rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1;
  background-color: var(--tag-category-background);
  color: var(--tag-category-color);
  border-radius: 1rem;
}

----------

## Default paragraph and anchor styles

# TypeScript
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "base-paragraph-anchor-story",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "base-paragraph-anchor-story.component.html",
  styleUrls: [
    "../common/common.component.css",
    "../../../../../core/assets/global/_dbs-base.scss",
  ],
})
export class BaseParagraphAnchorStoryComponent {}

# HTML
<section>
  <pre>p</pre>
  <p>
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration, without distinction of any kind, such as race, colour, sex,
    language, religion, political or other opinion, national or social origin,
    property, birth or other status.
  </p>
</section>

<section>
  <pre>a</pre>
  <a href="#">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration
  </a>
</section>

<section>
  <pre>a.bound</pre>
  <a href="#" class="bound">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration
  </a>
</section>

<section>
  <pre>a.link--product</pre>
  <a href="#" class="link--product">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration
  </a>
</section>

<section>
  <pre>a.link--subtle</pre>
  <a href="#" class="link--subtle">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration
  </a>
</section>

<section>
  <pre>a.link--text</pre>
  <a href="#" class="link--text">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration
  </a>
</section>

<section>
  <pre>a.link--dim</pre>
  <a href="#" class="link--dim">
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration
  </a>
</section>

# CSS
:host {
  display: block;
  color: var(--color-text);
  background-color: var(--color-background-level-0);
  padding-top: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
}

section {
  margin: 4rem 0;
}

section:first-of-type {
  margin-top: 1rem;
}

section:last-of-type {
  margin-bottom: 1rem;
}

section:has(a.link--dim) {
  background: var(--color-background-dim);
  padding: 1rem;
}

pre {
  width: fit-content;
  margin: 0 0 0.5rem;
  padding-top: 0.125rem;
  padding-right: 0.5rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1;
  background-color: var(--tag-category-background);
  color: var(--tag-category-color);
  border-radius: 1rem;
}

----------

## Overriding default styles
The default style of an element can be overridden by applying a typography class. This is useful for styling heading elements when they need to adhere to the document flow (for accessibility and screen-reader friendliness), but their actual appearance needs to be different from the default heading styles.

# TypeScript
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "override-defaults-story",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "override-defaults-story.component.html",
  styleUrls: [
    "override-defaults-story.component.css",
    "../../../../../core/assets/global/_dbs-base.scss",
    "../../../../../core/assets/global/_dbs-typography.scss",
  ],
})
export class OverrideDefaultsStoryComponent {}

# HTML
<article>
  <h1 class="heading heading--xs">xs site title as h1 heading</h1>
  <h2 class="heading heading--2xl">2xl article title as h2 heading</h2>
  <p class="body">
    Article body text.<br />
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration,
    <strong class="body__bold">without distinction of any kind</strong>, such as
    race, colour, sex, language, religion, political or other opinion, national
    or social origin, property, birth or other status.
  </p>
  <p>
    Furthermore, no distinction shall be made on the basis of the political,
    jurisdictional or international status of the country or territory to which
    a person belongs, whether it be independent, trust, non-self-governing or
    under any other limitation of sovereignty.
  </p>
  <p class="body body--sm">
    Footnote as small body text.<br />
    Everyone is entitled to all the rights and freedoms set forth in this
    Declaration,
    <strong class="body__bold">without distinction of any kind</strong>, such as
    race, colour, sex, language, religion, political or other opinion, national
    or social origin, property, birth or other status.
  </p>
</article>

# CSS
:host {
  display: block;
  color: var(--color-text);
  background-color: var(--color-background-level-0);
  padding-top: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
}

----------

### SVG Icon
<svg-icon> is a helper component ment to be used with the @dls/icons library icons. It simplifies the import, customisation and styling of the @dls/icons library svg icons.

For single-use or project specific icons with complex path and vectors please use <img>

## Usage
Import DbsSvgIconComponent into your component or module.

import { DbsSvgIconComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsSvgIconComponent],
})

## Icon Finder
Our icons come from the @dls/icons package.

## Stories

# Basic
The same icon will only be retrieved once in the network
<div [style.display]='"flex"'>
  <svg-icon  [iconName]="'logo-social-whatsapp'" [fill]="'red'" ></svg-icon>
  <svg-icon  [iconName]="'logo-social-whatsapp'" [fill]="'green'" ></svg-icon>
  <svg-icon  [iconName]="'logo-social-whatsapp'" [fill]="'blue'" ></svg-icon>
</div>

# Base 64
Converts the svg icon into a base64 background image, used where svg icons aren't viewable.
Note that only [fill] will be retained for base64
<svg-icon  [fill]="'pink'" [base64]="true" [iconName]="'up-down-arrows'" ></svg-icon>

# Class Styling
The svg-icon component can be styled via css on the host element
<style>
  .custom{border-radius:50%;background-color:grey;fill:white;stroke:black;height:100px;width:100px;}
</style>
<svg-icon  [iconName]="'pulse'" class='custom'></svg-icon>

# Global Icon Location
The globalIconLocation property of the SvgIconService can be used to set the default URL for all app icons
individual <svg-icon> may overwrite

- Typescript 
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsSvgIconService } from "../../dbs-svg-icon.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  /** Do this at your AppComponent level
   *
   * 1. inject the DbsSvgIconService
   * 2. set the `this.iconService.globalIconLocation` to the route you want
   *
   * This will set the route ALL your <svg-icons> will be retrieved from.
   *
   * Absolute URLS will work example https://go.mydbs.net/web/ewb/home
   */
  constructor(private iconService: DbsSvgIconService) {
    this.iconService.globalIconLocation = "assets/images"; //default is 'assets/dls/svg'
  }
}

- HTML
<svg-icon [iconName]="'dbs-logo'"></svg-icon>

# API Reference
<svg-icon [fill]="fill" [iconName]="iconName" [base64]="base64"  ></svg-icon>

# Sample Reference Table

Name -- Description -- Default -- Control

fill -- while fill @Input is provided we recommend using css to style your svg to follow DLS variables unless using [base64] string -- '#69737B' via css and token --icon-button-icon-fill -- pink

iconName -- The icon's file name in our assets,available icons match DLS icon names (@dls/icons)
file name of the icon, HAS TO BE '.svg' string -- pulse

base64 -- Setting to true will convert the svg into a base64, this is required for certain functions like printing page. boolean -- false

iconLocation -- The icon's directory, this allows you to add your own icons ;set at DbsIconService; string -- "assets/dls/svg"

# Reference Icon Label Samples

- admin-setting
- admin-setting-filled
- airplane-shield
- airplay
- alarm-reminder-vibrate
- align-center
- align-justify
- align-left
- align-right
- ambulance
- anchor
- arrow-back
- aperture
- archive
- arrow-down
- arrow-down-left
- arrow-down-right
- arrow-forward
- arrow-left
- arrow-right
- arrow-up
- arrow-up-left
- arrow-up-right
- arrow-right-circle
- arrow-down-circle
- arrow-left-circle
- arrow-up-circle
- arrow-undo
- arrow-redo
- arrow-down-filled
- arrow-left-filled
- arrow-right-filled
- arrow-up-filled
- arrows-up-down-filled
- at-sign
- atm
- award
- backspace
- bag-cash
- bag-cash
- bag-cash
- bank-delete
- bank-account
- bank-limit
- bank-mail
- bank-plus
- bank-repeat
- bar-chart
- bar-chart-ascending
- basketball
- battery
- battery-charging
- beauty-lipstick
- bell
- bell-alert
- bell-filled
- bell-off

```