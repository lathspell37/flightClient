import { Component } from '@angular/core';
import { Airport } from '../airport';
import { AirportService } from '../airport/airport.service';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css'],
})
export class AirportListComponent {
  display = "none";
  editDisplay="none";
  airports: Airport[]
  crAirport = new Airport();
  edAirport = new Airport();
  showAlert=false;
  showEditAlert=false;
  constructor(private airportService:AirportService){}

  ngOnInit(){

    this.airportService.getAllAirportList().subscribe((response: any) => {
      this.airports=response;
    })

  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  openEditModal(id: number=-1) {
    this.airportService.getAirport(id).subscribe((response: any)=>{
      this.edAirport = response;
    })
    this.editDisplay = "block";
  }
  onCloseHandledEdit() {
    this.editDisplay = "none";
  }
  saveAirport(){
    this.airportService.createAirport(this.crAirport).subscribe((response)=>{
      console.log(response);
      this.crAirport = new Airport();
      this.showAlert=true;
    })
  }

  editAirport(){
    if (this.edAirport.id != null) {
      this.airportService.updateAirport(this.edAirport, this.edAirport.id).subscribe((response)=>{        
        this.edAirport=new Airport();
        this.showEditAlert=true;
      })
    }

  }

  deleteAirport(id: number= -1){
    this.airportService.deleteAirport(id).subscribe((response)=>{
      this.airports = this.airports.filter((e: any) => {
        return id!=e.id;
      })
    })
  }

  closeAlert(){
    this.showAlert=false;
  }
  closeEditAlert(){
    this.showEditAlert=false;
  }
}
