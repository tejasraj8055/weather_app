import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = "07ad72333ec645c880b65306212102LIVE";
  url ;
  // http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = "http://api.weatherapi.com/v1/current.json?key='+this.apiKey+'&q=";
  }

  getWeather( city){
    return this.http.get("http://api.weatherapi.com/v1/current.json?key=07ad72333ec645c880b65306212102&q=kolar").map(res=>res);
  }

}
