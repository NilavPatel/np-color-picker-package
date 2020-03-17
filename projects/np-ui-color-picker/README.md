# np-ui-color-picker
Angular 9 Native color picker component.

## Check demo [Here](https://stackblitz.com/edit/np-ui-color-picker9)

## NPM
``$ npm install np-ui-color-picker``

## HTML
````html
<np-ui-color-picker 
    [(ngModel)]="currentColor">
</np-ui-color-picker>
````

## Properties
1.  `ngModel` : string  
    Selected color variable for two way data binding.  
2.  `disabled` : boolean  
    Set component is disabled or not.  
3.  `required` : boolean  
    Default value is false. add required attribute to input textbox.  
4.  `defaultOpen` : boolean  
    Set color picker by default open or not.  
5.  `colors` : string[]  
    List of pre defined colors, if not passed this variable, default color list will be displayed.  
6.  `placeholder` : string  
    Set placeholder for color picker.  
7.  `hideColorInput` : boolean  
    Hide color input box, only show seleced color block.  

## Apis  
1.  `getSelectedRGB()`  
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