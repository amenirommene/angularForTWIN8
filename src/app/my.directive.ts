import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myDirective]'
})
export class MyDirective {

  constructor(private balise:ElementRef, private render:Renderer2) {
    this.render.setStyle(this.balise.nativeElement, 'backgroundColor', 'white');
  }
  @HostListener('mouseenter') onClick() {
    this.render.setStyle(this.balise.nativeElement, 'backgroundColor', 'green');  }
  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.balise.nativeElement, 'backgroundColor', 'white');
}


}
