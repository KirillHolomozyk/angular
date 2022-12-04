import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LastPageComponent } from './components/last-page/last-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { ThirdPageComponent } from './components/third-page/third-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'hierarchy', component: SecondPageComponent},
  {path: 'machinary', component: ThirdPageComponent},
  {path: 'info', component: LastPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
