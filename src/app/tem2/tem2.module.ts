import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tem2PageRoutingModule } from './tem2-routing.module';

import { Tem2Page } from './tem2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tem2PageRoutingModule
  ],
  declarations: [Tem2Page]
})
export class Tem2PageModule {}
