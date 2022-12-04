import { Component, Input } from '@angular/core';
import carsData from '../../../../json-server/cars-lehkovi.json';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent {
  // @Input() task: Car;
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
