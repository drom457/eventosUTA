import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConferencistaComponent } from './conferencista/conferencista.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AuspicianteComponent } from './auspiciante/auspiciante.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ConferenciaComponent } from './conferencia/conferencia.component';
import { PresentacionHibrida } from '../models/presentacionHibrida';



const APP_ROUTES: Routes = [
    { path: 'index', component: HomeComponent },
    { path: 'conferencista', component: ConferencistaComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'auspiciante', component: AuspicianteComponent },
    { path: 'presentacionConferencia', component: PresentacionComponent },
    { path: 'conferencia', component: ConferenciaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'index'},
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class APP_ROUTING {}
