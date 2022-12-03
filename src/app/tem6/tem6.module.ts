import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tem6PageRoutingModule } from './tem6-routing.module';

import { Tem6Page } from './tem6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tem6PageRoutingModule
  ],
  declarations: [Tem6Page]
})
export class Tem6PageModule {}
