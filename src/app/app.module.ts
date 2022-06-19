import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './User/listar/listar.component';
import { AddComponent } from './User/add/add.component';
import { EditarComponent } from './User/editar/editar.component';
import{ FormsModule }from '@angular/forms';
import{ ServiceService }from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';
import { AddTelComponent } from './User/add-tel/add-tel.component';
import { AddemailsComponent } from './User/addemails/addemails.component';
import { InfoComponent } from './User/info/info.component';
import { BuscarComponent } from './User/buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditarComponent,
    AddTelComponent,
    AddemailsComponent,
    InfoComponent,
    BuscarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
