import { Component, OnInit } from '@angular/core';
import {Flights} from '../flights'
import { FlightsService } from '../flights/flights.service';
import { RoutesService } from '../routes/routes.service';
import { Routes } from '../routes';
import { Observable, interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit{

  display = "none";
  showAlert=false;
  displayEdit = "none";
  showAlertEdit=false;
  flights: Flights[];
  crFlight = new Flights();
  edFlight = new Flights();
  routes : Routes[];
  sourceCity: number
  pickDateTimeDep: Date
  pickDateTimeArr: Date

  constructor(private flightService:FlightsService, private routesService:RoutesService){}

  private updateSubscription: Subscription;

  ngOnInit(){
    this.getAllFlightsLise();
    this.updateSubscription = interval(3000).subscribe(
      (val) => { 
        this.getAllFlightsLise() 
      });
  }

  getAllFlightsLise(){
    this.flightService.getAllFlightList().subscribe((response:any)=>{
      this.flights=response;
    })

    this.routesService.getRoutesList().subscribe((response:any)=>{ 
      this.routes = response;       
      this.sourceCity = this.routes[0].id || 0     
    })
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  onCloseHandledEdit() {
    this.displayEdit = "none";
  }

  onDropSelectSource(a: any){ 
    this.sourceCity = a
    console.log(a)
  }

  saveFlight(){
    this.crFlight.arrivalTime = this.pickDateTimeArr
    this.crFlight.departureTime= this.pickDateTimeDep
    this.flightService.createFlight(this.crFlight, this.sourceCity).subscribe((response)=>{
      console.log(response);
      this.crFlight = new Flights();
      this.showAlert=true;
      this.getAllFlightsLise()
      this.onCloseHandled()
    })
  }

  editFlight(){
    if (this.edFlight.id!=null){
      this.flightService.updateFlight(this.edFlight, this.edFlight.id, this.sourceCity).subscribe((response)=>{
        this.onCloseHandledEdit()
        this.getAllFlightsLise()
      })
      
    }

  }
  editFlightModal(id:number=-1){
    this.flightService.getFlight(id).subscribe((response: any)=>{
      this.edFlight = response;
      this.sourceCity = response.route.source.id
    })  
    this.displayEdit="block";
  }
  deleteFLight(id: number= -1){
    this.flightService.deleteFlight(id).subscribe((response)=>{
      this.getAllFlightsLise();
    })
  }

  closeAlert(){
    this.showAlert=false;
  }
  closeAlertEdit(){
    this.showAlertEdit=false;
  }

 
}
