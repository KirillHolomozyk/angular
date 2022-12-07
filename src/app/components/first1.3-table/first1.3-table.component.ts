import { Component } from '@angular/core';
import carsData from '../../../../json-server/cars-lehkovi3.json';

@Component({
  selector: 'app-first1.3-table',
  templateUrl: './first1.3-table.component.html',
  styleUrls: ['./first1.3-table.component.scss']
})
export class First13TableComponent {

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


