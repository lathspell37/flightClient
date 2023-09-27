import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flights } from '../flights';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor( private http:HttpClient ) { }

  baseUrl=environment.API_BASE_URL.baseUrl;

  createFlight(flight: Flights, id:number){
    return this.http.post(this.baseUrl + "/api/v1/flights/" + id , flight)
  }

  updateFlight(flight: Flights, id:number, route_id:number){
    return this.http.put(this.baseUrl + "/api/v1/flight/" + id + "/" + route_id, flight)
  }

  getAllFlightList(){
    return this.http.get<Flights[]>(this.baseUrl + "/api/v1/flights")
  }

  getFlight(id: number){
    return this.http.get(this.baseUrl + "/api/v1/flights" + "/" + id)
  }

  deleteFlight(id: number){
    return this.http.delete(this.baseUrl + "/api/v1/flight/" + id)
  }

}
