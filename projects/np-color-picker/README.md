# np-ui-color-picker

<img src="https://raw.githubusercontent.com/NilavPatel/np-ui-data-grid-package/master/src/assets/images/logo-large.png" width="300" height="80">

````
Angular 8 Color Picker Component
````

### [Demo](https://stackblitz.com/edit/np-ui-color-picker)

````
npm i np-ui-color-picker
````
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

5.  isOkButton : boolean
    If set to true then Ok button will be visible, and color picker will be only closed on click of Ok button. 
    It's default value is false.
````

### Apis
````
1.  getSelectedHEX
    get selected color in HEX format

2.  getSelectedRGB
    get selected color in RGB format
````

### Methods
````
1.  onChange
    on change event binding
````
