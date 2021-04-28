import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';

const routes: Routes = [
  {
    path: '**', component: CountriesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
