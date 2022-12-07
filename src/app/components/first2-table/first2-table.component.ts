import { Component } from '@angular/core';
import carsData from '../../../../json-server/cars2page.json';


@Component({
  selector: 'app-first2-table',
  templateUrl: './first2-table.component.html',
  styleUrls: ['./first2-table.component.scss']
})
export class First2TableComponent {
  cars: Car[] = carsData;
}

interface Car{
  photo: String,
  name: String,
  surname: String,
  passport: String,
  
}

