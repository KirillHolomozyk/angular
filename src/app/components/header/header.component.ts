import { Component } from '@angular/core';
import photoData from '../../../../json-server/photos.json';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  photos: Photo[] = photoData;
  public show:boolean = false;

  
}

interface Photo{
  id: String,
  photo: String
}