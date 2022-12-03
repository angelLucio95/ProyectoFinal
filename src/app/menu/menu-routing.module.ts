import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[{
        path: 'entradas',
        loadChildren: () => import('../entradas/entradas.module').then( m => m.EntradasPageModule)
      },
      {
        path: 'ioni',
        loadChildren: () => import('../ioni/ioni.module').then( m => m.IoniPageModule)
      },
      {
        path: 'autor',
        loadChildren: () => import('../autor/autor.module').then( m => m.AutorPageModule)
      },
      {
        path: 'tem1',
        loadChildren: () => import('../tem1/tem1.module').then( m => m.Tem1PageModule)
      },
      {
        path: 'tem2',
        loadChildren: () => import('../tem2/tem2.module').then( m => m.Tem2PageModule)
      },
      {
        path: 'tem3',
        loadChildren: () => import('../tem3/tem3.module').then( m => m.Tem3PageModule)
      },
      {
        path: 'tem4',
        loadChildren: () => import('../tem4/tem4.module').then( m => m.Tem4PageModule)
      },
      {
        path: 'tem5',
        loadChildren: () => import('../tem5/tem5.module').then( m => m.Tem5PageModule)
      },
      {
        path: 'tem6',
        loadChildren: () => import('../tem6/tem6.module').then( m => m.Tem6PageModule)
      },
      {
        path: 'tem7',
        loadChildren: () => import('../tem7/tem7.module').then( m => m.Tem7PageModule)
      },
      {
        path: 'tem8',
        loadChildren: () => import('../tem8/tem8.module').then( m => m.Tem8PageModule)
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
