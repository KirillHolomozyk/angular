import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  ShowWords():void{
    console.log(123);
  }
}

// let array_words = ["Війна – це поєдинок волі. Якщо ти не готовий всім пожертвувати, значить ти вже програв.","Військових сил недостатньо для захисту країни, тим часом як захищається народом країна непереможна.","Тим, хто захоплює людей на завоювання світу, не потрібні ні справедливість, ні милосердя.", "В війні не буває тих, хто виграв – тільки ті, хто програв."];
// let divWords = document.querySelector('.text');
// let count = 0;
// document.querySelector('.arrleft').onclick = () =>{
//     if(count == 0){
//         divWords.innerHTML = array_words[count];
//         count = array_words.length - 1;
//     }
//     else{
//         divWords.innerHTML = array_words[count];
//         count--;
//     }
// }
// document.querySelector('.arrright').onclick = () =>{
//     if(count == array_words.length-1){
//         divWords.innerHTML = array_words[count];
//         count = 0;
//     }
//     else{
//         divWords.innerHTML = array_words[count];
//         count++;
//     }
// }