# DBS Angular Part 15

# **Alert**

# Usage

Import `DbsAlertComponent` into your component or module.

`import { DbsAlertComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsAlertComponent],
})`

## **Stories**

### **Basic**

A basic alert has a title and opened to enable display.

```tsx
<dbs-alert  [opened]="true" [title]="'Too many failed attempts'" ></dbs-alert>
```

### **With Message**

Additional information can be added to the message content.

```tsx
<dbs-alert  [opened]="true" [title]="'Too many failed attempts'" >Please try again after 5 minutes.</dbs-alert>
```

### **With Actions Buttons**

Action buttons can also be added to the message content.

```tsx
<dbs-alert  [opened]="true" [title]="'Too many failed attempts'" >
  <p>Please try again after 5 minutes.</p>
  <div style="display:flex; align-items:center; gap:16px; margin-top:16px;">
    <dbs-button variant="secondary" size="sm">Wait patiently</dbs-button>
    <dbs-button variant="plain" size="xs">Exit</dbs-button>
  </div>
</dbs-alert>
```

### **Without Title**

The alert can be rendered without a title.

```tsx
<dbs-alert  [opened]="true" >
  <style>
    .dbs-alert_list-item,
    .dbs-alert_list-item a {
      color: var(--color-text-low);
      line-height: var(--typography-leading);
    }
  </style>
  <p>Please fix the following errors in your form:</p>
  <ul>
    <li class="dbs-alert_list-item"><a href="#" target="_self">SG mobile number have 8 digits</a></li>
    <li class="dbs-alert_list-item"><a href="#" target="_self">Must be a valid email</a></li>
    <li class="dbs-alert_list-item"><a href="#" target="_self">Remove special characters</a></li>
    <li class="dbs-alert_list-item"><a href="#" target="_self">Price cannot be more than 3 decimal points</a></li>
    <li class="dbs-alert_list-item"><a href="#" target="_self">The account number that you entered in incorrect</a></li>
  </ul>
</dbs-alert>
```

**Event Handling**

```tsx
import {
  Component,
  ElementRef,
  inject,
  viewChild,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsButtonComponent } from "../../../dbs-button/dbs-button.component";
import { DbsAlertComponent } from "../../dbs-alert.component";

@Component({
  selector: "event-handling-story",
  standalone: true,
  imports: [CommonModule, DbsAlertComponent, DbsButtonComponent],
  templateUrl: `event-handling-story.component.html`,
})
export class EventHandlingStoryComponent {
  alertRef = viewChild.required<DbsAlertComponent>("alertRef");

  opened = true;

  onCloseAlert() {
    this.alertRef().closeAlert();
  }

  onShowAlert() {
    this.opened = true;
  }

  events: { type: string; opened: boolean }[] = [];

  onOpenedChange($event: boolean) {
    this.opened = false;
    const newEvents = [
      {
        type: "openedChange",
        opened: $event,
      },
      ...this.events,
    ];
    this.events = newEvents;
    console.log($event);
  }
}
HTML
<div style="margin-bottom: 16px; display: flex; gap: 8px">
  <dbs-button (click)="onCloseAlert()">Fire closeAlert()</dbs-button>
  <dbs-button (click)="onShowAlert()">Show alert</dbs-button>
</div>
<dbs-alert
  #alertRef
  title="Too many failed attempts"
  [opened]="opened"
  (openedChange)="onOpenedChange($event)"
>
  Please try again after 5 minutes.
</dbs-alert>
<p><strong>Events fired:</strong></p>
<div
  style="
    background: var(--color-background-level-1);
    padding: 0 16px;
    max-width: 300px;
    height: 300px;
    overflow-y: scroll;
  "
>
  @for (event of events; track event) {
    <pre>
type: {{ event.type | json }}
opened: {{ event.opened | json }}
  </pre
    >
  }
</div>
```

**API Reference**

```tsx
<dbs-alert [opened]="opened" [title]="title"  ></dbs-alert>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **opened** | Sets whether the alert should be displayed.boolean | false | [x] |
| **title** | Title of the alert.string |  |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **viewAll** | *(deprecated - ODS) Message interaction should be controlled via elements passed into `<ng-content>` instead.*
Expanded state of the list of messsages."" | false |  |
| **actionType** | *(deprecated - IBGT) Refer to [Information Banner](https://angular.dev.apps.cs.sgp.dbs.com/?path=/docs/components-information-banner--docs) instead.*
No longer has any effect. In DLS 3.1, Alerts are non-dismissible and should only be removed when inline errors are fixed.
~~Sets which icon to use for the action button, if `showAction` is true.~~string"close""arrow" |  |  |
| **alertMessages** | *(deprecated - IBGT, ODS) Messages should go into `<ng-content>` instead.*
~~Sets the list of alert messages to display in the alert.~~string[] |  |  |
| **alertTitle** | *(deprecated - IBGT, ODS) Use `title` instead.*
Sets the title text for the alert.string |  |  |
| **alertType** | *(deprecated - IBGT, ODS) Refer to [Information Banner](https://angular.dev.apps.cs.sgp.dbs.com/?path=/docs/components-information-banner--docs) instead.*
No longer has any effect. In DLS 3.1, Alerts have only 1 type.
~~Determines the type/purpose for the alert~~string |  |  |
| **closable** | *(deprecated - IBGT, ODS) Refer to [Information Banner](https://angular.dev.apps.cs.sgp.dbs.com/?path=/docs/components-information-banner--docs) instead.*
No longer has any effect. In DLS 3.1, Alerts are non-dismissible and should only be removed when inline errors are fixed.
~~Determines whether the alert is dismissible or not.~~boolean | false |  |
| **iconType** | *(deprecated - IBGT) Refer to [Information Banner](https://angular.dev.apps.cs.sgp.dbs.com/?path=/docs/components-information-banner--docs) instead.*
No longer has any effect. In DLS 3.1, Alerts have only 1 type.
~~Sets the icon for the alert.~~string"alert""info" |  |  |
| **showAction** | *(deprecated - IBGT) Refer to [Information Banner](https://angular.dev.apps.cs.sgp.dbs.com/?path=/docs/components-information-banner--docs) instead.*
No longer has any effect. In DLS 3.1, Alerts are non-dismissible and should only be removed when inline errors are fixed.
~~Determines whether the action button is displayed or not.~~boolean | false |  |
| **size** | *(deprecated - IBGT, ODS) Simplified to use a single standard size.*
Size of the alert."sm""md" | md | smmd |
| **toggle** | *(deprecated - IBGT, ODS) Use `opened` instead.*
Sets whether the alert should be displayed.boolean | false |  |
| **clickMessage** | *(deprecated - ODS) Message interaction should be controlled via elements passed into `<ng-content>` instead.*
Event fired when one of the messages in `alertMessages` is clicked.EventEmitter |  |  |
| **toggleChange** | *(deprecated - IBGT, ODS) Use `openedChange` instead.*
Event fired when `toggle` has changed.EventEmitter |  |  |
| **onMessageClick** | *(deprecated - ODS) Message interaction should be controlled via elements passed into `<ng-content>` instead.*
Fired when one of the messages in `alertMessages` is clicked.(value: literal type) => void |  |  |
| **viewMore** | *(deprecated - ODS) Message interaction should be controlled via elements passed into `<ng-content>` instead.*
Expands the list of messages if it is truncated.() => void |  |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **openedChange** | Event fired when `opened` has changed.EventEmitter |  |  |
| **Hide methods itemsmethods** | Hide methods items |  |  |
| **closeAlert** | Removes the alert from display.() => void |  |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | The alert's message content.HTMLElement | - |  |