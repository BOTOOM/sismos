import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import de componentes 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { ContactoComponent } from './pages/home/contacto/contacto.component';
import { TopnewsComponent } from './pages/home/topnews/topnews.component';
import { NewsComponent } from './pages/news/news.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { GruposDeInteresComponent } from './pages/grupos-de-interes/grupos-de-interes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    ContactoComponent,
    TopnewsComponent,
    NewsComponent,
    QuienesSomosComponent,
    EventosComponent,
    GruposDeInteresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
