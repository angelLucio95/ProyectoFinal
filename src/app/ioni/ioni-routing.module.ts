import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IoniPage } from './ioni.page';

const routes: Routes = [
  {
    path: '',
    component: IoniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IoniPageRoutingModule {}
