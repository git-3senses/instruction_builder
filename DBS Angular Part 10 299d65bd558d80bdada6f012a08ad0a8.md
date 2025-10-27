# DBS Angular Part 10

# **Snackbar**

# Usage

Import `DbsSnackbarComponent` into your component or module.

```css
import { DbsSnackbarComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsSnackbarComponent],
})
```

## **Stories**

### **Basic**

The visibility of the snackbar is controlled with `opened`.

It is also set to close automatically by default. Set `autoClose` to `false` to prevent this behaviour.

```css
<dbs-snackbar  [opened]="true" [autoClose]="false" >This is the content</dbs-snackbar>
```

### **Disable Close Button**

The close button is shown by default. Set `closeButton` to `false` to hide it.

```css
<dbs-snackbar  [autoClose]="false" [closeButton]="false" >This is the content</dbs-snackbar>
```

### **Auto-close**

Set `autoClose` to `true` to allow the snackbar to close automatically after 4000 milliseconds.

You may also set a `timer` value to change the time-to-close from 4000 milliseconds to a custom value.

```css
@if (!opened) {
  <dbs-button (click)="opened = true">Show snackbar</dbs-button>
}
<dbs-snackbar  [autoClose]="true" [timer]="1000" [opened]="opened" (openedChange)="opened = $event">This is the content</dbs-snackbar>
```

### **Status Icons**

There are four built-in status icons: `success`, `danger`, `warning`, and `info`.

```css
<div [style.display]="'flex'" [style.flex-direction]="'column'" [style.gap.px]="16">
  <dbs-snackbar  [autoClose]="false" [status]="'success'" >This is a success snackbar.</dbs-snackbar>  
  <dbs-snackbar  [autoClose]="false" [status]="'danger'" >This is a danger snackbar.</dbs-snackbar>  
  <dbs-snackbar  [autoClose]="false" [status]="'warning'" >This is a warning snackbar.</dbs-snackbar>  
  <dbs-snackbar  [autoClose]="false" [status]="'info'" >This is a info snackbar.</dbs-snackbar>  
</div>
```

### **Custom Icons**

You can also pass in a custom icon with `iconSlot`.

```css
<dbs-snackbar  [autoClose]="false" >This snackbar has a custom icon<svg iconSlot width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconStarFilled"><path d="M12 2.896l2.935 5.993 6.565.967-4.75 4.662 1.121 6.586L12 17.993l-5.871 3.111 1.121-6.586L2.5 9.856l6.564-.967L12 2.896z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.146a.75.75 0 01.674.42l2.76 5.639 6.175.909a.75.75 0 01.416 1.277l-4.47 4.388 1.055 6.2a.75.75 0 01-1.09.788L12 18.842l-5.52 2.925a.75.75 0 01-1.09-.789l1.055-6.2-4.47-4.387a.75.75 0 01.416-1.277l6.173-.91 2.762-5.638a.75.75 0 01.674-.42zm0 2.455L9.738 9.219a.75.75 0 01-.565.412l-5.07.747 3.672 3.605a.75.75 0 01.214.66l-.865 5.085 4.525-2.398a.75.75 0 01.702 0l4.525 2.398-.865-5.084a.75.75 0 01.214-.661l3.672-3.605-5.071-.747a.75.75 0 01-.565-.412L12 4.6z" fill="currentColor"></path></svg></dbs-snackbar>
```

### **With Action Buttons**

Action buttons can be added with `actionsSlot`. `sm` size buttons should be used for this case.

```css
<dbs-snackbar  [autoClose]="false" >This snackbar has an action button<dbs-button actionsSlot variant="primary" size="sm">Label</dbs-button></dbs-snackbar>
```

API Reference

```css
<dbs-snackbar [autoClose]="autoClose"  >This is the content<dbs-button actionsSlot variant="primary" size="sm">Label</dbs-button></dbs-snackbar>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **autoClose** | Automatically closes the snackbar after the timer duration.boolean | true | [ ] |
| **closeButton** | Show or hide the close button.boolean | true |  |
| **id** | ID for distinguishing between snackbars.string | "" |  |
| **maxWidth** | Custom max-width of the snackbar (a number in px). Defaults to `--snackbar-max-width`.numbernull |  |  |
| **opened** | Show or hide snackbar.boolean | true |  |
| **status** | Use one of the built-in status icons."success""danger""warning""info" |  | successdangerwarninginfo |
| **timer** | Time in milliseconds before snackbar closes automatically.number | 4000 |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | This is the snackbar contentHTMLElement | - |  |
| **actionsSlot** | Customise buttons in the snackbarHTMLElement | - |  |
| **iconSlot** | Customise the icon beside the snackbar contentHTMLElement | - |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **btnOption** | *(deprecated - ODS) Use `actionsSlot` instead.*literal type |  |  |
| **btnOptionArr** | *(deprecated - IBGT) Use `actionsSlot` instead.*
If populated it will overwrite autoDismiss and timerBtnOptionArr[] |  |  |
| **dismissable** | *(deprecated - ODS) Use `closeButton` instead.*boolean | false |  |
| **displayLogValues** | *(deprecated - IBGT) No longer in use.*
To display log of changed values for debugboolean | false |  |
| **message** | *(deprecated - IBGT, ODS) Place text in `<ng-content></ng-content>` slot instead.*
Snackbar textstring |  |  |
| **mobileStyle** | *(deprecated - IBGT) No longer needed to style.*boolean | false |  |
| **moveToDocument** | *(deprecated - IBGT) Use `DbsMoveToDocumentDirective` instead.*
Move dbs-snackbar's component's html to last child of document.bodyboolean | false |  |
| **showSnackBar** | *(deprecated - IBGT) Use `opened` instead.*
Show or hide snackbar.boolean | false |  |
| **clicked** | *(deprecated - ODS) Use `click` event on buttons passed into `actionsSlot` instead.*EventEmitter |  |  |
| **clickedBtnArr** | *(deprecated - IBGT)*
To be deprecated when we remove `btnOptionArr`EventEmitter |  |  |
| **closed** | *(deprecated - ODS) Use `openedChange` instead.*EventEmitter |  |  |
| **snackBarDismissed** | *(deprecated - IBGT) Use `openedChange` instead.*
Emits when snackbar is dismissed.EventEmitter |  |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **openedChange** | Emitted when `opened` changes.EventEmitter |  |  |

# **Snackbar Container**

# Usage

Import `DbsSnackbarContainerComponent` into your component or module.

```css
import { DbsSnackbarContainerComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsSnackbarContainerComponent],
})
```

## **Stories**

**Render with `snackbars` Array**

```css
<div style="height:420px;">
  <dbs-snackbar-container  [autoClose]="false" [snackbars]="[{'message':'This is a snackbar.'},{'message':'This is a success snackbar.','status':'success'},{'message':'This is a danger snackbar.','status':'danger'},{'message':'This is a warning snackbar.','status':'warning'},{'message':'This is a info snackbar.','status':'info'}]" ></dbs-snackbar-container>
</div>
```

**Render with `ng-content`**

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsSnackbarComponent,
  DbsSnackbarContainerComponent,
} from "../../../../public-api";

@Component({
  selector: "dbs-snackbar-using-ng-content-story",
  standalone: true,
  imports: [CommonModule, DbsSnackbarContainerComponent, DbsSnackbarComponent],
  templateUrl: `snackbar-using-ng-content-story.component.html`,
  styleUrl: `snackbar-using-ng-content-story.component.scss`,
})
export class DbsSnackbarUsingNgContentStoryComponent {}
```

```html
<dbs-snackbar-container>
  <dbs-snackbar [autoClose]="false">This is a snackbar.</dbs-snackbar>
  <dbs-snackbar [autoClose]="false" status="success">
    This is a success snackbar.
  </dbs-snackbar>
  <dbs-snackbar [autoClose]="false" status="danger">
    This is a danger snackbar.
  </dbs-snackbar>
  <dbs-snackbar [autoClose]="false" status="warning">
    This is a warning snackbar.
  </dbs-snackbar>
  <dbs-snackbar [autoClose]="false" status="info">
    This is a info snackbar.
  </dbs-snackbar>
</dbs-snackbar-container>
```

```css
:host {
  display: block;
  height: 420px;
}
```

**Custom Icons**

```css
<div [style.min-height.px]="280" [style.display]="'block'">
  <dbs-snackbar-container  [autoClose]="false" [snackbars]="[{'message':'This snackbar has a custom icon.','icon':{'name':'pulse'}},{'message':'This snackbar has a custom icon.','icon':{'name':'close'}},{'message':'This snackbar has a custom icon.','icon':{'name':'copy'}}]" ></dbs-snackbar-container>
</div>
```

### **Auto Close**

By default the snackbars passed into `<dbs-snackbar-container>` will auto close, if not stated.

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsButtonComponent,
  DbsSnackbarContainerComponent,
} from "../../../../public-api";
import { DbsSnackbarContainerComponentSnackbar } from "../../dbs-snackbar-container.model";

@Component({
  selector: "dbs-snackbar-auto-close-story",
  standalone: true,
  imports: [CommonModule, DbsButtonComponent, DbsSnackbarContainerComponent],
  templateUrl: `snackbar-auto-close-story.component.html`,
  styleUrl: `snackbar-auto-close-story.component.scss`,
})
export class DbsSnackbarAutoCloseStoryComponent {
  autoClose = true;
  timer = 3000;

  messagesTemplate: DbsSnackbarContainerComponentSnackbar[] = [
    {
      id: crypto.randomUUID(),
      message: "This snackbar will auto-close in 3000 milliseconds.",
    },
    {
      id: crypto.randomUUID(),
      message: "This snackbar will auto-close in 2000 milliseconds.",
      timer: 2000,
    },
    {
      id: crypto.randomUUID(),
      message: "This snackbar will auto-close in 1000 milliseconds.",
      timer: 1000,
    },
    {
      id: crypto.randomUUID(),
      message: "This snackbar will not auto-close.",
      autoClose: false,
    },
  ];

  messages: DbsSnackbarContainerComponentSnackbar[] = [];

  onShowMessagesClick() {
    this.messages = [...this.messagesTemplate];
  }
}
```

```html
<dbs-button (click)="onShowMessagesClick()">Show messages</dbs-button>
<dbs-snackbar-container
  [snackbars]="messages"
  [autoClose]="autoClose"
  [timer]="timer"
/>
```

```css
:host {
  display: block;
  height: 400px;
}
```

**Action Buttons**

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsButtonComponent,
  DbsSnackbarContainerComponent,
} from "../../../../public-api";
import { DbsSnackbarContainerComponentSnackbar } from "../../dbs-snackbar-container.model";

@Component({
  selector: "dbs-snackbar-action-button-story",
  standalone: true,
  imports: [CommonModule, DbsButtonComponent, DbsSnackbarContainerComponent],
  templateUrl: `snackbar-action-button-story.component.html`,
  styleUrl: `snackbar-action-button-story.component.scss`,
})
export class DbsSnackbarActionButtonStoryComponent {
  messages: DbsSnackbarContainerComponentSnackbar[] = [
    {
      id: crypto.randomUUID(),
      message: "This snackbar has an action button.",
      actions: [
        {
          text: "Accept",
          onClick: function (): any {
            console.log("Clicked");
            return;
          },
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      message: "This snackbar has two action buttons.",
      actions: [
        {
          text: "Contact",
        },
        {
          text: "Learn more",
          variant: "plain",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      message: "This snackbar has a loading button.",
      actions: [
        {
          text: "Loading",
          loading: true,
        },
      ],
    },
  ];
}

HTML
<dbs-snackbar-container [autoClose]="false" [snackbars]="messages" />

CSS :host {
  display: block;
  height: 280px;
}
```

**Move To Document Demo**

```tsx
<dbs-button (click)="snackbars = [{ id: '1', message: 'This is a move to document demo', status: 'success' }]">Show snackbar</dbs-button>
<p>Snackbar is declared here, but its render is moved to the HTML body</p>
<dbs-snackbar-container  [autoClose]="false" [moveToDocument] [snackbars]="snackbars"></dbs-snackbar-container>
```

**API Reference**

```tsx
<div style="height:420px;">
  <dbs-snackbar-container [autoClose]="autoClose" [snackbars]="snackbars"  ></dbs-snackbar-container>
</div>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **autoClose** | Sets the default `autoClose` value for each snackbar. Automatically dismisses each snackbar after the timer duration.boolean | true | [ ] |
| **snackbars** | The array of snackbars to be rendered. Each object in the array may contain a `autoClose` or `timer` value that overrides the default value set for this snackbar container.DbsSnackbarContainerComponentSnackbar[] | [] | snackbars :[
• 0 :{...} 2 keys
• 1 :{...} 3 keys
• 2 :{...} 3 keys
• 3 :{...} 3 keys
• 4 :{...} 3 keys] |
| **closeButton** | Sets the default `closeButton` value for each snackbar. Show or hide the close button.boolean | true |  |
| **maxWidth** | Custom max-width of the snackbar (a number in px). Defaults to `--snackbar-max-width`.numbernull |  |  |
| **timer** | Sets the default `timer` value for each snackbar. How long each snackbar stays on the screen before it is removed (if `autoClose` is enabled).number | 4000 |  |
| **Hide properties itemsproperties** | Hide properties items |  |  |
| **lastAttachedElement** | HTMLElementEventTarget |  |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **openedChange** | Emitted when one of the snackbars' `opened` property changes.EventEmitter |  |  |
| **snackbarsChange** | EventEmitter |  |  |
| **Hide methods itemsmethods** | Hide methods items |  |  |
| **destroyPreviousSnackbarContainer** | (parent: HTMLElement | EventTarget, snackbarContainerElement: HTMLDivElement) => void |  |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | ng-content to pass in customised dbs-snackbarHTMLElement | - |  |

# **Chip**

# Usage

Import `DbsChipComponent` into your component or module.

```tsx
import { DbsChipComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsChipComponent],
})
```

## **Stories**

### **Basic**

The basic chip requires a `label`.

```tsx
<div style="background-color: #fff; padding: 40px 30px; margin: -40px -30px;"><dbs-chip  [label]="'basic chip'" ></dbs-chip></div>
```

### **Dismissible**

The dismiss button can be enabled with `[dismiss]="true"`. Clicking on the dismiss button emits `onDismiss`.

```tsx
<div style="background-color: #fff; padding: 40px 30px; margin: -40px -30px;"><dbs-chip  [label]="'dismissible chip'" [dismissible]="true" ></dbs-chip></div>
```

### **With Icon**

An icon can be added to the chip via the `startSlot`.

```tsx
<div style="background-color: #fff; padding: 40px 30px; margin: -40px -30px;"><dbs-chip  [label]="'chip with icon'" ><svg-icon startSlot iconName="user" fill="var('--color-icon-active')" style="width: 16px; height: 16px;"></svg-icon></dbs-chip></div>
```

**API Reference**

```tsx
<div style="background-color: #fff; padding: 40px 30px; margin: -40px -30px;"><dbs-chip [label]="label"  ></dbs-chip></div>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **label** | The chip's label text.string |  |  |
| **dismissible** | Displays the dismiss button.boolean | false |  |
| **value** | The chip's unique value.T |  |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **onDismiss** | Emitted when the dismiss button is clicked.EventEmitter |  |  |

# **Chip List**

# Usage

Import `DbsChipListComponent` into your component or module.

```tsx
import { DbsChipListComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsChipListComponent],
})
```

## **Stories**

### **Basic**

The Chip List takes in a `values` input of type `Chip[]`, where each `Chip` requires at least a `label` and `value`.

```tsx
<div style="background-color: #fff; padding: 24px;"><dbs-chip-list  [values]="[{'value':'chip1','label':'Chip 1'},{'value':'chip2','label':'Chip 2'},{'value':'chip3','label':'Chip 3'}]" ></dbs-chip-list></div>
```

### **Two-way Binding of Values**

`values` is a model that can be two-way binded.

```tsx
<div style="background-color: #fff; padding: 24px;">
  <dbs-chip-list  [dismissible]="true" [(values)]="values"></dbs-chip-list>
  <pre>{{ values | json }}</pre>
</div>
```

### **Dismissible**

`dismissible` shows/hides the dismiss button for each chip in the list. This can be overridden by the `dismissible` property value of each chip defined in `values`.

```tsx
<div style="background-color: #fff; padding: 24px;"><dbs-chip-list  [values]="[{'value':'chip1','label':'Chip 1'},{'value':'chip2','label':'Chip 2'},{'value':'chip3','label':'Chip 3','dismissible':true}]" [dismissible]="false" ></dbs-chip-list></div>
```

### **Integration With Input**

The Chip List can be integrated with Input to populate a list of custom values.

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  Chip,
  DbsChipListComponent,
  DbsInputComponent,
} from "@dbs-angular/core";

@Component({
  selector: "integration-input-story",
  standalone: true,
  imports: [CommonModule, DbsChipListComponent, DbsInputComponent],
  templateUrl: `integration-input-story.component.html`,
})
export class IntegrationInputStoryComponent {
  values: Chip[] = [{ value: "chip1", label: "Example chip 1" }];
  inputValue: string;
}

HTML
<dbs-input
  [(value)]="inputValue"
  (keydown.enter)="values.push({ value: inputValue, label: inputValue })"
  (keyup.enter)="inputValue = ''"
></dbs-input>
<dbs-chip-list
  [(values)]="values"
  [dismissible]="true"
  style="margin-top: 8px"
></dbs-chip-list>
```

### **Integration With Select**

The Chip List can be integrated with Select to display selected multi-select values.

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  Chip,
  DbsChipListComponent,
  DbsSelectComponent,
} from "@dbs-angular/core";

@Component({
  selector: "integration-select-story",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DbsChipListComponent,
    DbsSelectComponent,
  ],
  templateUrl: `integration-select-story.component.html`,
})
export class IntegrationSelectStoryComponent {
  selectValues = [
    { value: "1", label: "Select value 1" },
    { value: "2", label: "Select value 2" },
    { value: "3", label: "Select value 3" },
    { value: "4", label: "Select value 4" },
  ];
  values: Chip[] = [this.selectValues[0], this.selectValues[1]];
}
HTML
<dbs-select
  [ngModel]="values"
  [values]="selectValues"
  [multipleSelect]="true"
  [showItemCount]="true"
  [placeholder]="'Select values to add to chip list'"
  (onSelect)="values = $event"
></dbs-select>
<dbs-chip-list
  [(values)]="values"
  [dismissible]="true"
  style="margin-top: 8px"
></dbs-chip-list>
```

### **Custom Chip Template**

`<ng-template #chipTemplate let-chip>` will allow custom templates to be passed in for each individual `<dbs-chip>`.

```tsx
<div style="background-color: #fff; padding: 24px;"><dbs-chip-list  [values]="[{'value':'chip1','label':'Chip 1','icon':'check','dismissible':true},{'value':'chip2','label':'Chip 2','icon':'arrow-up-right'}]" >
<ng-template #chipTemplate let-chip>
  <svg-icon
    startSlot
    fill="var(--color-success)"
    [iconName]="chip.icon"
    [ngStyle]="{ width: '16px', height: '16px' }"
  ></svg-icon>
  <div labelSlot style="color: var(--color-success)">
    {{ chip.label}}
  </div>
</ng-template></dbs-chip-list></div>
```

**API Reference**

```tsx
<div style="background-color: #fff; padding: 24px;"><dbs-chip-list [values]="values"  ></dbs-chip-list></div>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **values** | The list of chips to be displayed.Chip<T>[] | [] | values :[
• 0 :{...} 2 keys
• 1 :{...} 2 keys] |
| **dismissible** | Shows/hides the dismiss button for each chip in the list. Can be overridden by the `dismissible` property value of each chip defined in `values`.boolean | false |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **onChipDismiss** | Emitted when the dismiss button on a chip is clicked. Emits the object of the chip that was dismissed.EventEmitter<T> |  |  |
| **valuesChange** | Emitted when `values` changes. Emits the resulting `values` after change.EventEmitter<Chip<T>[]> | - |  |
| **Hide content child itemscontent child** | Hide content child items |  |  |
| **chipTemplateRef** | Use `#chipTemplate` to send in custom templates for the chips.
Example: `<ng-template #chipTemplate let-chip>`TemplateRef<any> | null |  |  |