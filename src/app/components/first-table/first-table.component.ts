import { Component } from '@angular/core';
import carsData from '../../../../json-server/cars-lehkovi.json';

@Component({
  selector: 'app-first-table',
  templateUrl: './first-table.component.html',
  styleUrls: ['./first-table.component.scss']
})
export class FirstTableComponent {
  cars: Car[] = carsData;
  public show:boolean = false;

  
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

