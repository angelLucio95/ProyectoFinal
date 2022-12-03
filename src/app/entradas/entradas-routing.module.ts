import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradasPage } from './entradas.page';

const routes: Routes = [
  {
    path: '',
    component: EntradasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradasPageRoutingModule {}
