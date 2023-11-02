import { AfterContentChecked, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { sliderContent } from '../slide';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent{
  responsiveOptions: any[] | undefined;

  @ViewChild('containerWithCruosel',{ static: true }) container!:ElementRef;
  @ViewChild('slider',{ static: true }) slider!:ElementRef;
  list!:any[];
  currentPosition = 0;
  fileServer = window['fileServer'];
  currentMargin = 0;
  slidesPerPage = 0;
  prevKeyActive = false;
  nextKeyActive = true;
  containerWidth:any;
  slides:any;
  buttons:any;
  slidesCount:any;
  constructor(){
      this.list = sliderContent;
  }
  ngAfterContentInit(){
    this.buttons = document.getElementsByClassName('btn');
    this.slides = document.getElementsByClassName('slide').length;
    this.slidesCount = this.slides - this.slidesPerPage;
    this.containerWidth = this.container.nativeElement.offsetWidth;
    console.log(this.buttons,this.slides,this.slidesCount,this.containerWidth);

    this.setParams();
  }

  @HostListener('resize', ['$event'])
  checkWidth(e:Event) {
    this.containerWidth = this.container.nativeElement.offsetWidth;
    this.setParams(this.containerWidth);
  }
  setParams(w?:any) {
    if (w < 551) {
        this.slidesPerPage = 1;
    } else {
        if (w < 901) {
            this.slidesPerPage = 2;
        } else {
            if (w < 1101) {
                this.slidesPerPage = 3;
            } else {
                this.slidesPerPage = 4;
            }
        }
    }
    this.slidesCount = this.slides - this.slidesPerPage;
    if (this.currentPosition > this.slidesCount) {
        this.currentPosition -= this.slidesPerPage;
    };
    this.currentMargin =  this.currentPosition * (100 / this.slidesPerPage);
    this.slider.nativeElement.style.marginLeft = this.currentMargin + '%';
    if (this.currentPosition > 0) {
        this.buttons[0].classList.remove('inactive');
    }
    if (this.currentPosition < this.slidesCount) {
        this.buttons[1].classList.remove('inactive');
    }
    if (this.currentPosition >= this.slidesCount) {
        this.buttons[1].classList.add('inactive');
    }
}


 slideRight() {
    if (this.currentPosition != 0) {
        this.slider.nativeElement.style.marginLeft = this.currentMargin + (100 / this.slidesPerPage) + '%';
        this.currentMargin += (100 / this.slidesPerPage);
        this.currentPosition--;
    };
    if (this.currentPosition === 0) {
        this.buttons[0].classList.add('inactive');
    }
    if (this.currentPosition < this.slidesCount) {
        this.buttons[1].classList.remove('inactive');
    }
};

 slideLeft() {
    if (this.currentPosition != this.slidesCount) {
        this.slider.nativeElement.style.marginLeft = this.currentMargin - (100 / this.slidesPerPage) + '%';
        this.currentMargin -= (100 / this.slidesPerPage);
        this.currentPosition++;
    };
    if (this.currentPosition == this.slidesCount) {
        this.buttons[1].classList.add('inactive');
    }
    if (this.currentPosition > 0) {
        this.buttons[0].classList.remove('inactive');
    }
};
onClick(item:any){

}
}
