import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tem2Page } from './tem2.page';

const routes: Routes = [
  {
    path: '',
    component: Tem2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tem2PageRoutingModule {}
