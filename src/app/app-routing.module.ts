import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YelpersComponent } from './yelpers/yelpers.component';



const routes: Routes = [
  {path: '', component: YelpersComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
