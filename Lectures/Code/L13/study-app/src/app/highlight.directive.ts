import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') options: any
  constructor(el: ElementRef) {
    console.log(this)
    if (this.options?.show) {
      el.nativeElement.style.backgroundColor = 'yellow';
    }
  }


}
