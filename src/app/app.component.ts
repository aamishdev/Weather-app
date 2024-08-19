import { Component } from '@angular/core';
import { WeatherServiceService } from './_services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'WeatherAPI';
  city: string = '';
  weatherData: any;

  constructor(private weather: WeatherServiceService) {}

  getWeatherData() {
    this.weather
      .getWeatherData(this.city)
      .then((data) => {
        this.weatherData = data;
      })
      .catch((error) => {
        console.error('Error Fetching Weather Data:', error);
      });
    this.city = '';
  }
}
