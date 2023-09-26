import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AirportListComponent } from './airport-list/airport-list.component'
import { AirportService } from './airport/airport.service';
import { FormsModule } from '@angular/forms';
import { AirportFilterPipePipe } from './airport-filter-pipe.pipe';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { RoutesService } from './routes/routes.service';

@NgModule({
  declarations: [
    AppComponent,
    AirportListComponent,
    AirportFilterPipePipe,
    RoutesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [AirportService, RoutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
