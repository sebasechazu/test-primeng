import { Routes } from '@angular/router';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { DatosAcademicosComponent } from './components/datos-academicos/datos-academicos.component';
import { DireccionProfesionalComponent } from './components/direccion-profesional/direccion-profesional.component';

export const routes: Routes = [
    { path: '', redirectTo: 'datos-personales', pathMatch: 'full' },
    { path: 'datos-personales', component: DatosPersonalesComponent },
    { path: 'datos-academicos', component: DatosAcademicosComponent },
    { path: 'direccion-profesional', component: DireccionProfesionalComponent }
];