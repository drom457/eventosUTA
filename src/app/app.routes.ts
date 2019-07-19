import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConferencistaComponent } from './conferencista/conferencista.component';

const APP_ROUTES: Routes = [
    { path: 'index', component: HomeComponent },
    { path: 'conferencista', component: ConferencistaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'index'},
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class APP_ROUTING {}
