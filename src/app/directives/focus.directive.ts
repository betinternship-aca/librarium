import {Directive, ElementRef, Input, AfterViewInit} from '@angular/core';

@Directive({selector: '[appFocus]'})

export class FocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {
    console.log(el);
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.focus();
  }
}

