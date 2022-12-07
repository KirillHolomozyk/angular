import { Component } from '@angular/core';
import carsData from '../../../../json-server/cars-lehkovi2.json';

@Component({
  selector: 'app-first1.2-table',
  templateUrl: './first1.2-table.component.html',
  styleUrls: ['./first1.2-table.component.scss']
})
export class First12TableComponent {

  cars: Car[] = carsData;
  public show:boolean = false;
  // public buttonName:any = 'Show';

  
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

