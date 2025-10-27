# DBS Angular Part 3

## Checkbox

### Usage

Import `DbsCheckboxComponent` into your component or module.

```html
import { DbsCheckboxComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsCheckboxComponent],
})
```

### Stories

Basic

```html
<dbs-checkbox  [label]="'Basic checkbox'" ></dbs-checkbox>
```

With Field Label

```html
<dbs-field-label>Field label</dbs-field-label>
<dbs-checkbox  [label]="'Basic checkbox'" ></dbs-checkbox>
```

With Description

```html
<dbs-checkbox  [label]="'Checkbox with description'" [description]="'This is the description'" ></dbs-checkbox>
```

Sizes

```html
<div style="display:flex; flex-direction:column; gap:24px;">
  <div>
    <dbs-field-label size="md">md field label</dbs-field-label>
    <dbs-checkbox  [description]="'This is the description'" [size]="'md'" [label]="'md size'" ></dbs-checkbox>
  </div>
  <div>
    <dbs-field-label size="sm">sm field label</dbs-field-label>
    <dbs-checkbox  [description]="'This is the description'" [size]="'sm'" [label]="'sm size'" ></dbs-checkbox>
  </div>
</div>
```

Checked

```html
<dbs-checkbox  [label]="'Checkbox checked'" [checked]="true" ></dbs-checkbox>
```

Indeterminate

```html
<pre>checkbox.indeterminate: {{ checkbox.indeterminate }}</pre>
<pre>checkbox.checked: {{ checkbox.checked }}</pre>
<dbs-checkbox  [label]="'Checkbox indeterminate'" [indeterminate]="true" #checkbox></dbs-checkbox>
```

Disabled

```html
<div style="display:flex; flex-direction:column; gap:24px;">
  <dbs-checkbox  [disabled]="true" [checked]="false" [label]="'Unchecked disabled'" ></dbs-checkbox>
  <dbs-checkbox  [disabled]="true" [checked]="true" [label]="'Checked disabled'" ></dbs-checkbox>
  <dbs-checkbox  [disabled]="true" [indeterminate]="true" [label]="'Indeterminate disabled'" ></dbs-checkbox>
</div>
```

Read-Only

`<input type="checkbox">` does not have a native `readonly` attribute, but `<dbs-checkbox>` implements this as a `readonly` Input to prevent edits.

```html
<div style="display:flex; flex-direction:column; gap:24px;">
  <dbs-checkbox  [readonly]="true" [checked]="false" [label]="'Unchecked readonly'" ></dbs-checkbox>
  <dbs-checkbox  [readonly]="true" [checked]="true" [label]="'Checked readonly'" ></dbs-checkbox>
  <dbs-checkbox  [readonly]="true" [indeterminate]="true" [label]="'Indeterminate readonly'" ></dbs-checkbox>
</div>
```

Validation Statuses

```html
<div style="display:flex; gap:24px;">
  <div style="display:flex; flex-direction:column; gap:24px;">
    <dbs-checkbox  [status]="'default'" [checked]="false" [label]="'Unchecked default'" ></dbs-checkbox>
    <dbs-checkbox  [status]="'default'" [checked]="true" [label]="'Checked default'" ></dbs-checkbox>
    <dbs-checkbox  [status]="'default'" [indeterminate]="true" [label]="'Indeterminate default'" ></dbs-checkbox>
    <dbs-checkbox  [status]="'default'" [disabled]="true" [checked]="false" [label]="'Disabled unchecked default'" ></dbs-checkbox>
    <dbs-checkbox  [status]="'default'" [disabled]="true" [checked]="true" [label]="'Disabled checked default'" ></dbs-checkbox>
    <dbs-checkbox  [status]="'default'" [disabled]="true" [indeterminate]="true" [label]="'Disabled indeterminate default'" ></dbs-checkbox>
    <dbs-checkbox  [status]="'default'" [readonly]="true" [checked]="true" [label]="'Readonly default'" ></dbs-checkbox>
  </div>
  <div style="display:flex; flex-direction:column; gap:24px;">
    <dbs-checkbox  [status]="'error'" [checked]="false" [label]="'Unchecked error'" ></dbs-checkbox>
    <dbs-checkbox  [status]="'error'" [checked]="true" [label]="'Checked error'" ></dbs-checkbox>
    <dbs-checkbox  [status]="'error'" [indeterminate]="true" [label]="'Indeterminate error'" ></dbs-checkbox>
    <dbs-checkbox  [status]="'error'" [disabled]="true" [checked]="false" [label]="'Disabled unchecked error'" ></dbs-checkbox>
    <dbs-checkbox  [status]="'error'" [disabled]="true" [checked]="true" [label]="'Disabled checked error'" ></dbs-checkbox>
    <dbs-checkbox  [status]="'error'" [disabled]="true" [indeterminate]="true" [label]="'Disabled indeterminate error'" ></dbs-checkbox>
  </div>
</div>
```

Event Handling

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsCheckboxComponent } from "../../dbs-checkbox.component";
import { DbsCustomEventValue } from "../../../types";

@Component({
  selector: "checkbox-event-handling-story",
  standalone: true,
  imports: [CommonModule, DbsCheckboxComponent],
  templateUrl: `checkbox-event-handling-story.component.html`,
})
export class CheckboxEventHandlingStoryComponent {
  events: DbsCustomEventValue<DbsCheckboxComponent>[] = [];
  onEvent(event: DbsCustomEventValue<DbsCheckboxComponent>) {
    this.events.unshift(event);
    console.log(event);
  }
}
```

```tsx
<dbs-checkbox
  label="Interact with me"
  value="checkboxValue"
  (onBlur)="onEvent($event)"
  (onChange)="onEvent($event)"
  (onFocus)="onEvent($event)"
  (onInput)="onEvent($event)"
></dbs-checkbox>
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
checked: {{ event.instance?.checked | json }}
    </pre>
  }
</div>
```

**Reactive Form Control With Validators**

```tsx
<dbs-checkbox [formControl]="validatorsFC" label="This box must be checked" />
<p>Checked: {{ validatorsFC.value }}</p>
<p>Touched: {{ validatorsFC.touched }}</p>
<p>Dirty: {{ validatorsFC.dirty }}</p>
<p>Valid: {{ validatorsFC.valid }}</p>
```

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { DbsCheckboxComponent } from "../../dbs-checkbox.component";
import type { DbsCustomEventValue } from "../../../types";

@Component({
  selector: "form-control-validators-story",
  standalone: true,
  imports: [CommonModule, DbsCheckboxComponent, ReactiveFormsModule],
  templateUrl: `form-control-validators-story.component.html`,
})
export class FormControlValidatorsStoryComponent {
  validatorsFC = new FormControl(true, Validators.requiredTrue);
}
```

Reactive Form Group

```tsx
**import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { DbsCheckboxComponent } from "../../dbs-checkbox.component";
import type { DbsCustomEventValue } from "../../../types";

@Component({
  selector: "form-group-story",
  standalone: true,
  imports: [CommonModule, DbsCheckboxComponent, ReactiveFormsModule],
  templateUrl: `form-group-story.component.html`,
})
export class FormGroupStoryComponent {
  burger: FormGroup = new FormGroup({
    tomato: new FormControl(false),
    cheese: new FormControl(false),
    lettuce: new FormControl(false),
    krabbyPatty: new FormControl(false),
    secretFormula: new FormControl(false),
  });

  onCheckboxChange($event: DbsCustomEventValue<DbsCheckboxComponent>) {
    const value = ($event.event!.target as HTMLInputElement).value;
    const isChecked = ($event.event!.target as HTMLInputElement).checked;
    this.burger.controls[value].setValue(isChecked);
  }
}**
```

```html
<form
  [formGroup]="burger"
  style="display: flex; flex-direction: column; gap: 16px"
>
  <dbs-checkbox
    formControlName="tomato"
    label="Tomato"
    value="tomato"
    (onChange)="onCheckboxChange($event)"
  />
  <dbs-checkbox
    formControlName="cheese"
    label="Cheese"
    value="cheese"
    (onChange)="onCheckboxChange($event)"
  />
  <dbs-checkbox
    formControlName="lettuce"
    label="Lettuce"
    value="lettuce"
    (onChange)="onCheckboxChange($event)"
  />
  <dbs-checkbox
    formControlName="krabbyPatty"
    label="Krabby Patty"
    value="krabbyPatty"
    (onChange)="onCheckboxChange($event)"
  />
  <dbs-checkbox
    formControlName="secretFormula"
    label="Secret Formula"
    value="secretFormula"
    (onChange)="onCheckboxChange($event)"
  />
</form>
<p>
  Ingredients:
  @for (ingredient of burger.value | keyvalue; track ingredient.key) {
    @if (ingredient.value) {
      {{ ingredient.key }}
    }
  }
</p>
<p>Touched: {{ burger.touched }}</p>
<p>Dirty: {{ burger.dirty }}</p>
<p>Valid: {{ burger.valid }}</p>
```

**Reactive Form Array**

```tsx
import { ChangeDetectorRef, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormArray, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { DbsCheckboxComponent } from "../../dbs-checkbox.component";
import { DbsButtonComponent } from "../../../dbs-button/dbs-button.component";
import type { DbsCustomEventValue } from "../../../types";

interface Burger {
  tomato: boolean;
  cheese: boolean;
  lettuce: boolean;
  krabbyPatty: boolean;
  secretFormula: boolean;
}

@Component({
  selector: "form-array-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsButtonComponent,
    DbsCheckboxComponent,
    ReactiveFormsModule,
  ],
  templateUrl: `form-array-story.component.html`,
})
export class FormArrayStoryComponent {
  changeDetector = inject(ChangeDetectorRef);
  formBuilder = inject(FormBuilder);

  defaultBurger = {
    tomato: false,
    cheese: false,
    lettuce: false,
    krabbyPatty: false,
    secretFormula: false,
  };

  orders = this.formBuilder.group({
    burgers: this.formBuilder.array([
      this.formBuilder.group(this.defaultBurger),
    ]),
  });

  onCheckboxChange(
    index: number,
    $event: DbsCustomEventValue<DbsCheckboxComponent>,
  ) {
    const value = ($event.event!.target as HTMLInputElement).value;
    const isChecked = ($event.event!.target as HTMLInputElement).checked;
    const burger: any = {
      ...this.orders.controls.burgers.controls[index].value,
    };
    burger[value] = isChecked;
    this.orders.controls.burgers.controls[index].setValue(burger as Burger);
  }

  get burgers() {
    return this.orders.get("burgers") as FormArray;
  }

  addBurger() {
    const burger = this.formBuilder.group(this.defaultBurger);
    this.burgers.push(burger);
    this.changeDetector.detectChanges();
  }
}
```

```html
<form [formGroup]="orders">
  <div
    formArrayName="burgers"
    style="display: flex; flex-direction: column; gap: 24px"
  >
    @for (burger of burgers.controls; track $index) {
      <div
        [formGroupName]="$index"
        style="display: flex; flex-direction: column; gap: 16px"
      >
        <dbs-checkbox
          formControlName="tomato"
          label="Tomato"
          value="tomato"
          (onChange)="onCheckboxChange($index, $event)"
        />
        <dbs-checkbox
          formControlName="cheese"
          label="Cheese"
          value="cheese"
          (onChange)="onCheckboxChange($index, $event)"
        />
        <dbs-checkbox
          formControlName="lettuce"
          label="Lettuce"
          value="lettuce"
          (onChange)="onCheckboxChange($index, $event)"
        />
        <dbs-checkbox
          formControlName="krabbyPatty"
          label="Krabby Patty"
          value="krabbyPatty"
          (onChange)="onCheckboxChange($index, $event)"
        />
        <dbs-checkbox
          formControlName="secretFormula"
          label="Secret Formula"
          value="secretFormula"
          (onChange)="onCheckboxChange($index, $event)"
        />
        <hr
          style="
            width: 100%;
            height: 1px;
            background-color: var(--color-neutral-110);
            border: none;
          "
        />
      </div>
    }
    <dbs-button (click)="addBurger()">+ Add another order</dbs-button>
  </div>
</form>
<p>Orders:</p>
<ul>
  @for (burger of burgers.value; track burger) {
    <li>
      @for (ingredient of burger | keyvalue; track ingredient.key) {
        @if (ingredient.value) {
          {{ ingredient.key }}
        }
      }
    </li>
  }
</ul>
<p>Touched: {{ orders.touched }}</p>
<p>Dirty: {{ orders.dirty }}</p>
<p>Valid: {{ orders.valid }}</p>
```

**Indeterminate Checkbox Directive**

The `indeterminateCheckbox` directive can be attached to a checkbox along with the FormGroup that it controls. This allows the checkbox to control other checkboxes within the FormGroup as well as determine its `indeterminate` state based on the checked state of its children.

See [Checkbox Indeterminate Directive](https://angular.dev.apps.cs.sgp.dbs.com/iframe.html?path=/docs/components-checkbox-checkbox-indeterminate-directive--docs) for more details

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import {
  DbsCheckboxComponent,
  DbsIndeterminateDirective,
} from "../../../../public-api";

@Component({
  selector: "indeterminate-directive-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsCheckboxComponent,
    ReactiveFormsModule,
    DbsIndeterminateDirective,
  ],
  templateUrl: `indeterminate-directive-story.component.html`,
})
export class IndeterminateDirectiveStoryComponent {
  checkboxChecked = false;
  indeterminateDemoFormGroup = new FormGroup({
    indeterminateDemo1: new FormControl(false),
    indeterminateDemo2: new FormControl(true),
  });
}
```

```html
<dbs-checkbox
  indeterminateCheckbox
  [attachedFormGroup]="indeterminateDemoFormGroup"
  [(checkboxChecked)]="checkboxChecked"
  [label]="'Indeterminate Directive Attached'"
></dbs-checkbox>

<div
  style="
    margin: 16px 0 0 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  "
>
  <dbs-checkbox
    [formControl]="indeterminateDemoFormGroup.controls.indeterminateDemo1"
    [label]="'Child 1'"
    value="aaa"
  ></dbs-checkbox>
  <dbs-checkbox
    [formControl]="indeterminateDemoFormGroup.controls.indeterminateDemo2"
    [label]="'Child 2'"
    value="bbb"
  ></dbs-checkbox>
</div>
```

Slots

`<ng-content>` slot is available for custom content

- you may attach the `#elementRef.checkboxId` to a `label`'s `for` attribute if required
- the class `.dbs-checkbox--center` at the `:host` or parent elements will center align the checkbox for taller custom content

```html
  <div class="dbs-checkbox--center">
    <dbs-checkbox #checkbox>
      
  <!-- Slot start -->
  <style>
    .custom-container__label {
      display: flex;
      width: 100%;
    }
    .custom-container__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .custom-container--left {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .account{
      font-weight: var(--font-weight-medium);
      color: var(--color-text-strong);
    }
    .account-number{
      font-size: var(--text-small-font-size);
      color: var(--color-text-subtle);
    }
  </style>
  <label for='{{checkbox.checkboxId}}' class="custom-container__label">
    <div class="custom-container__content">
      <div class="custom-container--left">
        <dbs-avatar [variant]="'logo'">
          <img src="./favicon.svg" />
        </dbs-avatar>
        <div class="custom-container-text">
          <div class="account">
            My Account
          </div>
          <div class="account-number">
            7383682-293-1
          </div>
        </div>
      </div>

      <dbs-currency-pair
        [size]="'md'"
        [currency]="'sgd'"
        [amount]="'10000'"
      >
      </dbs-currency-pair>
    </div>
  </label>
  <!-- Slot end -->

    </dbs-checkbox>
  </div>
```

API Reference

```html
<dbs-checkbox [label]="label"  ></dbs-checkbox>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **label** | The label for this checkbox.string | "" |  |
| **checkboxId** | The id for this checkbox.string |  |  |
| **checked** | Marks the checkbox as checked/selected.boolean | false |  |
| **description** | Additional content after the input. Used for help text or validation messages.string | "" |  |
| **disabled** | Prevents the input from being edited or focused.boolean | false |  |
| **indeterminate** | Sets the checkbox to the indeterminate state. This is a state in which it's impossible to say whether the item is toggled on or off.boolean | false |  |
| **readonly** | Prevents any changes to the input. This does not translate to a native `readonly` attribute in `<input>`.boolean | false |  |
| **size** | Determines the text sizes of the checkbox label"md""sm" | md | mdsm |
| **status** | Validation status of the checkbox."default""error" | default | defaulterror |
| **value** | The value for this checkbox.string | "" |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **error** | *(deprecated - ODS) Use `status="error"` instead.*boolean | false |  |
| **idVal** | *(deprecated - ODS) Use `checkboxId` instead.*string |  |  |
| **checkedEvent** | *(deprecated - ODS) Use `onChange` instead.*EventEmitter |  |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **onBlur** | Emitted when focus is removed from the checkbox.EventEmitter |  |  |
| **onChange** | Emitted when the checkbox value has changed.EventEmitter |  |  |
| **onFocus** | Emitted when focus is added to the checkbox.EventEmitter |  |  |
| **onInput** | Emitted for each alteration to the checkbox value.EventEmitter |  |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | `<ng-content>` slot replacing the checkbox label with custom content.HTMLElement | - |  |
| **labelStartSlot** | Content that goes before the label.HTMLElement | - |  |
| **labelEndSlot** | Content that goes after the label.HTMLElement | - |  |

Checkbox Group

### Usage

Import `DbsCheckboxGroupComponent` into your component or module.

```jsx
import { DbsCheckboxGroupComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsCheckboxGroupComponent],
})
```

## Stories

### Basic

```jsx
<dbs-checkbox-group  [options]="[{'label':'Option 1','value':'1'},{'label':'Option 2','value':'2'}]" [value]="['2']" ></dbs-checkbox-group>
```

**With Field Label**

```jsx
<dbs-field-label>Field label</dbs-field-label>
<dbs-checkbox-group  [options]="[{'label':'Option 1','value':'1'},{'label':'Option 2','value':'2'}]" [value]="['2']" ></dbs-checkbox-group>
```

**With Option Description**

```jsx
<dbs-checkbox-group  [options]="[{'label':'Option 1 with description','value':'1','description':'This is the description for option 1'},{'label':'Option 2','value':'2'}]" [value]="['2']" ></dbs-checkbox-group>
```

Size

```jsx
<div style="display:flex; flex-direction:column; gap:24px;">
  <div>
    <dbs-field-label size="md">md size</dbs-field-label>
    <dbs-checkbox-group  [options]="[{'label':'Option 1','value':'1'},{'label':'Option 2','value':'2'}]" [value]="['2']" [size]="'md'" ></dbs-checkbox-group>
  </div>
  <div>
    <dbs-field-label size="sm">sm size</dbs-field-label>
    <dbs-checkbox-group  [options]="[{'label':'Option 1','value':'1'},{'label':'Option 2','value':'2'}]" [value]="['2']" [size]="'sm'" ></dbs-checkbox-group>
  </div>
</div>
```

Indeterminate

```jsx
<dbs-checkbox-group  [options]="[{'label':'Option 1','value':'1'},{'label':'Option 2','value':'2'},{'label':'Option 3','value':'3'}]" [indeterminate]="['1']" ></dbs-checkbox-group>
```

Disabled

```jsx
<dbs-checkbox-group  [options]="[{'label':'Disabled option 1','value':'1'},{'label':'Disabled option 2','value':'2'},{'label':'Disabled option 3','value':'3'}]" [value]="['2']" [indeterminate]="['3']" [disabled]="true" ></dbs-checkbox-group>
```

Group Validation Statuses

```jsx
<div style="display:flex; flex-direction:column; gap:24px;">
  <div>
    <dbs-field-label>default status</dbs-field-label>
    <dbs-checkbox-group  [options]="[{'label':'Option 1','value':'1'},{'label':'Option 2','value':'2'},{'label':'Option 3','value':'3'}]" [value]="['2']" [indeterminate]="['3']" [status]="'default'" ></dbs-checkbox-group>
  </div>
  <div>
    <dbs-field-label>error status</dbs-field-label>
    <dbs-checkbox-group  [options]="[{'label':'Option 1','value':'1'},{'label':'Option 2','value':'2'},{'label':'Option 3','value':'3'}]" [value]="['2']" [indeterminate]="['3']" [status]="'error'" ></dbs-checkbox-group>
  </div>
</div>
```

Individual Option Control

```jsx
<dbs-checkbox-group  [options]="[{'label':'Option 1','value':'1'},{'label':'Disabled option 2','value':'2','disabled':true},{'label':'Error option 3','value':'3','status':'error'}]" [value]="['1']" ></dbs-checkbox-group>
```

Nested Options

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsCheckboxGroupComponent } from "../../dbs-checkbox-group.component";
import { DbsCustomEventValue } from "../../../../types";

@Component({
  selector: "checkbox-group-nested-options-story",
  standalone: true,
  imports: [CommonModule, DbsCheckboxGroupComponent],
  templateUrl: `checkbox-group-nested-options-story.component.html`,
})
export class CheckboxGroupNestedOptionsStoryComponent {
  value = ["A-L0-2"];

  options = [
    {
      label: "A side - Level 0",
      options: [
        { label: "Option 1", value: "A-L0-1" },
        { label: "Option 2", value: "A-L0-2" },
        {
          label: "Level 1",
          options: [
            { label: "Option 1", value: "A-L1-1" },
            { label: "Option 2", value: "A-L1-2" },
            {
              label: "Level 2",
              options: [
                { label: "Option 1", value: "A-L2-1" },
                { label: "Option 2", value: "A-L2-2" },
                {
                  label: "Level 3",
                  options: [
                    { label: "Option 1", value: "A-L3-1" },
                    { label: "Option 2", value: "A-L3-2" },
                    { label: "Option 3", value: "A-L3-3" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "B side - Level 0",
      options: [
        { label: "Option 1", value: "B-L0-1" },
        { label: "Option 2", value: "B-L0-2" },
        {
          label: "Level 1",
          options: [
            { label: "Option 1", value: "B-L1-1" },
            {
              label: "Level 2",
              options: [
                { label: "Option 1", value: "B-L2-1" },
                { label: "Option 2", value: "B-L2-2" },
                {
                  label: "Level 3",
                  options: [
                    { label: "Option 1", value: "B-L3-1" },
                    { label: "Option 2", value: "B-L3-2" },
                    { label: "Option 3", value: "B-L3-3" },
                  ],
                },
              ],
            },
            { label: "Option 2", value: "B-L1-2" },
            { label: "Option 3", value: "B-L1-3" },
          ],
        },
      ],
    },
  ];

  events: any[] = [];

  onEvent($event: DbsCustomEventValue<DbsCheckboxGroupComponent>) {
    this.events.unshift({
      type: $event.type,
      value: $event.instance?.value,
    });
    this.value = $event.instance!.value;
    // console.log(this.value)
  }
}
```

```html
<dbs-checkbox-group
  [options]="options"
  [value]="value"
  (onBlur)="onEvent($event)"
  (onChange)="onEvent($event)"
  (onFocus)="onEvent($event)"
  (onInput)="onEvent($event)"
></dbs-checkbox-group>
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
value: {{ event.value | json }}
    </pre>
  }
</div>
```

Event Handling

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsCheckboxGroupComponent } from "../../dbs-checkbox-group.component";
import { DbsCustomEventValue } from "../../../../types";

@Component({
  selector: "checkbox-group-event-handling-story",
  standalone: true,
  imports: [CommonModule, DbsCheckboxGroupComponent],
  templateUrl: `checkbox-group-event-handling-story.component.html`,
})
export class CheckboxGroupEventHandlingStoryComponent {
  value = ["option-2"];

  options = [
    { label: "Option 1", value: "option-1" },
    { label: "Option 2", value: "option-2" },
    { label: "Option 3", value: "option-3" },
    { label: "Option 4", value: "option-4" },
  ];

  events: any[] = [];

  onEvent($event: DbsCustomEventValue<DbsCheckboxGroupComponent>) {
    this.events.unshift({
      type: $event.type,
      value: $event.instance?.value,
    });
    this.value = $event.instance!.value;
  }
}
```

```html
<dbs-checkbox-group
  [options]="options"
  [value]="value"
  (onBlur)="onEvent($event)"
  (onChange)="onEvent($event)"
  (onFocus)="onEvent($event)"
  (onInput)="onEvent($event)"
></dbs-checkbox-group>
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
value: {{ event.value | json }}
    </pre>
  }
</div>
```

Reactive Form Control

```html
<dbs-checkbox-group
  [formControl]="burger"
  [options]="[
    { label: 'Tomato', value: 'tomato' },
    { label: 'Cheese', value: 'cheese' },
    { label: 'Lettuce', value: 'lettuce' },
    { label: 'Krabby Patty', value: 'krabbyPatty' },
    { label: 'Secret Formula', value: 'secretFormula' }
  ]"
></dbs-checkbox-group>
<p>Ingredients: {{ burger.value }}</p>
<p>Touched: {{ burger.touched }}</p>
<p>Dirty: {{ burger.dirty }}</p>
<p>Valid: {{ burger.valid }}</p>
```

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DbsCheckboxGroupComponent } from "../../dbs-checkbox-group.component";

@Component({
  selector: "form-control-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsCheckboxGroupComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: `form-control-story.component.html`,
})
export class FormControlStoryComponent {
  burger = new FormControl(["tomato", "lettuce", "krabbyPatty"]);
}
```

Reactive Form Group With Validators

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
import { DbsCheckboxGroupComponent } from "../../dbs-checkbox-group.component";
import { DbsButtonComponent } from "@dbs-angular/core";

@Component({
  selector: "form-group-validators-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsCheckboxGroupComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: `form-group-validators-story.component.html`,
})
export class FormGroupValidatorsStoryComponent {
  burger = new FormGroup({
    ingredients: new FormControl(
      ["tomato", "lettuce", "krabbyPatty"],
      minimumCheckedValidator(3),
    ),
    sauces: new FormControl(
      ["barbequeue", "mayonnaise"],
      minimumCheckedValidator(2),
    ),
  });

  ngOnInit() {
    this.burger.controls["ingredients"].valueChanges.subscribe((value) =>
      console.log(value),
    );
  }
}

function minimumCheckedValidator(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    return value.length < min ? { min: { min, actual: value.length } } : null;
  };
}
```

```html
<form
  [formGroup]="burger"
  style="display: flex; gap: 80px; margin-bottom: 48px"
>
  <div>
    <p
      style="
        font-size: var(--typography-font-size-xs);
        color: var(--color-neutral-110);
        margin-bottom: 24px;
      "
    >
      Ingredients (minimum 3)
    </p>
    <dbs-checkbox-group
      formControlName="ingredients"
      [options]="[
        { label: 'Tomato', value: 'tomato' },
        { label: 'Cheese', value: 'cheese' },
        { label: 'Lettuce', value: 'lettuce' },
        { label: 'Krabby Patty', value: 'krabbyPatty' },
        { label: 'Secret Formula', value: 'secretFormula' }
      ]"
    />
  </div>
  <div>
    <p
      style="
        font-size: var(--typography-font-size-xs);
        color: var(--color-neutral-110);
        margin-bottom: 24px;
      "
    >
      Sauces (minimum 2)
    </p>
    <dbs-checkbox-group
      formControlName="sauces"
      [options]="[
        { label: 'Barbequeue', value: 'barbequeue' },
        { label: 'Mayonnaise', value: 'mayonnaise' },
        { label: 'Mustard', value: 'mustard' },
        { label: 'Tomato', value: 'tomato' },
        { label: 'Pesto', value: 'pesto' }
      ]"
    />
  </div>
</form>
<p>Ingredients: {{ burger.value.ingredients }}</p>
<p>Sauces: {{ burger.value.sauces }}</p>
<p>Touched: {{ burger.touched }}</p>
<p>Dirty: {{ burger.dirty }}</p>
<p>Valid: {{ burger.valid }}</p>
```

**Reactive Form Group With Validators On Submit**

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
import { DbsCheckboxGroupComponent } from "../../dbs-checkbox-group.component";
import { DbsButtonComponent } from "@dbs-angular/core";

@Component({
  selector: "form-group-validators-submit-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsCheckboxGroupComponent,
    DbsButtonComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: `form-group-validators-submit-story.component.html`,
})
export class FormGroupValidatorsSubmitStoryComponent {
  burger = new FormGroup(
    {
      ingredients: new FormControl([], minimumCheckedValidator(3)),
      sauces: new FormControl(
        ["barbequeue", "mayonnaise"],
        minimumCheckedValidator(2),
      ),
    },
    { updateOn: "submit" },
  );

  ngOnInit() {
    this.burger.controls["ingredients"].valueChanges.subscribe((value) =>
      console.log(value),
    );
  }
}

function minimumCheckedValidator(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    return value.length < min ? { min: { min, actual: value.length } } : null;
  };
}
```

```tsx
<form
  [formGroup]="burger"
  style="display: flex; gap: 80px; margin-bottom: 48px"
>
  <div>
    <p
      style="
        font-size: var(--typography-font-size-xs);
        color: var(--color-neutral-110);
        margin-bottom: 24px;
      "
    >
      Ingredients (minimum 3)
    </p>
    <dbs-checkbox-group
      formControlName="ingredients"
      [options]="[
        { label: 'Tomato', value: 'tomato' },
        { label: 'Cheese', value: 'cheese' },
        { label: 'Lettuce', value: 'lettuce' },
        { label: 'Krabby Patty', value: 'krabbyPatty' },
        { label: 'Secret Formula', value: 'secretFormula' }
      ]"
    />
  </div>
  <div>
    <p
      style="
        font-size: var(--typography-font-size-xs);
        color: var(--color-neutral-110);
        margin-bottom: 24px;
      "
    >
      Sauces (minimum 2)
    </p>
    <dbs-checkbox-group
      formControlName="sauces"
      [options]="[
        { label: 'Barbequeue', value: 'barbequeue' },
        { label: 'Mayonnaise', value: 'mayonnaise' },
        { label: 'Mustard', value: 'mustard' },
        { label: 'Tomato', value: 'tomato' },
        { label: 'Pesto', value: 'pesto' }
      ]"
    />
  </div>

  <dbs-button type="submit">Submit</dbs-button>
</form>
<p>Ingredients: {{ burger.value.ingredients }}</p>
<p>Sauces: {{ burger.value.sauces }}</p>
<p>Touched: {{ burger.touched }}</p>
<p>Dirty: {{ burger.dirty }}</p>
<p>Valid: {{ burger.valid }}</p>
```

Reactive Form Array

```tsx
import { ChangeDetectorRef, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormArray,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { DbsCheckboxGroupComponent } from "../../dbs-checkbox-group.component";
import { DbsButtonComponent } from "../../../../dbs-button/dbs-button.component";

@Component({
  selector: "form-array-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsButtonComponent,
    DbsCheckboxGroupComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: `form-array-story.component.html`,
})
export class FormArrayStoryComponent {
  changeDetector = inject(ChangeDetectorRef);
  formBuilder = inject(FormBuilder);

  orders = this.formBuilder.group({
    burgers: this.formBuilder.array([
      this.formBuilder.group({
        ingredients: this.formBuilder.control([
          "tomato",
          "lettuce",
          "krabbyPatty",
        ]),
      }),
    ]),
  });

  get burgers() {
    return this.orders.get("burgers") as FormArray;
  }

  addBurger() {
    const burger = this.formBuilder.group({
      ingredients: this.formBuilder.control([]),
    });
    this.burgers.push(burger);
    this.changeDetector.detectChanges();
  }
}
```

```html
<form [formGroup]="orders">
  <div
    formArrayName="burgers"
    style="display: flex; flex-direction: column; gap: 24px"
  >
    @for (burger of burgers.controls; track $index) {
      <div
        [formGroupName]="$index"
        style="display: flex; flex-direction: column; gap: 16px"
      >
        <dbs-checkbox-group
          formControlName="ingredients"
          [options]="[
            { label: 'Tomato', value: 'tomato' },
            { label: 'Cheese', value: 'cheese' },
            { label: 'Lettuce', value: 'lettuce' },
            { label: 'Krabby Patty', value: 'krabbyPatty' },
            { label: 'Secret Formula', value: 'secretFormula' }
          ]"
        ></dbs-checkbox-group>
        <hr
          style="
            width: 100%;
            height: 1px;
            background-color: var(--color-neutral-110);
            border: none;
          "
        />
      </div>
    }
    <dbs-button (click)="addBurger()">+ Add another order</dbs-button>
  </div>
</form>
<p>Orders:</p>
<ul>
  @for (burger of burgers.value; track burger) {
    <li>{{ burger.ingredients }}</li>
  }
</ul>
<p>Touched: {{ orders.touched }}</p>
<p>Dirty: {{ orders.dirty }}</p>
<p>Valid: {{ orders.valid }}</p>
```

API Reference

```html
<dbs-checkbox-group [options]="options" [value]="value"  ></dbs-checkbox-group>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **options** | The array of options in the checkbox group.({ status?: "default" | "error"; label: string; description?: string; value: string; disabled?: boolean; })[] |  | options :[
• 0 :{...} 2 keys
• 1 :{...} 2 keys] |
| **value** | The array of `value` of the *selected* options.{} |  | value :[
• 0 : "2"] |
| **disabled** | Prevents all the inputs from being edited or focused.boolean | false |  |
| **indeterminate** | The array of `value` of the *indeterminate* options.{} |  |  |
| **size** | Determines the text sizes and gaps of the checkbox label"md""sm" | md | mdsm |
| **status** | Validation status of the entire checkbox group."default""error" | default | defaulterror |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **onBlur** | Emitted when focus is removed from an option.EventEmitter |  |  |
| **onChange** | Emitted when the value has changed.EventEmitter |  |  |
| **onFocus** | Emitted when focus is added to an option.EventEmitter |  |  |
| **onInput** | Emitted for each alteration to each checkbox's value.EventEmitter |  |  |

## Checkbox: Indeterminate Directive

The `DbsIndeterminateDirective` can be attached to `dbs-checkbox` to enable checking of the selection of its `FormControl` values.

- If all `FormControls` are `false` it will show its unchecked state
- If `FormControls` have both `true` and `false` it will show its indeterminate state
- If all `FormControls` are `true` it will show its checked state

`FormControl` values will set the `checkboxChecked` on load, you may set `checkboxChecked` after.

### Usage

Import `DbsIndeterminateDirective` into your component or module.

```html
import { DbsIndeterminateDirective } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsIndeterminateDirective],
})
```

### API Reference

```html
<dbs-button (click)='checkboxChecked = !checkboxChecked' style="margin-bottom:16px;">
  Flip checkboxChecked to {{!checkboxChecked}}
</dbs-button>

<dbs-checkbox
  indeterminateCheckbox
  [checkboxChecked]="checkboxChecked"
  [attachedFormGroup]="indeterminateDemoFormGroup"
  [label]="'Indeterminate Directive Attached'"
  (checkboxCheckedChange)='checkboxCheckedChange($event)'
></dbs-checkbox>
<div style="margin: 16px 0 0 24px; display:flex; flex-direction: column; gap:16px;">
  <dbs-checkbox 
    [formControl]='indeterminateDemoFormGroup.controls.indeterminateDemo1'
    [label]="'Child 1'"
    value = aaa
  ></dbs-checkbox>
  <dbs-checkbox
    [formControl]='indeterminateDemoFormGroup.controls.indeterminateDemo2'
    [label]="'Child 2'"
    value = bbb
  ></dbs-checkbox>
</div>

<div style="margin-top:24px;">
  <p>Formgroup value:{{indeterminateDemoFormGroup.value | json}}</p>
  <p>indeterminateDemo1.value:{{indeterminateDemoFormGroup.controls.indeterminateDemo1.value}}</p>
  <p>indeterminateDemo2.value:{{indeterminateDemoFormGroup.controls.indeterminateDemo2.value}}</p>
</div>

```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide Inputs itemsInputs** | Hide Inputs items |  |  |
| **attachedFormGroup** | The `FormGroup` that contains all the `FormControl<boolean>` you wish to trigger the indeterminate state for.FormGroup | - | - |
| **checkboxChecked** | The checked state of the `indeterminateCheckbox`-attached `dbs-checkbox`. Can be two-way binded.boolean | - |  |
| **Hide Outputs itemsOutputs** | Hide Outputs items |  |  |
| **checkboxCheckedChange** | Emits only when `checkboxChecked` is directly manipulated.boolean | - | - |