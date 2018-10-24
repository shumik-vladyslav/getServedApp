import { Component, Input, ElementRef, Renderer, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ShrinkingHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'shrinking-header',
  templateUrl: 'shrinking-header.html'
})
export class ShrinkingHeaderComponent {

  @Input('scrollArea') scrollArea: any;
  @Input('headerHeight') headerHeight: number;
 
  newHeaderHeight: any;

  @Output('newHeight') newHeight = new EventEmitter<number>();
 
  constructor(public element: ElementRef, public renderer: Renderer) {
 
  }
 
  ngAfterViewInit(){
 
    this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
 
    this.scrollArea.ionScroll.subscribe((ev) => {
      this.resizeHeader(ev);
    });
 
  }
 
  resizeHeader(ev){
 
    ev.domWrite(() => {
 
      this.newHeaderHeight = this.headerHeight - ev.scrollTop;
 
      if(this.newHeaderHeight < 0){
        this.newHeaderHeight = 0;
      }  
 
      this.renderer.setElementStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
      this.newHeight.emit(this.newHeaderHeight);
    });
 
  }
 
}
