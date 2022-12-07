import { Component } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss']
})
export class ThirdPageComponent {
  public show_third_page:boolean = false;
  public show_third_page2:boolean = false;
  public showarr:boolean = false;
  public showarr1:boolean = false;

  toggle_third_page(){
    this.show_third_page = !this.show_third_page;
    this.showarr = !this.showarr;

  }
  toggle_third_page2(){
    this.show_third_page2 = !this.show_third_page2;
    this.showarr1 = !this.showarr1;

  }
}
