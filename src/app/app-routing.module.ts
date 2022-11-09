import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'template',loadChildren: () => import('./template/template.module').then(e => e.TemplateModule)},
  {path:'reactive',loadChildren: () => import('./reactive/reactive.module').then(e => e.ReactiveModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
