import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Routes } from '../routes'


@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http:HttpClient) { }
  baseUrl = environment.API_BASE_URL.baseUrl;
  createRoute(routes: Routes, sourceId:any, destId:any){
    return this.http.post(this.baseUrl + "/api/v1/routes/" + sourceId + "/" + destId, routes)
  }

  updateRoute(routes: Routes, sourceId:any, destId:any){
    return this.http.put(this.baseUrl + "/api/v1/routes/"+ sourceId + "/" + destId, routes)
  }

  getRoutesList(){
    return this.http.get<Routes[]>(this.baseUrl + "/api/v1/routes")
  }

  getRoute(id:number){
    return this.http.get(this.baseUrl + "/api/v1/routes/" + id)
  }

  deleteRoute(id:number){
    return this.http.delete(this.baseUrl + "/api/v1/routes/" + id)
  }
}
