import { NgModule } from '@angular/core';
import { GisRoutingModule } from './gis-routing.module';
import { GisComponent } from './gis.component';
import { NgxBingmapsModule } from 'src/app/ngx-bingmaps/src/public-api';

@NgModule({
  imports: [
    GisRoutingModule,
    NgxBingmapsModule
  ],
  declarations: [GisComponent],
  exports: [GisComponent]
})
export class GisModule { }
