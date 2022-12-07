import { Component } from '@angular/core';
import carsData from '../../../../json-server/cars-vantazhni.json';

@Component({
  selector: 'app-second-table',
  templateUrl: './second-table.component.html',
  styleUrls: ['./second-table.component.scss']
})
export class SecondTableComponent {
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
