import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tem5Page } from './tem5.page';

const routes: Routes = [
  {
    path: '',
    component: Tem5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tem5PageRoutingModule {}
