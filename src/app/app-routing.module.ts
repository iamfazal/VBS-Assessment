import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudiesCountComponent } from "./studies-count/studies-count.component";

const routes: Routes = [ 
  {path: "studies-count",component:StudiesCountComponent},
  { path: "", redirectTo: "/studies-count", pathMatch: "full" },
  { path: "**", redirectTo: "/studies-count", pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
