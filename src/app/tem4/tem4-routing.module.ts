import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tem4Page } from './tem4.page';

const routes: Routes = [
  {
    path: '',
    component: Tem4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tem4PageRoutingModule {}
