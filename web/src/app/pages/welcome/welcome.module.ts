import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { NgxBingmapsModule } from 'src/app/ngx-bingmaps/src/public-api';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    NgxBingmapsModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
