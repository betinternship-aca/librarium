import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({ selector: '[appFocus]' })

export class FocusDirective implements OnInit {

  el: ElementRef;
  constructor() {
    // el.nativeElement.focus();
  }
  ngOnInit() {
    this.el.nativeElement.focus();
  }

}

