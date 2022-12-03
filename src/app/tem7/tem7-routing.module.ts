import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tem7Page } from './tem7.page';

const routes: Routes = [
  {
    path: '',
    component: Tem7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tem7PageRoutingModule {}
