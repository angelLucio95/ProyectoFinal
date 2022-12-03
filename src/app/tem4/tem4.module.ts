import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tem4PageRoutingModule } from './tem4-routing.module';

import { Tem4Page } from './tem4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tem4PageRoutingModule
  ],
  declarations: [Tem4Page]
})
export class Tem4PageModule {}
