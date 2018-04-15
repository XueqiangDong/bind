import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  imgUrl: string = 'http://placehold.it/400x220';
  size: number = 5;
  isBig: boolean = false;
  isDev: boolean = false;
  // divClass:string;
  divClass: any = {
    a: false,
    b: false,
    c: false,
  };
  divStyle: any = {
    color: 'green',
    background: 'white',
  };
  birthday: Date = new Date();
  pi: number = Math.PI;
  sizeA: number = 5;

  constructor() {
    // setTimeout(() => {
    //   this.divClass = 'a b c';
    // }, 3000);
    setTimeout(() => {
      this.isBig = true;
    }, 6000);
    setTimeout(() => {
      this.divClass = {
        a: true,
        b: true,
        c: true,
      };
    }, 9000);
    setTimeout(() => {
      this.isDev = true;
    }, 9000);
    setTimeout(() => {
      this.divStyle = {
        color: 'yellow',
        background: 'black',
      };
    }, 9000);

  }

  ngOnInit() {
  }

  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {
    console.log(event.target.value);
    console.log(event.target.getAttribute('value'));
  }
}
