import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tem1PageRoutingModule } from './tem1-routing.module';

import { Tem1Page } from './tem1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tem1PageRoutingModule
  ],
  declarations: [Tem1Page]
})
export class Tem1PageModule {}
