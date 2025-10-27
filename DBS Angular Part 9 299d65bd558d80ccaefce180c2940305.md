# DBS Angular Part 9

```markdown
Primary Side Nav
Usage
Import DbsNavSidePrimaryComponent into your component or module.
import { DbsNavSidePrimaryComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsNavSidePrimaryComponent],
})
Stories
Configuring Navigation Items
The navItems and navItemsFooter Inputs take in an array of objects of type NavHeadingOrItem, which is defined as either a NavHeading or a NavItem. A NavHeading can be used to add sections to the sidebar.
NavItems can contain subpages, which is an array of objects of type NavSubItem.
See the API Reference for the full type definition.
<header style="position: fixed; left: 0; top: 0; bottom: 0; display: flex">
  <dbs-nav-side-primary  [navItems]="[{'selected':false,'selectable':true,'icon':'home-tab','label':'route page','route':'home'},{'selected':false,'selectable':false,'icon':'external-link','label':'href page','href':'#testpage','target':'_blank'},{'selected':false,'selectable':false,'icon':'toggle-right','label':'non-navigation item'},{'type':'heading','label':'Heading label'},{'selected':false,'selectable':true,'icon':'list','label':'with <=5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'users'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'store','badge':{'priority':'high','text':'888'}}]},{'selected':false,'selectable':true,'icon':'list','label':'with >5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'report-a'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'report-b','badge':{'priority':'high','text':'888'}},{'selected':false,'selectable':true,'label':'Report C','route':'report-c'},{'selected':false,'selectable':true,'label':'Report D','route':'report-d'}]},{'selected':false,'selectable':true,'icon':'bell','label':'with badge','badge':{'priority':'low','text':'888'}},{'selected':false,'selectable':true,'icon':'spark-stars','label':'with \\'hasNew\\' (deprecated)','hasNew':true}]" [navItemsFooter]="[{'selected':false,'selectable':true,'label':'Help and Feedback','icon':'circle-question'}]" ></dbs-nav-side-primary>
</header>
Working With Angular Router
To use the sidebar with Angular Router, each navigation item should have a route property set. The onNavClick Output will then be used to detect the item that was clicked on and to navigate accordingly with the router.
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import {
  DbsButtonComponent,
  DbsNavSidePrimaryComponent,
  NavHeadingOrItem,
  NavItem,
} from "../../../../../public-api";

@Component({
  selector: "angular-router-story",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    DbsButtonComponent,
    DbsNavSidePrimaryComponent,
  ],
  templateUrl: `angular-router-story.component.html`,
  styleUrl: `angular-router-story.component.scss`,
})
export class DbsAngularRouterStoryComponent {
  router = inject(Router);

  mainNavItemList: NavHeadingOrItem[] = [
    {
      selected: false,
      selectable: true,
      icon: "home-tab",
      label: "Home",
      route: "home",
    },
    {
      selected: false,
      selectable: true,
      icon: "user",
      label: "Users",
      route: "users",
    },
    {
      selected: false,
      selectable: true,
      icon: "shop-front",
      label: "Store",
      route: "store",
    },
    {
      selected: false,
      selectable: true,
      icon: "report",
      label: "Reports",
      subpages: [
        {
          selected: false,
          selectable: true,
          label: "Report A",
          route: "report-a",
        },
        {
          selected: false,
          selectable: true,
          label: "Report B",
          route: "report-b",
        },
      ],
    },
  ];

  onNavClick(navItem: NavItem) {
    if (navItem.route) {
      this.router.navigate([navItem.route]);
    }
  }
}

@Component({
  selector: "home-page",
  standalone: true,
  template: `<div>Home page content</div>`,
})
export class HomePageComponent {}

@Component({
  selector: "users-page",
  standalone: true,
  template: `<div>Users page content</div>`,
})
export class UsersPageComponent {}

@Component({
  selector: "store-page",
  standalone: true,
  template: `<div>Store page content</div>`,
})
export class StorePageComponent {}

@Component({
  selector: "report-a-page",
  standalone: true,
  template: `<div>Report A page content</div>`,
})
export class ReportAPageComponent {}

@Component({
  selector: "report-b-page",
  standalone: true,
  template: `<div>Report B page content</div>`,
})
export class ReportBPageComponent {}
<div class="wrapper">
  <header>
    <dbs-nav-side-primary
      [navItems]="mainNavItemList"
      (onNavClick)="onNavClick($event)"
    ></dbs-nav-side-primary>
  </header>
  <main>
    <div class="router-outlet">
      <router-outlet />
    </div>
    <div class="links">
      <dbs-button routerLink="/home">Go to Home</dbs-button>
      <dbs-button routerLink="/users">Go to Users</dbs-button>
      <dbs-button routerLink="/store">Go to Store</dbs-button>
      <dbs-button routerLink="/report-a">Go to Report A</dbs-button>
      <dbs-button routerLink="/report-b">Go to Report B</dbs-button>
    </div>
  </main>
</div>
:host {
  position: relative;
  display: block;
  height: 100vh;
  max-height: 500px;
}

.wrapper {
  display: flex;
  position: absolute;
  inset: 0;
}

header {
  display: flex;
}

main {
  width: 100%;
  padding: 48px;
  background: var(--color-background-level-1);
  overflow-y: auto;
}

.router-outlet {
  padding: 24px 0;
}

.links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
"Overlay" Pattern
This pattern allows the sidebar to expand over the main content, preventing the main content layout from shifting.
<div style="display: flex; position: absolute; inset: 0;">
  <header style="position: fixed; left: 0; top: 0; bottom: 0; display: flex">
    <dbs-nav-side-primary  [navItems]="[{'selected':false,'selectable':true,'icon':'home-tab','label':'route page','route':'home'},{'selected':false,'selectable':false,'icon':'external-link','label':'href page','href':'#testpage','target':'_blank'},{'selected':false,'selectable':false,'icon':'toggle-right','label':'non-navigation item'},{'type':'heading','label':'Heading label'},{'selected':false,'selectable':true,'icon':'list','label':'with <=5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'users'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'store','badge':{'priority':'high','text':'888'}}]},{'selected':false,'selectable':true,'icon':'list','label':'with >5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'report-a'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'report-b','badge':{'priority':'high','text':'888'}},{'selected':false,'selectable':true,'label':'Report C','route':'report-c'},{'selected':false,'selectable':true,'label':'Report D','route':'report-d'}]},{'selected':false,'selectable':true,'icon':'bell','label':'with badge','badge':{'priority':'low','text':'888'}},{'selected':false,'selectable':true,'icon':'spark-stars','label':'with \\'hasNew\\' (deprecated)','hasNew':true}]" [navItemsFooter]="[{'selected':false,'selectable':true,'label':'Help and Feedback','icon':'circle-question'}]" [opened]="false" ></dbs-nav-side-primary>
  </header>
  <main style="width: 100%; padding: 48px; margin-left: 72px; background: var(--color-background-level-1); overflow-y: auto;">
    <dbs-button>Interactive elements</dbs-button>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
  </main>
</div>
"Push" Pattern
This pattern "pushes" the main content aside as the sidebar expands, preventing the main content from being blocked by the sidebar.
<div style="display: flex; position: absolute; inset: 0;">
  <header style="display: flex">
    <dbs-nav-side-primary  [navItems]="[{'selected':false,'selectable':true,'icon':'home-tab','label':'route page','route':'home'},{'selected':false,'selectable':false,'icon':'external-link','label':'href page','href':'#testpage','target':'_blank'},{'selected':false,'selectable':false,'icon':'toggle-right','label':'non-navigation item'},{'type':'heading','label':'Heading label'},{'selected':false,'selectable':true,'icon':'list','label':'with <=5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'users'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'store','badge':{'priority':'high','text':'888'}}]},{'selected':false,'selectable':true,'icon':'list','label':'with >5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'report-a'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'report-b','badge':{'priority':'high','text':'888'}},{'selected':false,'selectable':true,'label':'Report C','route':'report-c'},{'selected':false,'selectable':true,'label':'Report D','route':'report-d'}]},{'selected':false,'selectable':true,'icon':'bell','label':'with badge','badge':{'priority':'low','text':'888'}},{'selected':false,'selectable':true,'icon':'spark-stars','label':'with \\'hasNew\\' (deprecated)','hasNew':true}]" [navItemsFooter]="[{'selected':false,'selectable':true,'label':'Help and Feedback','icon':'circle-question'}]" [opened]="false" ></dbs-nav-side-primary>
  </header>
  <main style="width: 100%; padding: 48px; background: var(--color-background-level-1); overflow-y: auto;">
    <dbs-button>Interactive elements</dbs-button>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
  </main>
</div>
"Expanded-only" Pattern
<div style="display: flex; position: absolute; inset: 0;">
  <header style="display: flex">
    <dbs-nav-side-primary  [navItems]="[{'selected':false,'selectable':true,'icon':'home-tab','label':'route page','route':'home'},{'selected':false,'selectable':false,'icon':'external-link','label':'href page','href':'#testpage','target':'_blank'},{'selected':false,'selectable':false,'icon':'toggle-right','label':'non-navigation item'},{'type':'heading','label':'Heading label'},{'selected':false,'selectable':true,'icon':'list','label':'with <=5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'users'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'store','badge':{'priority':'high','text':'888'}}]},{'selected':false,'selectable':true,'icon':'list','label':'with >5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'report-a'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'report-b','badge':{'priority':'high','text':'888'}},{'selected':false,'selectable':true,'label':'Report C','route':'report-c'},{'selected':false,'selectable':true,'label':'Report D','route':'report-d'}]},{'selected':false,'selectable':true,'icon':'bell','label':'with badge','badge':{'priority':'low','text':'888'}},{'selected':false,'selectable':true,'icon':'spark-stars','label':'with \\'hasNew\\' (deprecated)','hasNew':true}]" [navItemsFooter]="[{'selected':false,'selectable':true,'label':'Help and Feedback','icon':'circle-question'}]" [opened]="true" [showCollapse]="false" ></dbs-nav-side-primary>
  </header>
  <main style="width: 100%; padding: 48px; background: var(--color-background-level-1); overflow-y: auto;">
    <dbs-button>Interactive elements</dbs-button>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
  </main>
</div>
App Title And Clickable Logo
<div style="display: flex; position: absolute; inset: 0;">
  <header style="display: flex">
    <dbs-nav-side-primary  [navItems]="[{'selected':false,'selectable':true,'icon':'home-tab','label':'route page','route':'home'},{'selected':false,'selectable':false,'icon':'external-link','label':'href page','href':'#testpage','target':'_blank'},{'selected':false,'selectable':false,'icon':'toggle-right','label':'non-navigation item'},{'type':'heading','label':'Heading label'},{'selected':false,'selectable':true,'icon':'list','label':'with <=5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'users'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'store','badge':{'priority':'high','text':'888'}}]},{'selected':false,'selectable':true,'icon':'list','label':'with >5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'report-a'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'report-b','badge':{'priority':'high','text':'888'}},{'selected':false,'selectable':true,'label':'Report C','route':'report-c'},{'selected':false,'selectable':true,'label':'Report D','route':'report-d'}]},{'selected':false,'selectable':true,'icon':'bell','label':'with badge','badge':{'priority':'low','text':'888'}},{'selected':false,'selectable':true,'icon':'spark-stars','label':'with \\'hasNew\\' (deprecated)','hasNew':true}]" [appTitle]="'Workbench'" [headerLogoClickable]="true" (onHeaderLogoClick)="onHeaderLogoClick()"></dbs-nav-side-primary>
  </header>
  <main style="width: 100%; padding: 48px; background: var(--color-background-level-1); overflow-y: auto;">
    <dbs-button>Interactive elements</dbs-button>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
  </main>
</div>
Pre-opened Subpanel Set isSubpagePanelOpen: true on the item you would like to pre-open.
<div style="display: flex; position: absolute; inset: 0;">
  <header style="position: fixed; left: 0; top: 0; bottom: 0; display: flex">
    <dbs-nav-side-primary  [navItems]="[{'selected':false,'selectable':true,'icon':'home-tab','label':'route page','route':'home'},{'selected':false,'selectable':false,'icon':'external-link','label':'href page','href':'#testpage','target':'_blank'},{'selected':false,'selectable':false,'icon':'toggle-right','label':'non-navigation item'},{'type':'heading','label':'Heading label'},{'selected':false,'selectable':true,'icon':'list','label':'with <=5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'users'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'store','badge':{'priority':'high','text':'888'}}],'isSubpagePanelOpen':true},{'selected':false,'selectable':true,'icon':'list','label':'with >5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'report-a'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'report-b','badge':{'priority':'high','text':'888'}},{'selected':false,'selectable':true,'label':'Report C','route':'report-c'},{'selected':false,'selectable':true,'label':'Report D','route':'report-d'}]},{'selected':false,'selectable':true,'icon':'bell','label':'with badge','badge':{'priority':'low','text':'888'}},{'selected':false,'selectable':true,'icon':'spark-stars','label':'with \\'hasNew\\' (deprecated)','hasNew':true}]" [opened]="false" ></dbs-nav-side-primary>
  </header>
  <main style="width: 100%; padding: 48px; margin-left: 72px; background: var(--color-background-level-1); overflow-y: auto;">
    <dbs-button>Interactive elements</dbs-button>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
  </main>
</div>
Keep Subpanel Open On Click Outside
<div style="display: flex; position: absolute; inset: 0;">
  <header style="position: fixed; left: 0; top: 0; bottom: 0; display: flex">
    <dbs-nav-side-primary  [navItems]="[{'selected':false,'selectable':true,'icon':'home-tab','label':'route page','route':'home'},{'selected':false,'selectable':false,'icon':'external-link','label':'href page','href':'#testpage','target':'_blank'},{'selected':false,'selectable':false,'icon':'toggle-right','label':'non-navigation item'},{'type':'heading','label':'Heading label'},{'selected':false,'selectable':true,'icon':'list','label':'with <=5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'users'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'store','badge':{'priority':'high','text':'888'}}],'isSubpagePanelOpen':true},{'selected':false,'selectable':true,'icon':'list','label':'with >5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'report-a'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'report-b','badge':{'priority':'high','text':'888'}},{'selected':false,'selectable':true,'label':'Report C','route':'report-c'},{'selected':false,'selectable':true,'label':'Report D','route':'report-d'}]},{'selected':false,'selectable':true,'icon':'bell','label':'with badge','badge':{'priority':'low','text':'888'}},{'selected':false,'selectable':true,'icon':'spark-stars','label':'with \\'hasNew\\' (deprecated)','hasNew':true}]" [opened]="false" [closeSubpanelOnClickOutside]="false" ></dbs-nav-side-primary>
  </header>
  <main style="width: 100%; padding: 48px; margin-left: 72px; background: var(--color-background-level-1); overflow-y: auto;">
    <dbs-button>Interactive elements</dbs-button>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
  </main>
</div>
Collapse Sidebar On Click Outside
<div style="display: flex; position: absolute; inset: 0;">
  <header style="position: fixed; left: 0; top: 0; bottom: 0; display: flex">
    <dbs-nav-side-primary  [navItems]="[{'selected':false,'selectable':true,'icon':'home-tab','label':'route page','route':'home'},{'selected':false,'selectable':false,'icon':'external-link','label':'href page','href':'#testpage','target':'_blank'},{'selected':false,'selectable':false,'icon':'toggle-right','label':'non-navigation item'},{'type':'heading','label':'Heading label'},{'selected':false,'selectable':true,'icon':'list','label':'with <=5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'users'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'store','badge':{'priority':'high','text':'888'}}]},{'selected':false,'selectable':true,'icon':'list','label':'with >5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'report-a'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'with badge','route':'report-b','badge':{'priority':'high','text':'888'}},{'selected':false,'selectable':true,'label':'Report C','route':'report-c'},{'selected':false,'selectable':true,'label':'Report D','route':'report-d'}]},{'selected':false,'selectable':true,'icon':'bell','label':'with badge','badge':{'priority':'low','text':'888'}},{'selected':false,'selectable':true,'icon':'spark-stars','label':'with \\'hasNew\\' (deprecated)','hasNew':true}]" [collapseNavOnClickOutside]="true" ></dbs-nav-side-primary>
  </header>
  <main style="width: 100%; padding: 48px; margin-left: 72px; background: var(--color-background-level-1); overflow-y: auto;">
    <dbs-button>Interactive elements</dbs-button>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
  </main>
</div>
Custom Elements Using Slots
Various slots can be used to pass in any necessary custom elements, or to replace the default logo with a different one.
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsButtonComponent,
  DbsNavSidePrimaryComponent,
  NavHeadingOrItem,
  NavSubItem,
} from "../../../../../public-api";

@Component({
  selector: "custom-elements-story",
  standalone: true,
  imports: [CommonModule, DbsNavSidePrimaryComponent, DbsButtonComponent],
  templateUrl: `custom-elements-story.component.html`,
  styleUrl: `custom-elements-story.component.scss`,
})
export class DbsCustomElementsStoryComponent {
  subpages1: NavSubItem[] = [
    {
      selected: false,
      selectable: true,
      label: "route subpage",
      route: "testsubpage1",
    },
    {
      selected: false,
      selectable: false,
      label: "href subpage",
      href: "#testsubpage2",
      target: "_blank",
    },
    {
      selected: false,
      selectable: false,
      label: "non-nav item",
    },
    {
      selected: false,
      selectable: true,
      label: "with badge",
      route: "testsubpage4",
      badge: { priority: "high", text: "888" },
    },
  ];

  subpages2: NavSubItem[] = [
    {
      selected: false,
      selectable: true,
      label: "route subpage",
      route: "testsubpage5",
    },
    {
      selected: false,
      selectable: false,
      label: "href subpage",
      href: "#testsubpage6",
      target: "_blank",
    },
    {
      selected: false,
      selectable: false,
      label: "non-nav item",
    },
    {
      selected: false,
      selectable: true,
      label: "with badge",
      route: "testsubpage8",
      badge: { priority: "high", text: "888" },
    },
    {
      selected: false,
      selectable: true,
      label: "test subpage 9",
      route: "testsubpage9",
    },
    {
      selected: false,
      selectable: true,
      label: "test subpage 10",
      route: "testsubpage10",
    },
  ];

  mainNavItemList: NavHeadingOrItem[] = [
    {
      selected: false,
      selectable: true,
      icon: "home-tab",
      label: "route page",
      route: "testpage1",
    },
    {
      selected: false,
      selectable: false,
      icon: "external-link",
      label: "href page",
      href: "#testpage2",
      target: "_blank",
    },
    {
      selected: false,
      selectable: false,
      icon: "toggle-right",
      label: "non-navigation item",
    },
    {
      selected: true,
      selectable: true,
      icon: "map-pin",
      label: "pre-selected page",
      route: "/", // when using Angular Router, the matching route will set the page as "selected"
    },
    {
      type: "heading",
      label: "Heading label",
    },
    {
      selected: false,
      selectable: true,
      icon: "list",
      label: "with <=5 subpages",
      subpages: this.subpages1,
    },
    {
      selected: false,
      selectable: true,
      icon: "list",
      label: "with >5 subpages",
      subpages: this.subpages2,
    },
    {
      selected: false,
      selectable: true,
      icon: "bell",
      label: "with badge",
      badge: { priority: "low", text: "888" },
    },
    {
      selected: false,
      selectable: true,
      icon: "spark-stars",
      label: 'with "hasNew" (deprecated)',
      hasNew: true,
    },
  ];

  opened: boolean = true;
}
<div class="wrapper">
  <header>
    <dbs-nav-side-primary [navItems]="mainNavItemList" [(opened)]="opened">
      <!-- Custom logo -->
      <div headerSlot>
        @if (opened) {
          <svg
            class="logo--expanded"
            width="210"
            height="29"
            viewBox="0 0 210 29"
            fill="none"
            xmlns="<http://www.w3.org/2000/svg>"
          >
            <g clip-path="url(#clip0_32_3)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.2047 16.9981V16.9963C22.2047 15.4209 22.2685 14.0086 23.4371 11.528C23.7749 10.8064 24.5224 9.75489 23.4212 8.52789C22.5265 7.63599 21.5104 7.78229 20.8259 8.17679C21.2196 7.49239 21.3659 6.47199 20.4721 5.57649C19.2459 4.47899 18.1908 5.22459 17.4726 5.56409C14.989 6.73529 13.5837 6.79999 12.0028 6.79999C10.4157 6.79999 9.0085 6.73529 6.5303 5.56409C5.8086 5.22459 4.7491 4.47899 3.5264 5.57649C2.6326 6.47199 2.7833 7.49239 3.177 8.17679C2.4907 7.78049 1.4729 7.63599 0.5773 8.52789C-0.523 9.75489 0.228002 10.8064 0.559602 11.528C1.7353 14.0086 1.8 15.4209 1.8 16.9981C1.8 18.5797 1.7353 19.9956 0.559602 22.4744C0.228002 23.1907 -0.523 24.2493 0.5773 25.4754C1.4729 26.3646 2.4907 26.2174 3.177 25.8274C2.7833 26.5136 2.6326 27.5313 3.5264 28.4179C4.7491 29.5234 5.8086 28.7761 6.5303 28.4365C9.0103 27.2662 10.4157 27.2042 12.0028 27.2042C13.5837 27.2042 14.989 27.2662 17.4717 28.4365C18.1908 28.7761 19.2459 29.5234 20.4721 28.4179C21.3659 27.5313 21.216 26.5136 20.8241 25.8274C21.5104 26.2174 22.5265 26.3699 23.4212 25.4754C24.5224 24.2493 23.7749 23.1907 23.4371 22.4744C22.2685 19.992 22.2047 18.5797 22.2047 16.9981Z"
                fill="#FF3E3E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.4168 24.4401L13.6569 19.6098C13.6569 19.6098 12.8766 18.848 12.0014 18.848C11.1174 18.848 10.3372 19.6098 10.3372 19.6098L4.57899 24.4401L4.56049 24.4234L9.39169 18.6634C9.39169 18.6634 10.1518 17.8858 10.1518 17.0001C10.1518 16.1231 9.39169 15.3446 9.39169 15.3446L4.56049 9.58032L4.57899 9.56012L10.3372 14.3956C10.3372 14.3956 11.1174 15.1592 12.0014 15.1592C12.8766 15.1592 13.6569 14.3956 13.6569 14.3956L19.4168 9.56012L19.4405 9.58552L14.5998 15.3446C14.5998 15.3446 13.8449 16.1231 13.8449 17.0001C13.8449 17.8858 14.5998 18.6634 14.5998 18.6634L19.4405 24.4216L19.4168 24.4401Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M40.204 25.4975C42.0338 24.844 44.2985 21.7315 43.9231 16.8297C43.5615 12.0879 41.748 8.3624 36.9188 8.0125C36.9188 8.0125 36.0043 7.9468 35.238 7.9435C34.4163 7.9378 34.2404 7.9102 34.1793 8.7854C34.0743 10.4228 34.0442 23.1757 34.1492 25.0161C34.1614 25.2685 34.1891 25.8742 35.2429 25.9805C37.1697 26.1664 38.7634 26.017 40.204 25.4975ZM38.3358 7.2048C42.4222 7.1862 47.7994 9.9788 47.7782 16.9556C47.7644 23.0239 43.3685 26.7615 39.3089 26.7615L29 26.764L29.013 26.5472C29.5929 26.4441 30.2443 26.0837 30.3526 25.6989C30.6939 24.2368 30.6165 10.8596 30.4097 8.6564C30.3445 7.9671 29.7989 7.5231 29.1368 7.4143L29.1165 7.2048C29.1165 7.2048 37.4204 7.2097 38.3358 7.2048ZM60.9382 21.9677C61.0196 17.765 57.9291 16.6503 54.7287 16.4758C54.6619 16.4709 54.6872 16.3134 54.7369 16.3053C55.7768 16.2639 59.9113 15.7866 59.7435 11.8492C59.5758 8.0126 56.6563 7.9265 55.5887 7.9103C54.7173 7.8989 54.5276 7.8989 54.1595 7.9168C53.5398 7.9436 53.385 7.989 53.3883 8.6596C53.3883 8.7448 53.2523 15.5714 53.1709 20.3709C53.1326 22.9793 53.122 24.9877 53.122 24.9877C53.1375 25.4659 53.078 25.9505 54.2588 26.0057C55.4779 26.065 57.0496 26.1153 58.1498 25.8823C59.1572 25.668 60.8698 24.9325 60.9382 21.9677ZM59.6735 16.3174C64.4806 17.5051 64.7706 20.9643 64.7038 21.9368C64.4839 26.2679 60.7998 26.7639 59.316 26.7639H47.9753L47.9883 26.5455C48.8124 26.4327 49.4305 25.9829 49.4305 24.5395L49.4973 9.624C49.516 8.0068 49.0893 7.5124 48.1911 7.4069L48.1707 7.2047H56.7459C58.32 7.2047 63.0604 6.893 63.4643 11.237C63.7852 14.7133 59.9536 16.1656 59.6735 16.3174ZM78.165 7.264L78.36 7.2624L78.427 10.7476L78.212 10.7459C77.868 9.3269 76.5 7.989 73.7562 7.8494C70.5159 7.6797 69.1152 9.6045 69.094 11.4262C69.0753 13.8471 70.9703 14.3472 73.7774 15.0299C75.0999 15.3522 80.001 15.9895 79.608 21.479C79.336 25.3132 76.015 27.1365 71.3131 26.992C71.3131 26.992 69.3595 26.9271 66.6306 26.1729C66.1257 26.03 65.9913 26.1997 65.7885 26.5707L65.5654 26.5821L65.5727 22.8242L65.7885 22.8347C65.896 23.2155 65.9262 23.9242 66.6184 24.5249C67.1224 24.9682 68.3073 26.0625 70.9059 26.0909C73.4565 26.125 75.5706 25.0518 75.854 22.1991C75.9313 21.4319 75.8499 19.6759 74.13 18.8755C72.7847 18.2488 69.0492 17.8355 67.2389 16.2533C67.2389 16.2533 65.0914 14.762 65.4302 11.9783C65.9058 8.0442 69.1999 7.0603 72.1592 7.0002C72.1592 7.0002 74.8067 6.9742 76.916 7.5173C76.916 7.5173 77.432 7.657 77.86 7.4946C78.033 7.437 78.115 7.329 78.165 7.264Z"
                fill="white"
              />
              <path
                d="M91.12 11.9H92.44L94.44 16.94L96.46 11.9H97.8L95.32 17.96L98.04 24.38L103.18 11.8H104.7L98.68 26H97.44L94.46 18.98L91.46 26H90.24L84.24 11.8H85.74L90.9 24.38L93.6 17.96L91.12 11.9ZM109.51 26.2C108.764 26.2 108.07 26.06 107.43 25.78C106.804 25.4867 106.257 25.0933 105.79 24.6C105.337 24.0933 104.984 23.52 104.73 22.88C104.477 22.2267 104.35 21.54 104.35 20.82C104.35 20.0733 104.477 19.38 104.73 18.74C104.984 18.0867 105.344 17.5133 105.81 17.02C106.277 16.5133 106.824 16.12 107.45 15.84C108.09 15.5467 108.784 15.4 109.53 15.4C110.277 15.4 110.964 15.5467 111.59 15.84C112.217 16.12 112.764 16.5133 113.23 17.02C113.697 17.5133 114.057 18.0867 114.31 18.74C114.564 19.38 114.69 20.0733 114.69 20.82C114.69 21.54 114.564 22.2267 114.31 22.88C114.057 23.52 113.697 24.0933 113.23 24.6C112.777 25.0933 112.23 25.4867 111.59 25.78C110.964 26.06 110.27 26.2 109.51 26.2ZM105.73 20.84C105.73 21.6133 105.897 22.32 106.23 22.96C106.577 23.5867 107.037 24.0867 107.61 24.46C108.184 24.82 108.817 25 109.51 25C110.204 25 110.837 24.8133 111.41 24.44C111.984 24.0667 112.444 23.56 112.79 22.92C113.137 22.2667 113.31 21.56 113.31 20.8C113.31 20.0267 113.137 19.32 112.79 18.68C112.444 18.04 111.984 17.5333 111.41 17.16C110.837 16.7867 110.204 16.6 109.51 16.6C108.817 16.6 108.184 16.7933 107.61 17.18C107.05 17.5667 106.597 18.08 106.25 18.72C105.904 19.3467 105.73 20.0533 105.73 20.84ZM122.165 16.78C121.258 16.8067 120.458 17.06 119.765 17.54C119.085 18.02 118.605 18.68 118.325 19.52V26H116.965V15.58H118.245V18.08C118.605 17.3467 119.078 16.7533 119.665 16.3C120.265 15.8467 120.898 15.5933 121.565 15.54C121.698 15.5267 121.812 15.52 121.905 15.52C122.012 15.52 122.098 15.5267 122.165 15.54V16.78ZM131.417 26L127.557 20.66L125.337 22.74V26H123.977V11.4H125.337V21.28L131.237 15.6H132.737L128.477 19.86L132.897 26H131.417ZM139.682 26.2C138.869 26.2 138.115 25.9933 137.422 25.58C136.729 25.1533 136.189 24.62 135.802 23.98V26H134.582V11.4H135.942V17.76C136.409 17.0533 136.969 16.4867 137.622 16.06C138.275 15.62 139.035 15.4 139.902 15.4C140.635 15.4 141.289 15.5533 141.862 15.86C142.449 16.1667 142.949 16.58 143.362 17.1C143.775 17.6067 144.089 18.1867 144.302 18.84C144.515 19.48 144.622 20.14 144.622 20.82C144.622 21.5533 144.495 22.24 144.242 22.88C144.002 23.52 143.655 24.0933 143.202 24.6C142.749 25.0933 142.222 25.4867 141.622 25.78C141.035 26.06 140.389 26.2 139.682 26.2ZM139.362 25C139.922 25 140.442 24.8867 140.922 24.66C141.402 24.4333 141.815 24.12 142.162 23.72C142.509 23.32 142.775 22.8733 142.962 22.38C143.149 21.8733 143.242 21.3533 143.242 20.82C143.242 20.0867 143.082 19.4 142.762 18.76C142.455 18.1067 142.022 17.5867 141.462 17.2C140.915 16.8 140.269 16.6 139.522 16.6C138.989 16.6 138.489 16.72 138.022 16.96C137.569 17.2 137.162 17.52 136.802 17.92C136.455 18.3067 136.169 18.7333 135.942 19.2V22.44C135.995 22.8 136.135 23.14 136.362 23.46C136.589 23.7667 136.869 24.0333 137.202 24.26C137.549 24.4867 137.909 24.6667 138.282 24.8C138.655 24.9333 139.015 25 139.362 25ZM151.426 26.2C150.679 26.2 149.986 26.06 149.346 25.78C148.706 25.4867 148.152 25.0933 147.686 24.6C147.219 24.0933 146.852 23.5133 146.586 22.86C146.332 22.2067 146.206 21.5067 146.206 20.76C146.206 19.7867 146.426 18.8933 146.866 18.08C147.319 17.2667 147.939 16.62 148.726 16.14C149.512 15.6467 150.406 15.4 151.406 15.4C152.432 15.4 153.326 15.6467 154.086 16.14C154.859 16.6333 155.466 17.2867 155.906 18.1C156.346 18.9 156.566 19.78 156.566 20.74C156.566 20.8467 156.566 20.9533 156.566 21.06C156.566 21.1533 156.559 21.2267 156.546 21.28H147.626C147.692 22.0267 147.899 22.6933 148.246 23.28C148.606 23.8533 149.066 24.3133 149.626 24.66C150.199 24.9933 150.819 25.16 151.486 25.16C152.166 25.16 152.806 24.9867 153.406 24.64C154.019 24.2933 154.446 23.84 154.686 23.28L155.866 23.6C155.652 24.0933 155.326 24.54 154.886 24.94C154.446 25.34 153.926 25.6533 153.326 25.88C152.739 26.0933 152.106 26.2 151.426 26.2ZM147.586 20.3H155.286C155.232 19.54 155.026 18.8733 154.666 18.3C154.319 17.7267 153.859 17.28 153.286 16.96C152.726 16.6267 152.106 16.46 151.426 16.46C150.746 16.46 150.126 16.6267 149.566 16.96C149.006 17.28 148.546 17.7333 148.186 18.32C147.839 18.8933 147.639 19.5533 147.586 20.3ZM167.424 26H166.064V20.18C166.064 18.9533 165.884 18.06 165.524 17.5C165.164 16.9267 164.597 16.64 163.824 16.64C163.291 16.64 162.764 16.7733 162.244 17.04C161.724 17.2933 161.264 17.6467 160.864 18.1C160.477 18.54 160.197 19.0467 160.024 19.62V26H158.664V15.58H159.904V17.94C160.184 17.4333 160.551 16.9933 161.004 16.62C161.457 16.2333 161.971 15.9333 162.544 15.72C163.117 15.5067 163.711 15.4 164.324 15.4C164.897 15.4 165.384 15.5067 165.784 15.72C166.184 15.9333 166.504 16.24 166.744 16.64C166.984 17.0267 167.157 17.5 167.264 18.06C167.371 18.6067 167.424 19.22 167.424 19.9V26ZM174.844 26.2C174.084 26.2 173.384 26.06 172.744 25.78C172.118 25.4867 171.564 25.0867 171.084 24.58C170.618 24.0733 170.251 23.4933 169.984 22.84C169.731 22.1867 169.604 21.4933 169.604 20.76C169.604 19.7733 169.824 18.8733 170.264 18.06C170.704 17.2467 171.318 16.6 172.104 16.12C172.891 15.64 173.798 15.4 174.824 15.4C175.798 15.4 176.658 15.6267 177.404 16.08C178.151 16.52 178.704 17.12 179.064 17.88L177.744 18.3C177.451 17.7667 177.038 17.3533 176.504 17.06C175.984 16.7533 175.404 16.6 174.764 16.6C174.071 16.6 173.438 16.78 172.864 17.14C172.291 17.5 171.831 17.9933 171.484 18.62C171.151 19.2467 170.984 19.96 170.984 20.76C170.984 21.5467 171.158 22.26 171.504 22.9C171.851 23.54 172.311 24.0533 172.884 24.44C173.458 24.8133 174.091 25 174.784 25C175.238 25 175.671 24.92 176.084 24.76C176.511 24.6 176.878 24.3867 177.184 24.12C177.504 23.84 177.718 23.54 177.824 23.22L179.164 23.62C178.978 24.1133 178.664 24.56 178.224 24.96C177.798 25.3467 177.291 25.6533 176.704 25.88C176.131 26.0933 175.511 26.2 174.844 26.2ZM190.061 26H188.701V20.18C188.701 19.0067 188.494 18.1267 188.081 17.54C187.667 16.94 187.074 16.64 186.301 16.64C185.794 16.64 185.287 16.7733 184.781 17.04C184.287 17.2933 183.847 17.6467 183.461 18.1C183.087 18.54 182.821 19.0467 182.661 19.62V26H181.301V11.4H182.661V17.94C183.074 17.1667 183.647 16.5533 184.381 16.1C185.127 15.6333 185.921 15.4 186.761 15.4C187.361 15.4 187.867 15.5067 188.281 15.72C188.707 15.9333 189.047 16.2467 189.301 16.66C189.567 17.06 189.761 17.5333 189.881 18.08C190.001 18.6133 190.061 19.22 190.061 19.9V26Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M199.071 10.0551L202.317 6.18421C202.317 6.18421 202.829 5.6598 202.829 5.0717C202.829 4.4776 202.317 3.95321 202.317 3.95321L199.071 0.0835056L199.083 0.071106L202.953 3.31781C202.953 3.31781 203.476 3.82861 204.071 3.82861C204.661 3.82861 205.184 3.31781 205.184 3.31781L209.058 0.071106L209.071 0.0835056L205.822 3.95321C205.822 3.95321 205.308 4.4776 205.308 5.0717C205.308 5.6598 205.822 6.18421 205.822 6.18421L209.071 10.0551L209.054 10.0711L205.184 6.81791C205.184 6.81791 204.661 6.31061 204.071 6.31061C203.476 6.31061 202.953 6.81791 202.953 6.81791L199.084 10.0711L199.071 10.0551Z"
                fill="#FF3E3E"
              />
            </g>
            <defs>
              <clipPath id="clip0_32_3">
                <rect width="210" height="29" fill="white" />
              </clipPath>
            </defs>
          </svg>
        } @else {
          <svg
            class="logo--collapsed"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="<http://www.w3.org/2000/svg>"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.2047 11.9981V11.9963C22.2047 10.4209 22.2685 9.00862 23.4371 6.52802C23.7749 5.80636 24.5224 4.7549 23.4212 3.5279C22.5265 2.63602 21.5104 2.7823 20.8259 3.17682C21.2196 2.49239 21.3659 1.47196 20.4721 0.576538C19.2459 -0.521024 18.1908 0.224573 17.4726 0.564126C14.989 1.73527 13.5837 1.79999 12.0028 1.79999C10.4157 1.79999 9.00855 1.73527 6.53034 0.564126C5.80861 0.224573 4.74905 -0.521024 3.52635 0.576538C2.6326 1.47196 2.78333 2.49239 3.17701 3.17682C2.49074 2.78053 1.47286 2.63602 0.577332 3.5279C-0.523009 4.7549 0.22799 5.80636 0.559599 6.52802C1.73531 9.00862 1.80003 10.4209 1.80003 11.9981C1.80003 13.5797 1.73531 14.9956 0.559599 17.4744C0.22799 18.1907 -0.523009 19.2493 0.577332 20.4754C1.47286 21.3646 2.49074 21.2174 3.17701 20.8274C2.78333 21.5136 2.6326 22.5313 3.52635 23.4179C4.74905 24.5234 5.80861 23.7761 6.53034 23.4365C9.01032 22.2662 10.4157 22.2042 12.0028 22.2042C13.5837 22.2042 14.989 22.2662 17.4717 23.4365C18.1908 23.7761 19.2459 24.5234 20.4721 23.4179C21.3659 22.5313 21.216 21.5136 20.8241 20.8274C21.5104 21.2174 22.5265 21.3699 23.4212 20.4754C24.5224 19.2493 23.7749 18.1907 23.4371 17.4744C22.2685 14.992 22.2047 13.5797 22.2047 11.9981Z"
              fill="#FF3E3E"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.4168 19.4401L13.6569 14.6098C13.6569 14.6098 12.8766 13.848 12.0014 13.848C11.1174 13.848 10.3372 14.6098 10.3372 14.6098L4.579 19.4401L4.56055 19.4234L9.39167 13.6634C9.39167 13.6634 10.1518 12.8858 10.1518 12.0001C10.1518 11.1231 9.39167 10.3446 9.39167 10.3446L4.56055 4.58027L4.579 4.56006L10.3372 9.39558C10.3372 9.39558 11.1174 10.1592 12.0014 10.1592C12.8766 10.1592 13.6569 9.39558 13.6569 9.39558L19.4168 4.56006L19.4405 4.58554L14.5998 10.3446C14.5998 10.3446 13.8449 11.1231 13.8449 12.0001C13.8449 12.8858 14.5998 13.6634 14.5998 13.6634L19.4405 19.4216L19.4168 19.4401Z"
              fill="white"
            />
          </svg>
        }
      </div>

      <!-- Other custom slots -->
      <div *ngIf="opened" bodyStartSlot class="sample-content">
        bodyStartSlot example
      </div>
      <div *ngIf="opened" bodyEndSlot class="sample-content">
        bodyEndSlot example
      </div>
      <div *ngIf="opened" footerStartSlot class="sample-content">
        footerStartSlot example
      </div>
      <div *ngIf="opened" footerEndSlot class="sample-content">
        footerEndSlot example
      </div>
    </dbs-nav-side-primary>
  </header>
  <main>
    <dbs-button>Interactive elements</dbs-button>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
  </main>
</div>
:host {
  position: relative;
  display: block;
  height: 100vh;
  max-height: 500px;
}

.wrapper {
  display: flex;
  position: absolute;
  inset: 0;
}

header {
  display: flex;
}

main {
  width: 100%;
  padding: 48px;
  background: var(--color-background-level-1);
  overflow-y: auto;
}

.logo--collapsed {
  margin: 24px;
}

.logo--expanded {
  /* align the clover parts of each logo between expanded and collapsed */
  margin: 19px 24px 24px;
}

.sample-content {
  padding: 8px 24px;
  color: white;
}
dbs-sidebar Replacement
If you are migrating from DbsSidebarComponent, you may re-implement it using a combination of DbsNavSidePrimaryComponent and DbsNavBottomComponent as shown in the example below.
This example code can be saved as a component and used very similarly to DbsSidebarComponent.
API Reference
<dbs-nav-side-primary [navItems]="navItems" [navItemsFooter]="navItemsFooter"  ></dbs-nav-side-primary>
Name	Description	Default	Control
Hide inputs itemsinputs	Hide inputs items		
navItems	The array of NavHeadingOrItem objects for the main navigation.NavHeadingOrItem[]	[]	navItems :[
• 0 :{...} 5 keys			
• 1 :{...} 6 keys			
• 2 :{...} 4 keys			
• 3 :{...} 2 keys			
• 4 :{...} 5 keys			
• 5 :{...} 5 keys			
• 6 :{...} 5 keys			
• 7 :{...} 5 keys]			
navItemsFooter	The array of NavHeadingOrItem objects for the footer navigation.NavHeadingOrItem[]	[]	navItemsFooter :[
• 0 :{...} 4 keys]			
appTitle	Text to display beside the default DBS logo in the app header.string		
closeSubpanelOnClickOutside	Closes the subpanel if a click is detected anywhere outside the popover.boolean	true	
collapseNavOnClickOutside	Collapses the sidebar if a click is detected anywhere outside the nav.boolean	false	
headerLogoClickable	Makes the DBS logo area clickable.boolean	false	
opened	The opened state of the sidebar.boolean	true	
popoverGap	Controls the minimum margin between the screen boundaries and subpanel popover. Values defined in px.NavSidePopoverGap	{ top: 8, bottom: 8, left: 8, right: 8, }	
showCollapse	Allows the sidebar to expand/collapse by clicking on the expand/collapse button in the footer.boolean	true	
showHeaderLogo	Determines if the DBS logo and appTitle are shown.boolean	true	
textObject	Changes the static text used in the component. Can be used for translations.NavSidePrimaryTextObject	{ itemTooltipSubtext: 'Click for more', expand: 'Expand sidebar', collapse: 'Collapse sidebar', more: 'More', new: 'NEW', // @deprecated logout: 'Logout', // @deprecated }	
widths	The width of sidebar in different states.NavSideWidths	{ expanded: '280px', collapsed: '72px', }	
Hide deprecated itemsdeprecated	Hide deprecated items		
logoType	(deprecated) Only the "default" DBS logo colour and type should be used. Customise the header with headerSlot instead.		
Determines the DBS logo color and type"default""gold""shiny"		defaultgoldshiny	
showLogout	(deprecated) Customise the footer with footerSlot instead.		
Determines if the default logout button is shown.boolean	false		
onCollapse	*(deprecated) Use openedChange Output instead.*EventEmitter<boolean>	new EventEmitter<boolean>()	
onCollapseClick	*(deprecated) Use openedChange Output instead.*EventEmitter<any>	new EventEmitter<any>()	
onLogout	(deprecated) Customise the footer with footerSlot instead.		
Event fired when logout button is clicked.EventEmitter<any>	new EventEmitter<any>()		
onNavClicked	*(deprecated) Use onNavClick Output instead.*EventEmitter<any>	new EventEmitter<any>()	
navbarHeaderSlot	(deprecated) Use headerSlot instead.-	-	-
app-navbar--header	(deprecated) Use headerSlot instead.-	-	-
navbarFooterSlot	(deprecated) Use footerSlot instead.-	-	-
app-navbar--footer	(deprecated) Use footerSlot instead.-	-	-
Hide outputs itemsoutputs	Hide outputs items		
onHeaderLogoClick	Event fired when the default header logo is clicked.EventEmitter<undefined>	new EventEmitter<undefined>()	
openedChange	Event fired when opened Input is changed. Emits the value of opened.EventEmitter<boolean>	new EventEmitter<boolean>()	
onNavClick	Event fired when a nav item is clicked. Emits a NavItem object.EventEmitter<NavItem>	new EventEmitter<NavItem>()	
Hide slots itemsslots	Hide slots items		
headerStartSlot	Content at the start of the header, before the default logo.HTMLElement	-	
headerSlot	Main content of the header. If provided, replaces the default logo.HTMLElement	-	
headerEndSlot	Content at the end of the header, after the default logo.HTMLElement	-	
bodyStartSlot	Content at the start of the body, before the main navigation.HTMLElement	-	
bodySlot	Main content of the body. If provided, replaces the main navigation.HTMLElement	-	
bodyEndSlot	Content at the end of the body, after the main navigation.HTMLElement	-	
footerStartSlot	Content at the start of the footer, before the footer navigation and expand/collapse button.HTMLElement	-	
footerSlot	Main content of the footer. If provided, replaces the footer navigation and expand/collapse button.HTMLElement	-	
footerEndSlot	Content at the end of the footer, after the footer navigation.HTMLElement	-	
Hide templates itemstemplates	Hide templates items		
navItemStartSlotTemplate	Template for inserting content at the start of the nav item.HTMLElement	-	
navItemEndSlotTemplate	Template for inserting content at the end of the nav item.HTMLElement	-	
navSubitemStartSlotTemplate	Template for inserting content at the start of the nav sub-item.HTMLElement	-	
navSubitemEndSlotTemplate	Template for inserting content at the end of the nav sub-item.HTMLElement	-	
```

```markdown
Secondary Side Nav
Usage
Import DbsNavSideSecondaryComponent into your component or module.
`import { DbsNavSideSecondaryComponent } from '@dbs-angular/core';
@Component({ ... standalone: true, imports: [DbsNavSideSecondaryComponent], })`
Stories
Configuring Navigation Items
The navItems and navItemsFooter Inputs take in an array of objects of type NavItem.
NavItems can contain subpages, which is an array of objects of type NavSubItem.
See the API Reference for the full type definition.
<div style="display: flex; position: absolute; inset: 0;">
  <header style="display: flex;">
    <dbs-nav-side-secondary  [title]="'Page title'" [navItems]="[{'selected':false,'selectable':true,'label':'route page','route':'home'},{'selected':false,'selectable':false,'label':'href page','href':'#testpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-navigation item'},{'selected':false,'selectable':true,'label':'with <=5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'users'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'}]},{'selected':false,'selectable':true,'label':'with >5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'testsubpage5'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage6','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'test subpage 7','route':'testsubpage7'},{'selected':false,'selectable':true,'label':'test subpage 8','route':'testsubpage8'},{'selected':false,'selectable':true,'label':'test subpage 9','route':'testsubpage9'}]},{'selected':false,'selectable':true,'label':'test page 6'}]" [navItemsFooter]="[{'selected':false,'selectable':true,'label':'Help and Feedback','icon':'circle-question'}]" ></dbs-nav-side-secondary>
  </header>
  <main style="width: 100%; padding: 48px; background: var(--color-background-level-1); overflow-y: auto;">
    <dbs-button>Interactive elements</dbs-button>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
  </main>
</div>
Working With Angular Router
To use the nav with Angular Router, each navigation item should have a route property set. The onNavClick Output will then be used to detect the item that was clicked on and to navigate accordingly with the router.
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import {
  DbsButtonComponent,
  DbsNavSideSecondaryComponent,
  NavItem,
} from "@dbs-angular/core";

@Component({
  selector: "angular-router-story",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    DbsButtonComponent,
    DbsNavSideSecondaryComponent,
  ],
  templateUrl: `angular-router-story.component.html`,
  styleUrl: `angular-router-story.component.scss`,
})
export class DbsAngularRouterStoryComponent {
  router = inject(Router);

  mainNavItemList: NavItem[] = [
    {
      selected: false,
      selectable: true,
      label: "Page 1",
      route: "page-1",
    },
    {
      selected: false,
      selectable: true,
      label: "Page 2",
      route: "page-2",
    },
    {
      selected: false,
      selectable: true,
      label: "Page 3",
      route: "page-3",
    },
    {
      selected: false,
      selectable: true,
      label: "Section 4",
      subpages: [
        {
          selected: false,
          selectable: true,
          label: "Page 4a",
          route: "page-4a",
        },
        {
          selected: false,
          selectable: true,
          label: "Page 4b",
          route: "page-4b",
        },
      ],
    },
  ];

  onNavClick(navItem: NavItem) {
    if (navItem.route) {
      this.router.navigate([navItem.route]);
    }
  }
}

@Component({
  selector: "page-1",
  standalone: true,
  template: `<div>Page 1 content</div>`,
})
export class Page1Component {}

@Component({
  selector: "page-2",
  standalone: true,
  template: `<div>Page 2 content</div>`,
})
export class Page2Component {}

@Component({
  selector: "page-3",
  standalone: true,
  template: `<div>Page 3 content</div>`,
})
export class Page3Component {}

@Component({
  selector: "page-4a",
  standalone: true,
  template: `<div>Page 4a content</div>`,
})
export class Page4aComponent {}

@Component({
  selector: "page-4b",
  standalone: true,
  template: `<div>Page 4b content</div>`,
})
export class Page4bComponent {}
<div class="wrapper">
  <header>
    <dbs-nav-side-secondary
      [title]="'Page title'"
      [navItems]="mainNavItemList"
      (onNavClick)="onNavClick($event)"
    ></dbs-nav-side-secondary>
  </header>
  <main>
    <div class="router-outlet">
      <router-outlet />
    </div>
    <div class="links">
      <dbs-button routerLink="/page-1">Go to Page 1</dbs-button>
      <dbs-button routerLink="/page-2">Go to Page 2</dbs-button>
      <dbs-button routerLink="/page-3">Go to Page 3</dbs-button>
      <dbs-button routerLink="/page-4a">Go to Page 4a</dbs-button>
      <dbs-button routerLink="/page-4b">Go to Page 4b</dbs-button>
    </div>
  </main>
</div>
:host {
  position: relative;
  display: block;
  height: 100vh;
  max-height: 500px;
}

.wrapper {
  display: flex;
  position: absolute;
  inset: 0;
}

header {
  display: flex;
}

main {
  width: 100%;
  padding: 48px;
  background: var(--color-background-level-1);
  overflow-y: auto;
}

.router-outlet {
  padding: 24px 0;
}

.links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
Pre-opened Subpanel
Set isSubpagePanelOpen: true on the item you would like to pre-open.
<div style="display: flex; position: absolute; inset: 0;">
  <header style="display: flex;">
    <dbs-nav-side-secondary  [title]="'Page title'" [navItems]="[{'selected':false,'selectable':true,'label':'route page','route':'home'},{'selected':false,'selectable':false,'label':'href page','href':'#testpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-navigation item'},{'selected':false,'selectable':true,'label':'with <=5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'users'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'}]},{'selected':false,'selectable':true,'label':'with >5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'testsubpage5'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage6','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'test subpage 7','route':'testsubpage7'},{'selected':false,'selectable':true,'label':'test subpage 8','route':'testsubpage8'},{'selected':false,'selectable':true,'label':'test subpage 9','route':'testsubpage9'}],'isSubpagePanelOpen':true},{'selected':false,'selectable':true,'label':'test page 6'}]" ></dbs-nav-side-secondary>
  </header>
  <main style="width: 100%; padding: 48px; background: var(--color-background-level-1); overflow-y: auto;">
    <dbs-button>Interactive elements</dbs-button>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
  </main>
</div>
Collapse Sidebar On Click Outside
<div style="display: flex; position: absolute; inset: 0;">
  <header style="display: flex;">
    <dbs-nav-side-secondary  [title]="'Page title'" [navItems]="[{'selected':false,'selectable':true,'label':'route page','route':'home'},{'selected':false,'selectable':false,'label':'href page','href':'#testpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-navigation item'},{'selected':false,'selectable':true,'label':'with <=5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'users'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'}]},{'selected':false,'selectable':true,'label':'with >5 subpages','subpages':[{'selected':false,'selectable':true,'label':'route subpage','route':'testsubpage5'},{'selected':false,'selectable':false,'label':'href subpage','href':'#testsubpage6','target':'_blank'},{'selected':false,'selectable':false,'label':'non-nav item'},{'selected':false,'selectable':true,'label':'test subpage 7','route':'testsubpage7'},{'selected':false,'selectable':true,'label':'test subpage 8','route':'testsubpage8'},{'selected':false,'selectable':true,'label':'test subpage 9','route':'testsubpage9'}]},{'selected':false,'selectable':true,'label':'test page 6'}]" [collapseNavOnClickOutside]="true" ></dbs-nav-side-secondary>
  </header>
  <main style="width: 100%; padding: 48px; background: var(--color-background-level-1); overflow-y: auto;">
    <dbs-button>Interactive elements</dbs-button>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
  </main>
</div>
Collapse Button In Header
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsButtonComponent,
  DbsIconButtonComponent,
  DbsSvgIconComponent,
  DbsNavSideSecondaryComponent,
  NavItem,
  NavSubItem,
} from "@dbs-angular/core";

@Component({
  selector: "collapse-button-in-header-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsNavSideSecondaryComponent,
    DbsButtonComponent,
    DbsIconButtonComponent,
    DbsSvgIconComponent,
  ],
  templateUrl: `collapse-button-in-header-story.component.html`,
  styleUrl: `collapse-button-in-header-story.component.scss`,
})
export class DbsCollapseButtonInHeaderStoryComponent {
  subpages1: NavSubItem[] = [
    {
      selected: false,
      selectable: true,
      label: "route subpage",
      route: "users",
    },
    {
      selected: false,
      selectable: false,
      label: "href subpage",
      href: "#testsubpage",
      target: "_blank",
    },
    {
      selected: false,
      selectable: false,
      label: "non-nav item",
    },
  ];

  subpages2: NavSubItem[] = [
    {
      selected: false,
      selectable: true,
      label: "route subpage",
      route: "testsubpage5",
    },
    {
      selected: false,
      selectable: false,
      label: "href subpage",
      href: "#testsubpage6",
      target: "_blank",
    },
    {
      selected: false,
      selectable: false,
      label: "non-nav item",
    },
    {
      selected: false,
      selectable: true,
      label: "test subpage 7",
      route: "testsubpage7",
    },
    {
      selected: false,
      selectable: true,
      label: "test subpage 8",
      route: "testsubpage8",
    },
    {
      selected: false,
      selectable: true,
      label: "test subpage 9",
      route: "testsubpage9",
    },
  ];

  mainNavItemList: NavItem[] = [
    {
      selected: false,
      selectable: true,
      label: "route page",
      route: "home",
    },
    {
      selected: false,
      selectable: false,
      label: "href page",
      href: "#testpage",
      target: "_blank",
    },
    {
      selected: false,
      selectable: false,
      label: "non-navigation item",
    },
    {
      selected: false,
      selectable: true,
      label: "with <=5 subpages",
      subpages: this.subpages1,
    },
    {
      selected: false,
      selectable: true,
      label: "with >5 subpages",
      subpages: this.subpages2,
    },
    {
      selected: false,
      selectable: true,
      label: "test page 6",
    },
  ];

  opened: boolean = true;
}
<div class="wrapper">
  <header>
    <dbs-nav-side-secondary
      [navItems]="mainNavItemList"
      [(opened)]="opened"
      [showCollapse]="false"
    >
      <div headerSlot class="header-slot">
        <div class="title">Page title</div>
        <dbs-icon-button size="sm" (click)="opened = false">
          <svg-icon
            iconName="chevrons-left"
            fill="var(--nav-side-secondary-list-item-icon-fill)"
          ></svg-icon>
        </dbs-icon-button>
      </div>
    </dbs-nav-side-secondary>
  </header>
  <main>
    <dbs-button>Interactive elements</dbs-button>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
  </main>
</div>
:host {
  position: relative;
  display: block;
  height: 100vh;
  max-height: 500px;
}

.wrapper {
  display: flex;
  position: absolute;
  inset: 0;
}

header {
  display: flex;
}

.header-slot {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.title {
  font-family: var(--nav-side-secondary-heading-font-family);
  font-size: var(--nav-side-secondary-heading-font-size);
  font-weight: var(--nav-side-secondary-heading-font-weight);
  line-height: var(--nav-side-secondary-heading-leading);
  letter-spacing: var(--nav-side-secondary-heading-tracking);
  color: var(--nav-side-secondary-heading-color);
  flex-grow: 1;
}

main {
  width: 100%;
  padding: 48px;
  background: var(--color-background-level-1);
  overflow-y: auto;
}
Custom Elements Using Slots
Various slots can be used to pass in any necessary custom elements.
Template areas are also provided for inserting custom elements into the slots of each item and sub-item.
See the API Reference for the full list of slots and templates.
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsButtonComponent,
  DbsNavSideSecondaryComponent,
  NavItem,
  NavSubItem,
  DbsAvatarComponent,
  DbsSvgIconComponent,
} from "@dbs-angular/core";

@Component({
  selector: "custom-elements-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsNavSideSecondaryComponent,
    DbsButtonComponent,
    DbsAvatarComponent,
    DbsSvgIconComponent,
  ],
  templateUrl: `custom-elements-story.component.html`,
  styleUrl: `custom-elements-story.component.scss`,
})
export class DbsCustomElementsStoryComponent {
  subpages1: NavSubItem[] = [
    {
      selected: false,
      selectable: true,
      label: "route subpage",
      route: "users",
    },
    {
      selected: false,
      selectable: false,
      label: "href subpage",
      href: "#testsubpage",
      target: "_blank",
    },
    {
      selected: false,
      selectable: false,
      label: "non-nav item",
    },
  ];

  subpages2: NavSubItem[] = [
    {
      selected: false,
      selectable: true,
      label: "route subpage",
      route: "testsubpage5",
      meta: {
        status: "completed",
      },
    },
    {
      selected: false,
      selectable: false,
      label: "href subpage",
      href: "#testsubpage6",
      target: "_blank",
      meta: {
        status: "completed",
      },
    },
    {
      selected: false,
      selectable: false,
      label: "non-nav item",
      meta: {
        status: "error",
      },
    },
    {
      selected: false,
      selectable: true,
      label: "test subpage 7",
      route: "testsubpage7",
    },
    {
      selected: false,
      selectable: true,
      label: "test subpage 8",
      route: "testsubpage8",
    },
    {
      selected: false,
      selectable: true,
      label: "test subpage 9",
      route: "testsubpage9",
    },
  ];

  mainNavItemList: NavItem[] = [
    {
      selected: false,
      selectable: true,
      label: "route page",
      route: "home",
      meta: {
        status: "completed",
      },
    },
    {
      selected: false,
      selectable: false,
      label: "href page",
      href: "#testpage",
      target: "_blank",
      meta: {
        status: "completed",
      },
    },
    {
      selected: false,
      selectable: false,
      label: "non-navigation item",
    },
    {
      selected: false,
      selectable: true,
      label: "with <=5 subpages",
      subpages: this.subpages1,
    },
    {
      selected: false,
      selectable: true,
      label: "with >5 subpages",
      subpages: this.subpages2,
      meta: {
        status: "error",
      },
    },
    {
      selected: false,
      selectable: true,
      label: "test page 6",
    },
  ];

  opened: boolean = true;
}
<div class="wrapper">
  <header>
    <dbs-nav-side-secondary [navItems]="mainNavItemList" [(opened)]="opened">
      <!-- Button before header -->
      <dbs-button headerStartSlot size="xs" variant="plain">
        <svg-icon
          class="header-button-icon"
          iconName="chevron-left"
          fill="var(--color-icon-active)"
        ></svg-icon>
        Previous page
      </dbs-button>

      <!-- Custom header title -->
      <div headerSlot class="header-slot">
        <dbs-avatar name="A A" size="sm"></dbs-avatar>
        <div class="title">Page title</div>
      </div>

      <!-- Other custom slots -->
      <div *ngIf="opened" bodyStartSlot class="sample-content">
        bodyStartSlot example
      </div>
      <div *ngIf="opened" bodyEndSlot class="sample-content">
        bodyEndSlot example
      </div>
      <div *ngIf="opened" footerStartSlot class="sample-content">
        footerStartSlot example
      </div>
      <div *ngIf="opened" footerEndSlot class="sample-content">
        footerEndSlot example
      </div>

      <!-- Icon in endSlot of nav item -->
      <ng-template #navItemEndSlotTemplate let-item let-index="index">
        @if (item?.meta?.status === 'completed') {
          <svg-icon
            class="item-icon"
            iconName="check"
            fill="var(--color-icon-success)"
          ></svg-icon>
        }
        @if (item?.meta?.status === 'error') {
          <svg-icon
            class="item-icon"
            iconName="triangle-exclamation-filled"
            fill="var(--color-icon-danger)"
          ></svg-icon>
        }
      </ng-template>

      <!-- Icon in endSlot of nav sub-item -->
      <ng-template
        #navSubitemEndSlotTemplate
        let-subItem
        let-index="index"
        let-itemIndex="itemIndex"
      >
        @if (subItem?.meta?.status === 'completed') {
          <svg-icon
            class="item-icon"
            iconName="check"
            fill="var(--color-icon-success)"
          ></svg-icon>
        }
        @if (subItem?.meta?.status === 'error') {
          <svg-icon
            class="item-icon"
            iconName="triangle-exclamation-filled"
            fill="var(--color-icon-danger)"
          ></svg-icon>
        }
      </ng-template>
    </dbs-nav-side-secondary>
  </header>
  <main>
    <dbs-button>Interactive elements</dbs-button>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
    <h1>Main content area</h1>
  </main>
</div>
:host {
  position: relative;
  display: block;
  height: 100vh;
  max-height: 500px;
}

.wrapper {
  display: flex;
  position: absolute;
  inset: 0;
}

header {
  display: flex;
}

.header-slot {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.header-button-icon {
  width: var(--size-16);
  height: var(--size-16);
}

.title {
  font-family: var(--nav-side-secondary-heading-font-family);
  font-size: var(--nav-side-secondary-heading-font-size);
  font-weight: var(--nav-side-secondary-heading-font-weight);
  line-height: var(--nav-side-secondary-heading-leading);
  letter-spacing: var(--nav-side-secondary-heading-tracking);
  color: var(--nav-side-secondary-heading-color);
  flex-grow: 1;
}

main {
  width: 100%;
  padding: 48px;
  background: var(--color-background-level-1);
  overflow-y: auto;
}

.item-icon {
  width: var(--size-16);
  height: var(--size-16);
}
API Reference
<dbs-nav-side-secondary [title]="title" [navItems]="navItems" [navItemsFooter]="navItemsFooter"  ></dbs-nav-side-secondary>
Name	Description	Default	Control
Hide inputs itemsinputs	Hide inputs items		
title	Title to display in the header.string		
navItems	The array of NavItem objects for the main navigation.NavItem[]	[]	navItems :[
• 0 :{...} 4 keys			
• 1 :{...} 5 keys			
• 2 :{...} 3 keys			
• 3 :{...} 4 keys			
• 4 :{...} 4 keys			
• 5 :{...} 3 keys]			
navItemsFooter	The array of NavItem objects for the footer navigation.NavItem[]	[]	navItemsFooter :[
• 0 :{...} 4 keys]			
collapseNavOnClickOutside	Collapses the sidebar if a click is detected anywhere outside the nav.boolean	false	
opened	The opened state of the sidebar.boolean	true	
showCollapse	Allows the sidebar to expand/collapse by clicking on the expand/collapse button in the footer.boolean	true	
textObject	Changes the static text used in the component. Can be used for translations.NavSideSecondaryTextObject	{ collapse: 'Collapse view', }	
Hide outputs itemsoutputs	Hide outputs items		
openedChange	Event fired when opened Input is changed. Emits the value of opened.EventEmitter<boolean>	new EventEmitter<boolean>()	
onNavClick	Event fired when a nav item is clicked. Emits a NavItem object.EventEmitter<NavItem>	new EventEmitter<NavItem>()	
Hide slots itemsslots	Hide slots items		
headerStartSlot	Content at the start of the header, before the header title.HTMLElement	-	
headerSlot	Main content of the header. If provided, replaces the header title.HTMLElement	-	
headerEndSlot	Content at the end of the header, after the header title.HTMLElement	-	
bodyStartSlot	Content at the start of the body, before the main navigation.HTMLElement	-	
bodySlot	Main content of the body. If provided, replaces the main navigation.HTMLElement	-	
bodyEndSlot	Content at the end of the body, after the main navigation.HTMLElement	-	
footerStartSlot	Content at the start of the footer, before the footer navigation and collapse button.HTMLElement	-	
footerSlot	Main content of the footer. If provided, replaces the footer navigation and collapse button.HTMLElement	-	
footerEndSlot	Content at the end of the footer, after the footer navigation.HTMLElement	-	
Hide templates itemstemplates	Hide templates items		
navItemStartSlotTemplate	Template for inserting content at the start of the nav item.HTMLElement	-	
navItemEndSlotTemplate	Template for inserting content at the end of the nav item.HTMLElement	-	
navSubitemStartSlotTemplate	Template for inserting content at the start of the nav sub-item.HTMLElement	-	
navSubitemEndSlotTemplate	Template for inserting content at the end of the nav sub-item.HTMLElement	-	

```