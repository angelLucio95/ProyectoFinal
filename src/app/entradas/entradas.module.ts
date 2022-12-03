import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradasPageRoutingModule } from './entradas-routing.module';

import { EntradasPage } from './entradas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradasPageRoutingModule
  ],
  declarations: [EntradasPage]
})
export class EntradasPageModule {}
