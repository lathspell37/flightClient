import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airport } from '../airport';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http:HttpClient) { }

  baseUrl=environment.API_BASE_URL.baseUrl;

  createAirport(airport: Airport){
    return this.http.post(this.baseUrl + "/api/v1/airports", airport)
  }

  updateAirport(airport: Airport, id:number){
    return this.http.put(this.baseUrl + "/api/v1/airports/" + id, airport)
  }

  getAllAirportList(){
    return this.http.get(this.baseUrl + "/api/v1/airports")
  }

  getAirport(id: number){
    return this.http.get(this.baseUrl + "/api/v1/airports" + "/" + id)
  }

  deleteAirport(id: number){
    return this.http.delete(this.baseUrl + "/api/v1/airports" + "/" + id)
  }
}
