import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Vehiculos/listar/listar.component';
import { AddComponent } from './Vehiculos/add/add.component';
import { EditarComponent } from './Vehiculos/editar/editar.component';
import{ FormsModule }from '@angular/forms';
import{ ServiceService }from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditarComponent
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
