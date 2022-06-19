import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './User/add/add.component';
import { EditarComponent } from './User/editar/editar.component';
import { ListarComponent } from './User/listar/listar.component';
import { AddTelComponent } from './User/add-tel/add-tel.component';
import { AddemailsComponent} from './User/addemails/addemails.component';
import {InfoComponent} from './User/info/info.component';
import {BuscarComponent} from './User/buscar/buscar.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'editar',component:EditarComponent},
  {path:'addtel',component:AddTelComponent},
  {path:'addemail',component:AddemailsComponent},
  {path:'info',component:InfoComponent},
  {path:'buscar',component:BuscarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
