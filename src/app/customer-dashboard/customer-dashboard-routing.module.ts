import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDashboardComponent } from './customer-dashboard.component';
import { HistoryComponent } from './history/history.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';

const routes: Routes = [
  { path: '', component: CustomerDashboardComponent },
  { path: 'new-arrivals', component: NewArrivalsComponent },
  { path: 'history', component: HistoryComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashboardRoutingModule { }
