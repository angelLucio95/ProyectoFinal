import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tem3Page } from './tem3.page';

const routes: Routes = [
  {
    path: '',
    component: Tem3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tem3PageRoutingModule {}
