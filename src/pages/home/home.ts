import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  location:{
    city:string,
  }
  constructor(public navCtrl: NavController,
    private weatherProvider:WeatherProvider) {

  }
  ionViewWillEnter(){
    this.location = {
      city : "kolar"
    }
    this.weatherProvider.getWeather(this.location.city,).subscribe(weather => {
      console.log(weather);

    console.log("the location is:"+weather.location.name);
    console.log("the location is:"+weather.location.region);
    console.log("the location is:"+weather.location.country);
  });
  }

  // location_name=weather.location.name;

}
