import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard.component';
import { HistoryComponent } from './history/history.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';


@NgModule({
  declarations: [CustomerDashboardComponent, HistoryComponent, NewArrivalsComponent],
  imports: [
    CommonModule,
    CustomerDashboardRoutingModule
  ]
})
export class CustomerDashboardModule { }
