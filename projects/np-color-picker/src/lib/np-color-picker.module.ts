import { NgModule } from '@angular/core';
import { NpColorPickerComponent } from './np-color-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpColorPickerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NpColorPickerComponent]
})
export class NpColorPickerModule { }
