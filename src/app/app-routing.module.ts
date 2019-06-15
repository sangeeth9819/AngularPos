import {NgModule} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {MainComponent} from './view/main/main.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {CutomerComponent} from './view/cutomer/cutomer.component';
import {ItemComponent} from './view/item/item.component';
import {OrderComponent} from './view/order/order.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'customer',
        component: CutomerComponent
      },
      {
        path: 'item',
        component: ItemComponent
      },
      {
        path: 'orders',
        component: OrderComponent
      },
    ]
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
