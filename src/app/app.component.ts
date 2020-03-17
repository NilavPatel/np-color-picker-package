import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'np-ui-color-picker-package';

  currentColor1: string = "#5fe64b";
  currentColor2: string = "#5fe64b";
  currentColor3: string;
  currentColor4: string = "#5fe64b";
  currentColor5: string;
  existingColors5 = ['#FFFFFF', '#C0C0C0', '#808080', '#000000'];
  currentColor6: string;
  currentColor7: string;
  currentColor8: string;

  onChangeColor(e) {
    alert("Selected color is " + e);
  }
}
