import{Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService{
    http:any;
    apiKey: String;
    conditionsUrl:String;
    constructor(){
        this.http=http;
        this.apiKey = 'd53811291fb21f65';
        this.conditionsUrl ='http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/';
    }
    getWeather(city,state){
        return this.http.get(this.conditionsUrl+'/'+state+'/'+city+'.json')
            .map(res=>res.json);
    }
}