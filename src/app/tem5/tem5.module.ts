import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tem5PageRoutingModule } from './tem5-routing.module';

import { Tem5Page } from './tem5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tem5PageRoutingModule
  ],
  declarations: [Tem5Page]
})
export class Tem5PageModule {}
