import { Component } from '@angular/core';
import carsData from '../../../../json-server/cars-special.json';

@Component({
  selector: 'app-third-table',
  templateUrl: './third-table.component.html',
  styleUrls: ['./third-table.component.scss']
})
export class ThirdTableComponent {
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