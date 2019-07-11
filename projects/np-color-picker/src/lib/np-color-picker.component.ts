import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'np-color-picker',
  templateUrl: './np-color-picker.component.html',
  styleUrls: ['np-color-picker.component.css', './css/np-font-package.css']
})
export class NpColorPickerComponent implements OnInit {

  _value: string;
  _isOpen: boolean = false;

  @Input() value: string
  @Output() valueChange = new EventEmitter();
  @Input() defaultOpen: boolean;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() disabled: boolean;

  _primaryColor: string = "#0000ff";

  public context: CanvasRenderingContext2D;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.defaultOpen) {
      this._updateCanvas();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value != undefined && changes.value.currentValue != this._value) {
      this._value = changes.value.currentValue;
      if (this.onChange != undefined && !changes.value.firstChange) {
        this.onChange.emit(this._value);
      }
    }
  }

  _toggleColorPicker() {
    this._isOpen = !this._isOpen
    if (this._isOpen) {
      setTimeout(() => {
        this._updateCanvas();
      }, 100);
    }
  }

  _close() {
    this._isOpen = false;
  }

  _onInputChange() {
    this.value = this._value;
    this.valueChange.emit(this._value);
    if (this.onChange != undefined) {
      this.onChange.emit(this._value);
    }
  }

  _updateCanvas() {
    var block = <HTMLCanvasElement>this.elRef.nativeElement.querySelector('.np-canvas-block');
    var strip = <HTMLCanvasElement>this.elRef.nativeElement.querySelector('.np-canvas-strip');
    var ctx1 = block.getContext('2d');
    var ctx2 = strip.getContext('2d');

    ctx1.fillStyle = this._primaryColor.length > 0 ? this._primaryColor : this.value;
    ctx1.fillRect(0, 0, 200, 200);

    var grdWhite = ctx2.createLinearGradient(0, 0, 200, 0);
    grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
    grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
    ctx1.fillStyle = grdWhite;
    ctx1.fillRect(0, 0, 200, 200);

    var grdBlack = ctx2.createLinearGradient(0, 0, 0, 200);
    grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
    grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
    ctx1.fillStyle = grdBlack;
    ctx1.fillRect(0, 0, 200, 200);

    ctx2.rect(0, 0, 30, 150);
    var grd1 = ctx2.createLinearGradient(0, 0, 0, 150);
    grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
    grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
    grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
    grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
    grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
    grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
    grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
    ctx2.fillStyle = grd1;
    ctx2.fill();
  }

  clickStrip(e: any) {
    var strip = <HTMLCanvasElement>this.elRef.nativeElement.querySelector('.np-canvas-strip');
    var ctx2 = strip.getContext('2d');
    var x = e.offsetX;
    var y = e.offsetY;
    var imageData = ctx2.getImageData(x, y, 1, 1).data;
    this._primaryColor = this.fullColorHex(imageData[0], imageData[1], imageData[2]);
    this._updateCanvas();
  }

  changeColor(e: any) {
    var block = <HTMLCanvasElement>this.elRef.nativeElement.querySelector('.np-canvas-block');
    var ctx1 = block.getContext('2d');
    var x = e.offsetX;
    var y = e.offsetY;
    var imageData = ctx1.getImageData(x, y, 1, 1).data;
    this._value = this.fullColorHex(imageData[0], imageData[1], imageData[2]);
    this.value = this._value;
    this.valueChange.emit(this._value);
  }

  fullColorHex(r: number, g: number, b: number) {
    var red = this.rgbToHex(r);
    var green = this.rgbToHex(g);
    var blue = this.rgbToHex(b);
    return "#" + red + green + blue;
  };

  rgbToHex(rgb: number) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };
}
