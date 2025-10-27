# DBS Angular Part 4

## Radio Chicklet

### Usage

Import `DbsRadioChicletComponent` into your component or module.

```html
import { DbsRadioChicletComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsRadioChicletComponent],
})
```

### Stories

Basic

```html
<dbs-radio-chiclet  [label]="'Radio chiclet label'" [value]="'Radio chiclet value'" ></dbs-radio-chiclet>
```

Checked

```html
<dbs-radio-chiclet  [label]="'Radio chiclet checked'" [value]="'Radio chiclet value'" [checked]="true" ></dbs-radio-chiclet>
```

Disabled

```html
<div style="display:flex; flex-direction:column; gap:24px;">
  <dbs-radio-chiclet [value]="value" [disabled]="disabled" [checked]="true" [label]="'Checked disabled'">
    <svg-icon radioChicletIconSlot [iconName]="'lock'"></svg-icon><dbs-tag radioChicletTagSlot [status]="'default'" [variant]="'service'" [textColor]="'--color-text-product-alt'" [borderColor]="'--color-text-product-alt'">dbs-remit</dbs-tag>
  </dbs-radio-chiclet>
  <dbs-radio-chiclet [value]="value" [disabled]="disabled" [checked]="false" [label]="'Unchecked disabled'">
    <svg-icon radioChicletIconSlot [iconName]="'lock'"></svg-icon><dbs-tag radioChicletTagSlot [status]="'default'" [variant]="'service'" [textColor]="'--color-text-product-alt'" [borderColor]="'--color-text-product-alt'">dbs-remit</dbs-tag>
  </dbs-radio-chiclet>
</div>
```

Checked Change Output

`(checkedChange)` emits the `value` from the radio-chiclet that is selected

```html
<div style="display:flex; flex-direction:column; gap:24px;">
<dbs-radio-chiclet
  name='checkedChangeOutputStory'
  [label]="'Option 1 Label'"
  [value]="'Option 1 Value'"
  [formControl]='formControl'
  (checkedChange)="checkedChange($event)"
></dbs-radio-chiclet>
<dbs-radio-chiclet
  name='checkedChangeOutputStory'
  [label]="'Option 2 Label'"
  [value]="'Option 2 Value'"
  [formControl]='formControl'
  (checkedChange)="checkedChange($event)"
></dbs-radio-chiclet>
</div>
```

Validation Statuses

```html
<div style="display:flex; gap:24px;">
  <div style="display:flex; flex-direction:column; gap:24px;">
    <dbs-radio-chiclet  [status]="'default'" [checked]="false" [label]="'Unchecked default'" ></dbs-radio-chiclet>
    <dbs-radio-chiclet  [status]="'default'" [checked]="true" [label]="'Checked default'" ></dbs-radio-chiclet>
    <dbs-radio-chiclet  [status]="'default'" [disabled]="true" [checked]="false" [label]="'Disabled unchecked default'" ></dbs-radio-chiclet>
    <dbs-radio-chiclet  [status]="'default'" [disabled]="true" [checked]="true" [label]="'Disabled checked default'" ></dbs-radio-chiclet>
  </div>
  <div style="display:flex; flex-direction:column; gap:24px;">
    <dbs-radio-chiclet  [status]="'error'" [checked]="false" [label]="'Unchecked error'" ></dbs-radio-chiclet>
    <dbs-radio-chiclet  [status]="'error'" [checked]="true" [label]="'Checked error'" ></dbs-radio-chiclet>
    <dbs-radio-chiclet  [status]="'error'" [disabled]="true" [checked]="false" [label]="'Disabled unchecked error'" ></dbs-radio-chiclet>
    <dbs-radio-chiclet  [status]="'error'" [disabled]="true" [checked]="true" [label]="'Disabled checked error'" ></dbs-radio-chiclet>
  </div>
</div>
```

Disable With Form Control

```tsx
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DbsRadioChicletComponent } from "../../dbs-radio-chiclet.component";
import { SvgIconModule } from "../../../dbs-svg-icon/dbs-svg-icon.module";
import { DbsTagComponent } from "../../../dbs-tag/dbs-tag.component";

@Component({
  selector: "disabled-form-control-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsRadioChicletComponent,
    DbsTagComponent,
    SvgIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: `disabled-form-control-story.component.html`,
})
export class DisabledFormControlStoryComponent implements OnInit {
  options = [
    {
      label: "Disabled option 1",
      description: "Option 1 description",
      value: "Option 1",
      id: this.generateId(),
    },
    {
      label: "Disabled option 2",
      description: "Option 2 description",
      value: "Option 2",
      id: this.generateId(),
    },
    {
      label: "Disabled option 3",
      description: "Option 3 description",
      value: "Option 3",
      id: this.generateId(),
    },
  ];

  formControl = new FormControl(this.options[0].value);

  generateId() {
    return Math.random().toString(36).substring(2, 9);
  }

  ngOnInit() {
    this.formControl.disable();
  }
}
```

```html
<div
  style="margin-bottom: 24px; display: flex; flex-direction: column; gap: 24px"
>
  <dbs-radio-chiclet
    name="disabledFormControlStory"
    [label]="options[0].label"
    [value]="options[0].value"
    [id]="options[0].id"
    [formControl]="formControl"
  >
    <svg-icon radioChicletIconSlot [iconName]="'lock'"></svg-icon>
    <dbs-tag
      radioChicletTagSlot
      [status]="'default'"
      [variant]="'service'"
      [textColor]="'--color-text-product-alt'"
      [borderColor]="'--color-text-product-alt'"
    >
      dbs-remit
    </dbs-tag>
    <hr style="margin: 0" />
    <div style="padding: 12px">This is a customisable section</div>
  </dbs-radio-chiclet>

  <dbs-radio-chiclet
    name="disabledFormControlStory"
    [label]="options[1].label"
    [value]="options[1].value"
    [id]="options[1].id"
    [formControl]="formControl"
  >
    <svg-icon radioChicletIconSlot [iconName]="'lock'"></svg-icon>
    <dbs-tag
      radioChicletTagSlot
      [status]="'default'"
      [variant]="'service'"
      [textColor]="'--color-text-product-alt'"
      [borderColor]="'--color-text-product-alt'"
    >
      dbs-remit
    </dbs-tag>
    <hr style="margin: 0" />
    <div style="padding: 12px">This is a customisable section</div>
  </dbs-radio-chiclet>

  <dbs-radio-chiclet
    name="disabledFormControlStory"
    [label]="options[2].label"
    [value]="options[2].value"
    [id]="options[2].id"
    [status]="'error'"
    [formControl]="formControl"
  ></dbs-radio-chiclet>
</div>

<p>Checked: {{ formControl.value }}</p>
<p>Touched: {{ formControl.touched }}</p>
<p>Dirty: {{ formControl.dirty }}</p>
<p>Valid: {{ formControl.valid }}</p>
```

Reactive Form Group

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { DbsRadioChicletComponent } from "../../dbs-radio-chiclet.component";
import { SvgIconModule } from "../../../dbs-svg-icon/dbs-svg-icon.module";
import { DbsTagComponent } from "../../../dbs-tag/dbs-tag.component";

@Component({
  selector: "form-group-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsRadioChicletComponent,
    DbsTagComponent,
    SvgIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: `form-group-story.component.html`,
})
export class FormGroupStoryComponent {
  options = [
    {
      label: "Option 1",
      description: "Option 1 description",
      value: "Option 1 value",
      id: this.generateId(),
    },
    {
      label: "Option 2",
      description: "Option 2 description",
      value: "Option 2 value",
      id: this.generateId(),
    },
    {
      label: "Option 3",
      description: "Option 3 description",
      value: "Option 3 value",
      id: this.generateId(),
    },
  ];

  formGroup = new FormGroup({
    formControlDemo: new FormControl(this.options[0].value),
  });

  generateId() {
    return Math.random().toString(36).substring(2, 9);
  }

  onChange($event: string) {
    this.formGroup.controls.formControlDemo.setValue($event);
    console.log(this.formGroup.value);
  }
}
```

```html
<div
  style="margin-bottom: 24px; display: flex; flex-direction: column; gap: 24px"
>
  <dbs-radio-chiclet
    name="formGroupStory"
    [label]="options[0].label"
    [value]="options[0].value"
    [id]="options[0].id"
    [formControl]="$any(formGroup.get('formControlDemo'))"
    (checkedChange)="onChange($event)"
  >
    <svg-icon radioChicletIconSlot [iconName]="'lock'"></svg-icon>
    <dbs-tag
      radioChicletTagSlot
      [status]="'default'"
      [variant]="'service'"
      [textColor]="'--color-text-product-alt'"
      [borderColor]="'--color-text-product-alt'"
    >
      dbs-remit
    </dbs-tag>
    <hr style="margin: 0" />
    <div style="padding: 12px">This is a customisable section</div>
  </dbs-radio-chiclet>

  <dbs-radio-chiclet
    name="formGroupStory"
    [label]="options[1].label"
    [value]="options[1].value"
    [id]="options[1].id"
    [formControl]="$any(formGroup.get('formControlDemo'))"
    (checkedChange)="onChange($event)"
  >
    <svg-icon radioChicletIconSlot [iconName]="'lock'"></svg-icon>
    <dbs-tag
      radioChicletTagSlot
      [status]="'default'"
      [variant]="'service'"
      [textColor]="'--color-text-product-alt'"
      [borderColor]="'--color-text-product-alt'"
    >
      dbs-remit
    </dbs-tag>
    <hr style="margin: 0" />
    <div style="padding: 12px">This is a customisable section</div>
  </dbs-radio-chiclet>

  <dbs-radio-chiclet
    name="formGroupStory"
    [label]="options[2].label"
    [value]="options[2].value"
    [id]="options[2].id"
    [status]="'error'"
    [formControl]="$any(formGroup.get('formControlDemo'))"
    (checkedChange)="onChange($event)"
  ></dbs-radio-chiclet>
</div>

<p>Checked: {{ formGroup.controls.formControlDemo.value }}</p>
<p>Touched: {{ formGroup.touched }}</p>
<p>Dirty: {{ formGroup.dirty }}</p>
<p>Valid: {{ formGroup.valid }}</p>
```

API References

```html
<dbs-radio-chiclet [label]="label" [value]="value"  ></dbs-radio-chiclet>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **label** | Content of chiclet.string | "" |  |
| **value** | Value of chiclet. Used to identify which chiclet in a group is selected.string | "" |  |
| **checked** | Marks the chiclet as selected (green outline shown).boolean | false |  |
| **disabled** | Prevents the chiclet from being edited or focused.boolean | false |  |
| **id** | ID of the radio button. If not provided, random string will be given.string | Math.random().toString(36).substring(2, 9) |  |
| **name** | Name of chiclet.string | "" |  |
| **status** | Validation status of the radio button."default""error" | default | defaulterror |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **control** | *(deprecated - IBGT) Please change control to formControl. Control no longer has any impact.*
FormControl for the chiclet.UntypedFormControl | new UntypedFormControl() |  |
| **elevationClass** | *(deprecated - IBGT) No longer has any effect.*string |  |  |
| **error** | *(deprecated - IBGT) Use `status="error"` instead.*
Show error state of chicletboolean | false |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **checkedChange** | Emitted when `checked` state has changed.EventEmitter |  |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | Fully customisable contentHTMLElement | - |  |
| **radioChicletIconSlot** | Add content before the label. Replaces `radio-chiclet-icon`HTMLElement | - |  |
| **radioChicletTagSlot** | Add content after the label. Replaces `radio-chiclet-tag`HTMLElement | - |  |

## Radio Group

### Usage

Import `DbsRadioGroupComponent` into your component or module.

```tsx
import { DbsRadioGroupComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsRadioGroupComponent],
})
```

### Stories

Basic

```tsx
<dbs-radio-group
  [options]="options"
  [formControl]="formControl"
></dbs-radio-group>

<p>Checked: {{ formControl.value }}</p>
<p>Touched: {{ formControl.touched }}</p>
<p>Dirty: {{ formControl.dirty }}</p>
<p>Valid: {{ formControl.valid }}</p>

```

Boolean

```tsx
<dbs-radio-group
  [options]="[
    { label: 'true', value: true, id: 'booleanDemoTrue' },
    { label: 'false', value: false, id: 'booleanDemoFalse' },
    { label: 'Option 3', value: '3', id: 'booleanDemo3' },
  ]"
  [formControl]="formControl"
></dbs-radio-group>

<p>Checked: {{ formControl.value }}</p>
<p>Touched: {{ formControl.touched }}</p>
<p>Dirty: {{ formControl.dirty }}</p>
<p>Valid: {{ formControl.valid }}</p>

```

With Field Label

```tsx
<dbs-field-label>Field label</dbs-field-label>
<dbs-radio-group  [options]="[{'label':'Option 1','value':'1','id':'m53201u'},{'label':'Option 2','value':'2','id':'h675uac'},{'label':'Option 3','value':'3','id':'7vnrt4c'}]" [value]="'2'" ></dbs-radio-group>
```

With Option Description

```tsx
<dbs-radio-group  [options]="[{'label':'Option 1 with description','value':'1','id':'8n99vg9','description':'This is the description for option 1'},{'label':'Option 2','value':'2','id':'67wxxo4'},{'label':'Option 3','value':'3','id':'pympwqr'}]" [value]="'2'" ></dbs-radio-group>
```

Size

```tsx
<div style="display:flex; flex-direction:column; gap:24px;">
  <div>
    <dbs-field-label size="md">md size</dbs-field-label>
    <dbs-radio-group  [options]="[{'label':'Option 1','value':'1','id':'luolmwa'},{'label':'Option 2','value':'2','id':'noshzsn'},{'label':'Option 3','value':'3','id':'9lo3rnn'}]" [value]="'2'" [size]="'md'" ></dbs-radio-group>
  </div>
  <div>
    <dbs-field-label size="sm">sm size</dbs-field-label>
    <dbs-radio-group  [options]="[{'label':'Option 1','value':'1','id':'sy71mt2'},{'label':'Option 2','value':'2','id':'rqlty92'},{'label':'Option 3','value':'3','id':'36xsms4'}]" [value]="'2'" [size]="'sm'" ></dbs-radio-group>
  </div>
</div>
```

Disabled

```tsx
<dbs-radio-group  [options]="[{'label':'Disabled option 1','value':'1','id':'h3zkjmr'},{'label':'Disabled option 2','value':'2','id':'hi7mfyy'},{'label':'Disabled option 3','value':'3','id':'edwh3yk'}]" [value]="'2'" [disabled]="true" ></dbs-radio-group>
```

Group Validation Statuses

```tsx
<div style="display:flex; flex-direction:column; gap:24px;">
  <div>
    <dbs-field-label>default status</dbs-field-label>
    <dbs-radio-group  [options]="[{'label':'Option 1','value':'1','id':'fl076oe'},{'label':'Option 2','value':'2','id':'m06e4k5'},{'label':'Option 3','value':'3','id':'9yth1b3'}]" [value]="'2'" [status]="'default'" ></dbs-radio-group>
  </div>
  <div>
    <dbs-field-label>error status</dbs-field-label>
    <dbs-radio-group  [options]="[{'label':'Option 1','value':'1','id':'yma7yoq'},{'label':'Option 2','value':'2','id':'q2purb2'},{'label':'Option 3','value':'3','id':'dqmw9d6'}]" [value]="'2'" [status]="'error'" ></dbs-radio-group>
  </div>
</div>
```

Value Change Output

```tsx
<div style="display:flex; flex-direction:column; gap:24px;">
<dbs-radio-group
  [options]="[{'label':'Option 1','value':'1','id':'6ph9aml'},{'label':'Disabled option 2','value':'2','disabled':true,'id':'981q6w5'},{'label':'Error option 3','value':'3','status':'error','id':'mztuf6p'}]"
  [value]="'1'"
  (valueChange)='valueChange($event)'
></dbs-radio-group>
</div>
```

Individual Option Control

```tsx
<dbs-radio-group  [options]="[{'label':'Option 1','value':'1','id':'w8uugga'},{'label':'Disabled option 2','value':'2','disabled':true,'id':'6b06r9i'},{'label':'Error option 3','value':'3','status':'error','id':'h74eusn'}]" [value]="'1'" ></dbs-radio-group>
```

Reactive Form Control

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DbsRadioGroupComponent } from "../../dbs-radio-group.component";
import { DbsButtonComponent } from "@dbs-angular/core";

@Component({
  selector: "form-control-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsRadioGroupComponent,
    ReactiveFormsModule,
    DbsButtonComponent,
  ],
  templateUrl: `form-control-story.component.html`,
})
export class FormControlStoryComponent {
  formControl = new FormControl("Value 2");

  options = [
    { label: "Option 1", value: "Value 1", id: this.generateId() },
    { label: "Option 2", value: "Value 2", id: this.generateId() },
    { label: "Option 3", value: "Value 3", id: this.generateId() },
  ];

  generateId() {
    return Math.random().toString(36).substring(2, 9);
  }

  onChange($event: string) {
    this.formControl.setValue($event);
    console.log(this.formControl.value);
  }
}
```

```html
<dbs-radio-group
  [options]="options"
  [formControl]="formControl"
  [value]="formControl.value ?? undefined"
  (valueChange)="onChange($event)"
></dbs-radio-group>

<div style="display:flex; flex-direction: column; gap: 10px; margin-top: 20px">
  <div style="display: flex; gap: 8px">
    <dbs-button (click)="formControl.setValue(options[0].value)"
      >formControl.setValue(Option 1)</dbs-button
    >
    <dbs-button (click)="formControl.setValue(options[1].value)"
      >formControl.setValue(Option 2)</dbs-button
    >
    <dbs-button (click)="formControl.setValue(options[2].value)"
      >formControl.setValue(Option 3)</dbs-button
    >
  </div>
  <div style="display: flex; gap: 8px">
    <dbs-button (click)="formControl.reset(options[0].value)"
      >formControl.reset(Option 1)</dbs-button
    >
    <dbs-button (click)="formControl.reset(null)"
      >formControl.reset(null)</dbs-button
    >
  </div>
</div>

<p>Checked: {{ formControl.value }}</p>
<p>Touched: {{ formControl.touched }}</p>
<p>Dirty: {{ formControl.dirty }}</p>
<p>Valid: {{ formControl.valid }}</p>
```

Invalid Reactive Form Control

```html
<dbs-radio-group
  [options]="options"
  [formControl]="formControl"
  [value]="formControl.value ?? undefined"
></dbs-radio-group>

<div style="display:flex; flex-direction: column; gap: 10px; margin-top: 20px">
  <div style="display: flex; gap: 8px">
    <dbs-button (click)="formControl.setValue(options[0].value)"
      >formControl.setValue(Option 1)</dbs-button
    >
    <dbs-button (click)="formControl.setValue(options[1].value)"
      >formControl.setValue(Option 2)</dbs-button
    >
  </div>
  <div style="display: flex; gap: 8px">
    <dbs-button (click)="formControl.reset(options[0].value)"
      >formControl.reset(Option 1)</dbs-button
    >
    <dbs-button (click)="formControl.reset(null)"
      >formControl.reset(null)</dbs-button
    >
  </div>
</div>

<p>Checked: {{ formControl.value }}</p>
<p>Touched: {{ formControl.touched }}</p>
<p>Dirty: {{ formControl.dirty }}</p>
<p>Valid: {{ formControl.valid }}</p>
```

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { DbsRadioGroupComponent } from "../../dbs-radio-group.component";
import { DbsButtonComponent } from "@dbs-angular/core";

@Component({
  selector: "invalid-form-control-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsRadioGroupComponent,
    ReactiveFormsModule,
    DbsButtonComponent,
  ],
  templateUrl: `invalid-form-control-story.component.html`,
})
export class InvalidFormControlStoryComponent {
  formControl = new FormControl("Valid", Validators.maxLength(5));

  options = [
    { label: "Option 1", value: "Valid", id: this.generateId() },
    { label: "Option 2", value: "Invalid", id: this.generateId() },
  ];

  generateId() {
    return Math.random().toString(36).substring(2, 9);
  }

  onChange($event: string) {
    this.formControl.setValue($event);
  }
}
```

Disabled With Form Control

```tsx
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DbsRadioGroupComponent } from "../../dbs-radio-group.component";

@Component({
  selector: "disabled-form-control-story",
  standalone: true,
  imports: [CommonModule, DbsRadioGroupComponent, ReactiveFormsModule],
  templateUrl: `disabled-form-control-story.component.html`,
})
export class DisabledFormControlStoryComponent implements OnInit {
  formControl = new FormControl("2");

  options = [
    { label: "Option 1", value: "1", id: this.generateId() },
    { label: "Option 2", value: "2", id: this.generateId() },
    { label: "Option 3", value: "3", id: this.generateId() },
  ];

  generateId() {
    return Math.random().toString(36).substring(2, 9);
  }

  ngOnInit() {
    this.formControl.disable();
  }
}
```

```html
<dbs-radio-group
  [options]="options"
  [formControl]="formControl"
></dbs-radio-group>

<p>Checked: {{ formControl.value }}</p>
<p>Touched: {{ formControl.touched }}</p>
<p>Dirty: {{ formControl.dirty }}</p>
<p>Valid: {{ formControl.valid }}</p>
```

Reactive Form Group

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { DbsRadioGroupComponent } from "../../dbs-radio-group.component";
import { DbsButtonComponent } from "@dbs-angular/core";

@Component({
  selector: "form-group-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsRadioGroupComponent,
    ReactiveFormsModule,
    DbsButtonComponent,
  ],
  templateUrl: `form-group-story.component.html`,
})
export class FormGroupStoryComponent {
  formGroup = new FormGroup({
    formControlDemo: new FormControl("Value 2"),
  });

  options = [
    { label: "Option 1", value: "Value 1", id: this.generateId() },
    { label: "Option 2", value: "Value 2", id: this.generateId() },
    { label: "Option 3", value: "Value 3", id: this.generateId() },
  ];

  generateId() {
    return Math.random().toString(36).substring(2, 9);
  }

  onChange($event: string) {
    this.formGroup.controls.formControlDemo.setValue($event);
    console.log(this.formGroup.value);
  }
}
```

```html
<dbs-radio-group
  [options]="options"
  [formControl]="$any(formGroup.get('formControlDemo'))"
></dbs-radio-group>

<div style="display:flex; flex-direction: column; gap: 10px; margin-top: 20px">
  <div style="display: flex; gap: 8px">
    <dbs-button
      (click)="formGroup.get('formControlDemo')!.setValue(options[0].value)"
      >formControl.setValue(Option 1)</dbs-button
    >
    <dbs-button
      (click)="formGroup.get('formControlDemo')!.setValue(options[1].value)"
      >formControl.setValue(Option 2)</dbs-button
    >
    <dbs-button
      (click)="formGroup.get('formControlDemo')!.setValue(options[2].value)"
      >formControl.setValue(Option 3)</dbs-button
    >
  </div>
  <div style="display: flex; gap: 8px">
    <dbs-button
      (click)="formGroup.get('formControlDemo')!.reset(options[0].value)"
      >formControl.reset(Option 1)</dbs-button
    >
    <dbs-button (click)="formGroup.get('formControlDemo')!.reset(null)"
      >formControl.reset(null)</dbs-button
    >
  </div>
</div>

<p>Checked: {{ formGroup.controls.formControlDemo.value }}</p>
<p>Touched: {{ formGroup.touched }}</p>
<p>Dirty: {{ formGroup.dirty }}</p>
<p>Valid: {{ formGroup.valid }}</p>
```

API Reference

```html
**<dbs-radio-group [options]="options" [value]="value"  ></dbs-radio-group>**
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **options** | The array of options in the radio group.{ status?: 'default' | 'error'; label: string; description?: string; value: string; id: string; name?: string; disabled?: boolean; }[] | [] | options :[
• 0 :{...} 3 keys
• 1 :{...} 3 keys
• 2 :{...} 3 keys
• 3 :{...} 3 keys] |
| **value** | The `value` of the selected option.stringboolean |  |  |
| **disabled** | Prevents all the inputs from being edited or focused.boolean | false |  |
| **size** | Determines the text and gap sizes of the radio label."md""sm" | md | mdsm |
| **status** | Validation status of the entire radio group."default""error" | default | defaulterror |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **valueChange** | Emitted when the value has changed.EventEmitter |  |  |

## Card

### Usage

Import `DbsCardComponent` into your component or module.

```html
import { DbsCardComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsCardComponent],
})
```

### STORIES
Basic

For most cases, the Card component should always come with a header. To add a header, use the `DbsCardHeaderComponent` in the `headerSlot`.

```html
<dbs-card   ><dbs-card-header
  headerSlot
  [title]="'title'"
  [subtitle]="'subtitle'"
></dbs-card-header><div>Card Content</div></dbs-card>
```

No Header

```html
<dbs-card   ><div>Card Content</div></dbs-card>
```

Expandable

```html
<dbs-card [opened]="opened" [expandable]="true" ><dbs-card-header
  headerSlot
  [title]="'title'"
  [subtitle]="'subtitle'"
  [expandable]="true"
  [(opened)]='opened'
></dbs-card-header>Card Content</dbs-card>
```

With Badge and Button

```html
<dbs-card  [title]="'Card Title'" [subtitle]="'This is one line subtitle'" >This is a card with a badge component and button component<div headerTitleSlot [style.display]='"flex"' class="badge">
  <dbs-badge priority="high">12</dbs-badge>
</div>
  <style>
    svg {
      margin-left: 8px;
    }
  </style>
  <dbs-button headerEndSlot size="sm" variant="plain" bound="true">
    Label
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.82 5.42998L18.57 3.17998C18.24 2.84998 17.8 2.66998 17.33 2.66998C16.86 2.66998 16.42 2.84998 16.09 3.17998L2.76 16.51C2.43 16.83 2.25 17.29 2.25 17.75V21C2.25 21.41 2.59 21.75 3 21.75H6.25C6.71 21.75 7.16 21.56 7.49 21.24L20.82 7.89998C21.15 7.56998 21.33 7.12998 21.33 6.65998C21.34 6.19998 21.15 5.75998 20.82 5.42998ZM6.43 20.18C6.38 20.23 6.32 20.25 6.25 20.25H3.75V17.75C3.75 17.68 3.78 17.62 3.82 17.57L13.88 7.51998L16.48 10.12L6.43 20.18ZM19.76 6.83998L17.54 9.05998L14.94 6.45998L17.16 4.23998C17.22 4.17998 17.3 4.16998 17.34 4.16998C17.39 4.16998 17.46 4.17998 17.52 4.23998L19.77 6.48998C19.83 6.54998 19.84 6.62998 19.84 6.66998C19.84 6.70998 19.82 6.77998 19.76 6.83998Z"
        fill="var(--color-icon-active)"
      />
    </svg>
  </dbs-button></dbs-card>
```

With Show All Footer

To add a footer, use the `DbsCardFooterComponent` in the `footerSlot`.

```html
<dbs-card  [opened]="true" [expandable]="true" [title]="'Card Title'" [subtitle]="'This is one line subtitle'" >This card has a clickable footer<dbs-card-footer
  footerSlot
  [clickable]="true"
  [loading]="false"
>
  Show all
</dbs-card-footer></dbs-card>
```

With Loading Footer

```html
<dbs-card  [opened]="true" [expandable]="true" [title]="'Card Title'" [subtitle]="'This is one line subtitle'" >This card has a loading footer<dbs-card-footer
  footerSlot
  [clickable]="true"
  [loading]="true"
>
  Show all
</dbs-card-footer></dbs-card>
```

Card button

The `<dbs-card-button>` is a button that replicates the look of a `<dbs-card>` See [Card Button](https://angular.dev.apps.cs.sgp.dbs.com/iframe.html?path=/docs/components-card-card--docs) for more details

```html
<div style="display:flex;flex-direction:column;gap:24px">
  <dbs-card   ><dbs-card-header
  headerSlot
  [title]="'title'"
  [subtitle]="'subtitle'"
></dbs-card-header><div>Card Content</div></dbs-card>
  <dbs-card-button  [title]="'Card Button Title'" [subtitle]="'Card Button Subtitle'" ><svg-icon iconName="plus-circle" iconSlot></svg-icon></dbs-card-button>
</div>
```

API Reference

```html
<dbs-card   ><div>Card Content</div></dbs-card>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | The card's main content.HTMLElement | - |  |
| **headerSlot** | Slot for the card's header.HTMLElement | - |  |
| **headerTitleSlot** | Slot to add a badge component in the card's header, or to customise the title completely.HTMLElement | - |  |
| **headerEndSlot** | Slot for buttons in the card's header.HTMLElement | - |  |
| **footerSlot** | Slot for the card's footer.HTMLElement | - |  |
| **tableSlot** | For card's content with 0 padding.HTMLElement | - |  |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **expandable** | Allows the card to be collapsed by clicking on card header.boolean | false |  |
| **opened** | Sets the opened state of the cardboolean | true |  |
| **subtitle** | Subtitle of card.string | "" |  |
| **title** | Title of card.string | "" |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **cardTitle** | *(deprecated - ODS) Use `title` instead.*string |  |  |
| **clickable** | *(deprecated - ODS) No longer has any effect.*boolean | false |  |
| **disabled** | *(deprecated - ODS) No longer has any effect.*boolean | false |  |
| **footer** | *(deprecated - IBGT) IBGT footer object customisation*DbsCardFooternull |  |  |
| **header** | *(deprecated - IBGT) IBGT header object customisation*DbsCardHeadernull |  |  |
| **onClickFooterButton** | *(deprecated - IBGT) IBGT footer onClick output. Listen to the `click` event from `DbsCardFooterComponent` instead.*EventEmitter |  |  |
| **onClickHeader** | *(deprecated - IBGT) IBGT header onClick output. Use `onHeaderClick` instead.*EventEmitter |  |  |
| **card-header--prefix** | *(deprecated - IBGT) Slot for the card's header prefix*HTMLElement | - |  |
| **card-header--suffix** | *(deprecated - IBGT) Slot for the card's header suffix*HTMLElement | - |  |
| **card-footer--left** | *(deprecated - IBGT) Slot for the card's footer left.*HTMLElement | - |  |
| **card-footer--center** | *(deprecated - IBGT) Slot for the card's footer center.*HTMLElement | - |  |
| **card-footer--right** | *(deprecated - IBGT) Slot for the card's footer right.*HTMLElement | - |  |
| **card-footer--button** | *(deprecated - IBGT) Slot for the card's footer button.*HTMLElement | - |  |
| **card-content--table** | *(deprecated - IBGT) Slot for the card's 0 padding content.*HTMLElement | - |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **onHeaderClick** | Emitted when the header is clicked.EventEmitter |  |  |
| **openedChange** | Emitted when an expandable card opens or collapses.EventEmitter |  |  |

## Card Header

### Usage

Import `DbsCardHeaderComponent` into your component or module.

```html
**import { DbsCardHeaderComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsCardHeaderComponent],
})**
```

### Stories

Basic

```html
<dbs-card-header  [title]="'Card Title'" ></dbs-card-header>
```

With Subtitle

```html
<dbs-card-header  [title]="'Card Title'" [subtitle]="'This is one line subtitle'" ></dbs-card-header>
```

With Badge

```html
<dbs-card-header  [title]="'Card Title'" [subtitle]="'This is one line subtitle'" ><dbs-badge titleSlot priority='high'>12</dbs-badge></dbs-card-header>
```

WIth Button

```html
<dbs-card-header  [title]="'Card Title'" [subtitle]="'This is one line subtitle'" ><dbs-button endSlot size="sm" variant="plain">
  Label
  <svg-icon endSlot iconName="pencil" style="width: 16px; height: 16px; margin-left: 4px;"></svg-icon>
</dbs-button></dbs-card-header>
```

With Badge and Button

```html
<dbs-card-header  [title]="'Card Title'" [subtitle]="'This is one line subtitle'" ><dbs-badge titleSlot priority='high'>12</dbs-badge><dbs-button endSlot size="sm" variant="plain">
  Label
  <svg-icon endSlot iconName="pencil" style="width: 16px; height: 16px; margin-left: 4px;"></svg-icon>
</dbs-button></dbs-card-header>
```

Expandable

```html
<dbs-card-header  [title]="'Card Title'" [subtitle]="'This is one line subtitle'" [expandable]="true" [opened]="true" ></dbs-card-header>
```

API Reference

```html
<dbs-card-header  [title]="'Card Title'" [subtitle]="'This is one line subtitle'" ></dbs-card-header>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **title** | Title of card.string | "" |  |
| **subtitle** | Subtitle of card.string | "" |  |
| **expandable** | Allows entire card-header to be clickable.boolean | false |  |
| **opened** | opened state of cardboolean | true |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **header** | *(deprecated - IBGT) IBGT header object customisation*DbsCardHeadernull |  |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **openedChange** | Emitted when card's opened state changes.EventEmitter |  |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **titleSlot** | Slot to add a badge component in the card's header, or to customise the title completely.HTMLElement | - |  |
| **endSlot** | Slot for buttons in the card's header.HTMLElement | - |  |

## Card Footer

### Usage

Import `DbsCardFooterComponent` into your component or module.

```html
import { DbsCardFooterComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsCardFooterComponent],
})
```

STORIES
Basic

```html
<dbs-card-footer   ><dbs-button startSlot variant="plain" size="xs">Left button</dbs-button><dbs-button endSlot variant="plain" size="xs">Right button</dbs-button></dbs-card-footer>
```

Clickable

```html
<dbs-card-footer  [clickable]="true" [loading]="false" >Show All</dbs-card-footer>
```

Loading

```html
<dbs-card-footer  [clickable]="true" [loading]="true" >Show All</dbs-card-footer>
```

API Reference

```html
<dbs-card-footer [clickable]="clickable" [loading]="loading"  ><dbs-button startSlot variant="plain" size="xs">Left button</dbs-button><dbs-button endSlot variant="plain" size="xs">Right button</dbs-button></dbs-card-footer>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **clickable** | Allows the entire footer to behave like a single button.boolean | false | [ ] |
| **loading** | Set a clickable footer to loading state.boolean | false | [ ] |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **startSlot** | Slot for button in the card footer.HTMLElement | - |  |
| **endSlot** | Slot for button in the card footer.HTMLElement | - |  |
| **(default)** | Slot for content in a clickable footer.HTMLElement | - |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **footer** | *(deprecated - IBGT) IBGT footer object customisation*DbsCardFooternull |  |  |
| **onClickFooterEmit** | *(deprecated - IBGT) footer onClick output*EventEmitter |  |  |