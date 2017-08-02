import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  @Input()
  value: string;
/*  @HostBinding('class.has-value')
  hasValue = false;*/

  constructor() { }

  onChange(ev) {
    const myFile = ev.currentTarget;
    const [file] = myFile.files;
    const fr = new FileReader();

    fr.addEventListener('load', () => {
      this.value = fr.result;
      // this.hasValue = !!this.value;
    });
    fr.readAsDataURL(file);
  }

  ngOnInit() {
  }

}
