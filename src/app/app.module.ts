import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


// import tema matarial
import { MaterialModule } from './temas/material/material.module';


// import mdb
import { MDBBootstrapModule } from 'angular-bootstrap-md';


// import api google maps
import { AgmCoreModule } from '@agm/core';

// servicio de noticias
import { TopnewsService } from './services/topnews.service';


// import de componentes 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDv_NF3NRZyDg5UjDb5I-0LobD-eXtfIaQ'
    }),
    BrowserAnimationsModule
  ],
  providers: [
    TopnewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
