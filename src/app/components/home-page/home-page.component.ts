import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  ShowWords(): void {
    console.log(123);
  }
  // public divWords: String = document.querySelector('.text');
  public count = 0;
  public array_words = ["Війна – це поєдинок волі. Якщо ти не готовий всім пожертвувати, значить ти вже програв.", "Військових сил недостатньо для захисту країни, тим часом як захищається народом країна непереможна.", "Тим, хто захоплює людей на завоювання світу, не потрібні ні справедливість, ні милосердя.", "В війні не буває тих, хто виграв – тільки ті, хто програв."];
  arrclickLeft(): void {
    if(this.count == 0){
      this.count = this.array_words.length - 1;
    }
    else{
      this.count--;
    }
  }
  arrclickRight():void{
    if(this.count == this.array_words.length - 1){
      this.count = 0;
    }
    else{
      this.count++;
    }
  }
  //   if (count == 0) {
  //     this.divWords = this.array_words[count];
  //     count = this.array_words.length - 1;
  //   }
  //   else {
  //     this.divWords.innerHTML = this.array_words[count];
  //     count--;
  //   }
  // }

}

