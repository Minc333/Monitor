import { Component } from '@angular/core';
import { createData } from '../mockup-data';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent {
  dataSet = createData(30);
}
