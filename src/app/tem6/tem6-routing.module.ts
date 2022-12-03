import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tem6Page } from './tem6.page';

const routes: Routes = [
  {
    path: '',
    component: Tem6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tem6PageRoutingModule {}
