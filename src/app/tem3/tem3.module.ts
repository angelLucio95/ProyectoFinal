import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tem3PageRoutingModule } from './tem3-routing.module';

import { Tem3Page } from './tem3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tem3PageRoutingModule
  ],
  declarations: [Tem3Page]
})
export class Tem3PageModule {}
