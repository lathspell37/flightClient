import { Component, OnInit } from '@angular/core';
import {Routes} from '../routes'
import { RoutesService } from '../routes/routes.service';
import { AirportService } from '../airport/airport.service';
import { Airport } from '../airport';

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.css']
})
export class RoutesListComponent implements OnInit {
  display = "none";
  displayEdit = "none";
  sourceId: number
  destId: number

  routes:Routes[];
  crRoutes= new Routes();
  edRoutes= new Routes();
  airport: Airport[]
  showAlert=false;
  showEditAlert=false;
  constructor(private routesService:RoutesService,private airportService:AirportService){}
  ngOnInit() {

    this.getAllRoutesLise()
    this.airportService.getAllAirportList().subscribe((response:any)=>{
      this.airport = response;
      this.destId = response[0].id
      this.sourceId = response[0].id

    })


  }
 
  getAllRoutesLise(){
    this.routesService.getRoutesList().subscribe((response:any)=>{ 
      this.routes = response;      
    })
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  
  openEditModal(id: number=-1) {
        this.displayEdit = "block";
        this.routesService.getRoute(id).subscribe((response :any)=>{
          this.sourceId=response.source.id;
          this.destId=response.destination.id;
          this.edRoutes.distance=response.distance;
          this.edRoutes.id=id;
        })
  }
  onCloseHandledEdit() {
    this.displayEdit = "none";
  }
  
  onDropSelectSource(a: any){
    this.sourceId = a
  }

  onDropSelectDest(a: any){
    this.destId = a
  }

  saveRoutes(){
    this.routesService.createRoute(this.crRoutes, this.sourceId, this.destId).subscribe((response)=>{
      console.log(response);
      this.crRoutes = new Routes();
      this.showAlert=true;
      this.getAllRoutesLise()
      this.onCloseHandled()
    })
    }

    editRoutes(){
      this.routesService.updateRoute(this.edRoutes, this.sourceId, this.destId).subscribe((response)=>{
        console.log(response);
      })
    }

    deleteRoute(id: number= -1){
      this.routesService.deleteRoute(id).subscribe((response)=>{
        this.getAllRoutesLise();
      })
    }
  

    closeAlert(){
      this.showAlert=false;
    }
    closeEditAlert(){
      this.showEditAlert=false;
    }
  }


 