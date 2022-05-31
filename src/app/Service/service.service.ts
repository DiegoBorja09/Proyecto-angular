import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {Vehiculos} from '../Modelo/Vehiculos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

//capa de servicios donde se encuentra las operaciones del crud y conecta con nuestra backend

  constructor(private http:HttpClient) { }
//url que pasa nuestro backend y lo enlaza al proyecto frontend

  url="http://localhost:8080/api/vehiculos";

  //obtener vehiculos trayendolo desde nuestro backedn
  getVehiculos(){
    return this.http.get<Vehiculos[]>(this.url);
  }
// crear vehiculo y enviarlo a nuestro backend con el metodo post
  createVehiculo(vehiculos:Vehiculos){
    return this.http.post<Vehiculos>(this.url,vehiculos);
  }
  //obtener vehiculo mediante el id trayendolo desde nuestro backedn
  getVehiculosId(id:number){
    return this.http.get<Vehiculos>(this.url+"/"+id);
  }
  //actualizar nuestro vehiculo y enviarlo actualizado a nuestro backend
  updateVehiculos(vehiculos:Vehiculos){
    return this.http.put<Vehiculos>(this.url+"/"+vehiculos.id_vehiculo,vehiculos);
  }
  //eliminar vehiculo mediante su id enviado al backend
  deleteVehiculos(vehiculos:Vehiculos){
    return this.http.delete<Vehiculos>(this.url+"/"+vehiculos.id_vehiculo);
  }
}
