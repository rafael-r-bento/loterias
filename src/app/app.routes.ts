import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoteriaComponent } from './loteria/loteria.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'maismilionaria', component: LoteriaComponent },
  { path: 'megasena', component: LoteriaComponent },
  { path: 'lotofacil', component: LoteriaComponent },
  { path: 'quina', component: LoteriaComponent },
  { path: 'lotomania', component: LoteriaComponent },
  { path: 'timemania', component: LoteriaComponent },
  { path: 'duplasena', component: LoteriaComponent },
  { path: 'federal', component: LoteriaComponent },
  { path: 'diadesorte', component: LoteriaComponent },
  { path: 'supersete', component: LoteriaComponent }
];
