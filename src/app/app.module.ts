import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { KelvinToCelsiusPipe } from './pipes/kelvin-to-celsius.pipe';
import { WindSpeedConverterPipe } from './pipes/wind-speed-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KelvinToCelsiusPipe,
    WindSpeedConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
