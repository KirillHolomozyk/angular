import { Component } from '@angular/core';
import carsData from '../../../../json-server/people2page.json';


@Component({
  selector: 'app-second2-table',
  templateUrl: './second2-table.component.html',
  styleUrls: ['./second2-table.component.scss']
})
export class Second2TableComponent {
  cars: Car[] = carsData;
}

interface Car{
  id:String,
  mark: String,
  year: String,
  type: String,
  size: String,
  passangers: String,
  engine: String,
  power: String,
  fuel: String,
  speed: String,
}
