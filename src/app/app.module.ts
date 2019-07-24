import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localEC from '@angular/common/locales/es-EC';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEC,'es-EC');

//Rutas
import { APP_ROUTING } from './app.routes';
import { AgmCoreModule } from '@agm/core';

//Servicios

//Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConferencistaComponent } from './conferencista/conferencista.component';
import { FinPaginaComponent } from './fin-pagina/fin-pagina.component';
import { AuspicianteComponent } from './auspiciante/auspiciante.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ConferenciaComponent } from './conferencia/conferencia.component';
import { InformacionComponent } from './informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConferencistaComponent,
    FinPaginaComponent,
    AuspicianteComponent,
    GaleriaComponent,
    PresentacionComponent,
    ConferenciaComponent,
    InformacionComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6syAP6SuTVqiM96728suvOit824GgzGM'
    }),
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-EC'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
