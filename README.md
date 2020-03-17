# np-ui-color-picker
Color picker custom component for Angular 9 and 9+, Created using only Angular.

## Check demo [Here](https://stackblitz.com/edit/np-ui-color-picker)

## NPM
``$ npm install np-ui-color-picker``

## HTML
````html
<np-ui-color-picker 
    [(value)]="currentColor"
    [isOkButton] = "true"
    (onChange)="onColorSelect($event)">
</np-ui-color-picker>
````

## Properties
1.  `value` : string  
    Selected color variable for two way data binding.  
2.  `disabled` : boolean  
    Set component is disabled or not.  
3.  `defaultOpen` : boolean  
    Set color picker by default open or not.  
4.  `colors` : string[]  
    List of pre defined colors, if not passed this variable, default color list will be displayed.  
5.  `placeholder` : string  
    Set placeholder for color picker.  
6.  `hideColorInput` : boolean  
    Hide color input box, only show seleced color block.  
7.  `required` : boolean  
    Default value is false. add required attribute to input textbox.  
8. `name` : string  
    Add name attribute to input textbox.  

## Apis  
1.  `getSelectedHEX()`  
    Get selected color in HEX format.  
2.  `getSelectedRGB()`  
    Get selected color in RGB format.  

## Methods
1.  `onChange()`  
    On change event binding for component.  

## Other np-ui components for Angular
1. [Data grid](https://www.npmjs.com/package/np-ui-data-grid)
2. [Date picker](https://www.npmjs.com/package/np-ui-date-picker)
3. [Time picker](https://www.npmjs.com/package/np-ui-time-picker)
4. [Color picker](https://www.npmjs.com/package/np-ui-color-picker)

## License
This project is licensed under the MIT License.

## Contributors
![](https://raw.githubusercontent.com/NilavPatel/nilavpatel.github.io/master/images/logo-large.png)