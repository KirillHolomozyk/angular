import { Component, Input } from '@angular/core';
import carsData from '../../../../json-server/cars-lehkovi.json';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent {
  // @Input() task: Car;
  public show:boolean = false;
  public show2:boolean = false;
  public show3:boolean = false;

  public showtable:boolean = false;
  public showtable1:boolean = false;
  public showtable2:boolean = false;

  public showtable20:boolean = false;
  public showtable21:boolean = false;
  public showtable22:boolean = false;

  public showtable30:boolean = false;
  public showtable31:boolean = false;
  public showtable32:boolean = false;


  public showarr:boolean = false;
  public showarr2:boolean = false;
  public showarr3:boolean = false;

  // public buttonName:any = 'Show';

  ngOnInit () {  }

  toggle1() {
    this.show = !this.show;
    this.showarr = !this.showarr;

    // // Change the name of the button.
    // if(this.show)  
    //   this.buttonName = "Hide";
    // else
    //   this.buttonName = "Show";
  }
  toggle2(){
    this.showtable = !this.showtable;

  }
  toggle3(){
    this.showtable1 = !this.showtable1;

  }
  toggle4(){
    this.showtable2 = !this.showtable2;
  }
  toggle20(){
    this.show2 = !this.show2;
    this.showarr2 = !this.showarr2;

  }
  toggle21(){
    this.showtable20 = !this.showtable20;
  }
  toggle22(){
    this.showtable21 = !this.showtable21;
  }
  toggle23(){
    this.showtable22 = !this.showtable22;
  }


  toggle30(){
    this.show3 = !this.show3;
    this.showarr3 = !this.showarr3;

  }
  toggle31(){
    this.showtable30 = !this.showtable30;
  }
  toggle32(){
    this.showtable31 = !this.showtable31;
  }
  toggle33(){
    this.showtable32 = !this.showtable32;
  }
}


