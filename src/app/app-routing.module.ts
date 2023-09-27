import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportListComponent } from './airport-list/airport-list.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { FlightListComponent } from './flight-list/flight-list.component';

const routes: Routes = [

  {
    path:"airport-list",
    component:AirportListComponent
  },
  {
    path:"routes-list",
    component:RoutesListComponent
  },
{  path:"flight-list",
  component:FlightListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
