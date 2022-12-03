import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tem8PageRoutingModule } from './tem8-routing.module';

import { Tem8Page } from './tem8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tem8PageRoutingModule
  ],
  declarations: [Tem8Page]
})
export class Tem8PageModule {}
