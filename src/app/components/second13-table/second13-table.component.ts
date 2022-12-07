import { Component } from '@angular/core';
import carsData from '../../../../json-server/cars-vantazhni3.json';

@Component({
  selector: 'app-second13-table',
  templateUrl: './second13-table.component.html',
  styleUrls: ['./second13-table.component.scss']
})
export class Second13TableComponent {
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
