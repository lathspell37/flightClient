import {Routes} from "./routes"
export class Flights {

    id?:number;
    flightNumber?:string;
    route?: Routes = new Routes();
    price?: number;
    departureTime?: Date;
    arrivalTime?: Date;
    capacity?: number;
    status?: string;


}
