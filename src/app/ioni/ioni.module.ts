import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IoniPageRoutingModule } from './ioni-routing.module';

import { IoniPage } from './ioni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IoniPageRoutingModule
  ],
  declarations: [IoniPage]
})
export class IoniPageModule {}
