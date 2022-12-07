import { Component } from '@angular/core';
import carsData from '../../../../json-server/cars-special2.json';

@Component({
  selector: 'app-third12-table',
  templateUrl: './third12-table.component.html',
  styleUrls: ['./third12-table.component.scss']
})
export class Third12TableComponent {
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