import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  apiKey: string = 'AiWdMdTPIxP2hsKZOJoVWc_Owz9OPVHdOMnTU1O_D1BufnOCC2izJHDPkENDsQGs'
  pushpins: [] = []
  constructor() { }

  ngOnInit() {
  }

}
