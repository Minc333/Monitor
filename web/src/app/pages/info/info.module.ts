import { NgModule } from '@angular/core';
import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    InfoRoutingModule,
    NzTableModule,
    CommonModule
  ],
  declarations: [InfoComponent],
  exports: [InfoComponent]
})
export class InfoModule { }
