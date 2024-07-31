import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardComponent} from "./elearning/Components/card-book-video/card.component";

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component: CardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
