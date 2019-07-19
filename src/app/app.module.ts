import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

//Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConferencistaComponent } from './conferencista/conferencista.component';
import { FinPaginaComponent } from './fin-pagina/fin-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConferencistaComponent,
    FinPaginaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
