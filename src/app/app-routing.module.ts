import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './User/add/add.component';
import { EditarComponent } from './User/editar/editar.component';
import { ListarComponent } from './User/listar/listar.component';


const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'editar',component:EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
