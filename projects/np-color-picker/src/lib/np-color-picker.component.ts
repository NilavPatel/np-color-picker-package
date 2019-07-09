import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'np-color-picker',
  templateUrl: './np-color-picker.component.html',
  styleUrls: ['np-color-picker.component.css']
})
export class NpColorPickerComponent implements OnInit {

  _colorList: string[];
  _value: string;
  _isOpen: boolean = false;

  @Input() value: string
  @Output() valueChange = new EventEmitter();
  @Input() colorList: string[];
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() disabled: boolean;

  constructor() {
  }

  ngOnInit() {
    if (this.colorList == undefined) {
      this._colorList = [
        '#FFA07A', '#FA8072', '#E9967A', '#F08080', '#CD5C5C', '#DC143C', '#B22222', '#FF0000', '#8B0000',
        '#FF7F50', '#FF6347', '#FF4500', '#FFD700', '#FFA500', '#FF8C00', '#FFFFE0', '#FFFACD', '#FAFAD2',
        '#FFEFD5', '#FFE4B5', '#FFDAB9', '#EEE8AA', '#F0E68C', '#BDB76B', '#FFFF00', '#7CFC00', '#7FFF00',
        '#32CD32', '#00FF00', '#228B22', '#008000', '#006400', '#ADFF2F', '#9ACD32', '#00FF7F', '#00FA9A',
        '#90EE90', '#98FB98', '#8FBC8F', '#3CB371', '#2E8B57', '#808000', '#556B2F', '#6B8E23', '#E0FFFF',
        '#00FFFF', '#00FFFF', '#7FFFD4', '#66CDAA', '#AFEEEE', '#40E0D0', '#48D1CC', '#00CED1', '#20B2AA',
        '#5F9EA0', '#008B8B', '#008080', '#B0E0E6', '#ADD8E6', '#87CEFA', '#87CEEB', '#00BFFF', '#B0C4DE',
        '#1E90FF', '#6495ED', '#4682B4', '#4169E1', '#0000FF', '#0000CD', '#00008B', '#000080', '#191970',
        '#7B68EE', '#6A5ACD', '#483D8B', '#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#DA70D6', '#FF00FF',
        '#FF00FF', '#BA55D3', '#9370DB', '#8A2BE2', '#9400D3', '#9932CC', '#8B008B', '#800080', '#4B0082',
        '#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#DB7093', '#C71585', '#FFFFFF', '#FFFAFA', '#F0FFF0',
        '#F5FFFA', '#F0FFFF', '#F0F8FF', '#F8F8FF', '#F5F5F5', '#FFF5EE', '#F5F5DC', '#FDF5E6', '#FFFAF0',
        '#FFFFF0', '#FAEBD7', '#FAF0E6', '#FFF0F5', '#FFE4E1', '#DCDCDC', '#D3D3D3', '#C0C0C0', '#A9A9A9',
        '#808080', '#696969', '#778899', '#708090', '#2F4F4F', '#000000', '#FFF8DC', '#FFEBCD', '#FFE4C4',
        '#FFDEAD', '#F5DEB3', '#DEB887', '#D2B48C', '#BC8F8F', '#F4A460', '#DAA520', '#CD853F', '#D2691E',
        '#8B4513', '#A0522D', '#A52A2A', '#800000',
      ];
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value != undefined) {
      this._value = changes.value.currentValue;
    }
    if (changes.colorList != undefined) {
      this._colorList = changes.colorList.currentValue;
    }
  }

  _onClickColor(color: string) {
    this._value = color;
    this.value = color;
    this.valueChange.emit(color);
    this._isOpen = false;
    if (this.onChange != undefined) {
      this.onChange.emit(color);
    }
  }

  _toggleColorPicker() {
    this._isOpen = !this._isOpen
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
}
