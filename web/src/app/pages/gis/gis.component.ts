import { Component, OnInit } from '@angular/core';
import { MapTypes, PushpinModel } from 'src/app/ngx-bingmaps/src/public-api';
import { createData } from '../mockup-data';

@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.less']
})
export class GisComponent implements OnInit {
  apiKey: string = 'AiWdMdTPIxP2hsKZOJoVWc_Owz9OPVHdOMnTU1O_D1BufnOCC2izJHDPkENDsQGs'
  pushpins: PushpinModel[] = []
  dataSet = createData(30);
  mapType: MapTypes = MapTypes.road;

  constructor() { }

  ngOnInit() {
    this.dataSet.forEach(item => {
      this.pushpins.push({
        location: {
          latitude: Number(item.weiDu),
          longitude: Number(item.jinDu),
        },
        options: {
          title: '',
          subTitle: '',
          enableClickedStyle: true,
          enableHoverStyle: true,
          color: '#673ab7',
        },
        infobox: {
          title: item.id,
          description:
            'this is a test',
          visible: false,
        },
      })
    })
  }

  pushPinClicked(info: any) {
    console.log(info)
  }

}
