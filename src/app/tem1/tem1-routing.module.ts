import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tem1Page } from './tem1.page';

const routes: Routes = [
  {
    path: '',
    component: Tem1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tem1PageRoutingModule {}
