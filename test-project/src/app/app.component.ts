import { Component, ViewChild, ElementRef } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){}
  @ViewChild('form') form: ElementRef;
  @ViewChild('result') result: ElementRef;
  title = 'test-project';

  tl = gsap.timeline();

  
  showResults() {
    if(!this.tl.isActive()){
      this.tl
      .fromTo(this.form.nativeElement,{x: 0, duration: 1}, {x: -125} )
      .fromTo(this.result.nativeElement, {opacity: 0, x:125, duration: 1}, {opacity: 1, delay: 0.250})
    }
  }
  
  hideResults(){
    if(parseInt(window.getComputedStyle(this.result.nativeElement,null).getPropertyValue("opacity")) === 0) return;
    this.tl
        .fromTo(this.result.nativeElement, {opacity: 1, duration: 2}, {opacity: 0, delay: 0.250})
        .fromTo(this.form.nativeElement,{x: -125, duration: 1}, {x: 0, delay: 0.250} )
  }
}
