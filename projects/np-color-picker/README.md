# np-ui-color-picker

<img src="https://raw.githubusercontent.com/NilavPatel/np-ui-data-grid-package/master/src/assets/images/logo-large.png" width="300" height="80">

````
Angular 8 Color Picker Component
````

### [Demo](https://stackblitz.com/edit/np-ui-color-picker)

````
<np-color-picker [value]="currentColor" (onChange)="onColorSelect($event)"></np-color-picker>
````

### Properties
````
1.  value : string
    Selected color variable for two way binding.

2.  disabled : boolean
    set component is disabled or not.

3.  defaultOpen : boolean
    Set color picker by default open or not. 

4.  colors : string[]
    List of pre defined colors, if not passed this variable, default color list will be displayed.
````

## Apis
````
1.  getSelectedHEX
    get selected color in HEX format

2.  getSelectedRGB
    get selected color in RGB format
````

## Methods
````
1.  onChange
    on change event binding
````