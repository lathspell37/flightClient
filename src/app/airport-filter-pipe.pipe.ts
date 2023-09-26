import { Pipe, PipeTransform } from '@angular/core';
import { Airport } from './airport';

@Pipe({
  name: 'airportFilterPipe'
})
export class AirportFilterPipePipe implements PipeTransform {

  transform(list : Airport[],searchText: string): any {

    if (!list){
      return [];
    }
    if(!searchText){
      return list;
    }
    console.log(searchText);
    console.log(list);
    
    searchText = searchText.toLocaleLowerCase();
    list = list.filter(e=>{
      return e.city?.toLocaleLowerCase().includes(searchText);
    })
    
    return list;
  }

}
