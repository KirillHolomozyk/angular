import { Component } from '@angular/core';
import photoData from '../../../../json-server/photos.json';

@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.scss']
})
export class LastPageComponent {
  photos: Photo[] = photoData;
  public show:boolean = false;
}

interface Photo{
  id: String,
  photo: String
}
