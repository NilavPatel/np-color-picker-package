# np-ui-color-picker

<img src="https://raw.githubusercontent.com/NilavPatel/np-color-picker-package/master/src/assets/images/logo-large.png" width="300" height="80">

````
Angular 8 UI Component
Example given in github repository. 
CSS needs to be set as per your branding or design.
````

### [Demo](https://stackblitz.com/edit/np-ui-color-picker)

````
<np-color-picker [value]="currentColor" (onChange)="onColorSelect($event)"></np-color-picker>
````

### Properties
````
1.  value : string
    Selected color variable

2.  disabled : boolean
    true/false - set component disabled

3.  defaultOpen : boolean
    true/false
    default open or not. 

4.  iconCss : string
    give class to show icon in color picker. like iconCss="fa fa-eyedropper"

5.  colors : string[]
    list of pre defined colors, if not pass this variable, default color list will be displayed.
    data type is array of string. 
````

## Methods
````
1.  onChange
    on change event binding
````