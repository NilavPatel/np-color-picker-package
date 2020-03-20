import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'np-ui-color-picker-package';

  color1: string = "#5fe64b";
  color2: string = "#5fe64b";
  color3: string;
  color4: string = "#5fe64b";
  color4Required = false;
  color4Disabled = false;
  color5: string;
  existingColors5 = ['#FFFFFF', '#C0C0C0', '#808080', '#000000'];
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;

  onChangeColor(e) {
    alert("Selected color is " + e);
  }
}
