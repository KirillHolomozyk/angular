import { Component } from '@angular/core';
import carsData from '../../../../json-server/cars-vantazhni2.json';

@Component({
  selector: 'app-second12-table',
  templateUrl: './second12-table.component.html',
  styleUrls: ['./second12-table.component.scss']
})
export class Second12TableComponent {
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


