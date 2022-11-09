import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicosComponent } from '../template/basicos/basicos.component';
import { DinamicosComponent } from '../template/dinamicos/dinamicos.component';
import { SwitchesComponent } from '../template/switches/switches.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'basicos', component: BasicosComponent},
      {path:'dinamicos', component: DinamicosComponent},
      {path:'switches', component:SwitchesComponent},
      {path:'**',redirectTo: 'basicos'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
