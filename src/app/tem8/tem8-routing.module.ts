import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tem8Page } from './tem8.page';

const routes: Routes = [
  {
    path: '',
    component: Tem8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tem8PageRoutingModule {}
