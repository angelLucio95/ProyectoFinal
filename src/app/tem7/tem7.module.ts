import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tem7PageRoutingModule } from './tem7-routing.module';

import { Tem7Page } from './tem7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tem7PageRoutingModule
  ],
  declarations: [Tem7Page]
})
export class Tem7PageModule {}
