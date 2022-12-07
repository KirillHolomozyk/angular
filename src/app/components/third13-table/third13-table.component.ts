import { Component } from '@angular/core';
import carsData from '../../../../json-server/cars-special3.json';

@Component({
  selector: 'app-third13-table',
  templateUrl: './third13-table.component.html',
  styleUrls: ['./third13-table.component.scss']
})
export class Third13TableComponent {
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