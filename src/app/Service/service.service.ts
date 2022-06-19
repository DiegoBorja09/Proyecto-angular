import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {User} from '../Modelo/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

//capa de servicios donde se encuentra las operaciones del crud y conecta con nuestra backend

  constructor(private http:HttpClient) { }
//url que pasa nuestro backend y lo enlaza al proyecto frontend

  url="http://localhost:4000/api/users";

  //obtener User trayendolo desde nuestro backedn
  getUser(){
    return this.http.get<User[]>(this.url);
  }
  getUserbyid(id:number){
    return this.http.get<User[]>(this.url+"/"+id);
  }
  getUserall(){
    return this.http.get<User[]>(this.url+"/all");
  }
// crear user y enviarlo a nuestro backend con el metodo post
  createUser(user:User){
    return this.http.post<User>(this.url,user);
  }

  createTel(user:User){
    return this.http.post<User>(this.url+"/telefonos/"+user.id,user);
  }
  createemail(user:User){
    return this.http.post<User>(this.url+"/emails/"+user.id,user);
  }
  //obtener user mediante el id trayendolo desde nuestro backedn
  getByid(id:number){
    return this.http.get<User[]>(this.url+"/"+id);
  }
  getByiduser(id:number){
    return this.http.get<User[]>(this.url+"/actualizar/"+id);
  }
  getByname(nombre:string){
    return this.http.get<User[]>(this.url+"/nombre/"+nombre);
  }
  //actualizar nuestro user y enviarlo actualizado a nuestro backend
  updateUser(user:User[]){
    return this.http.put<User[]>(this.url+"/"+user[0].id,user[0]);
  }
  //eliminar user mediante su id enviado al backend
  deleteUser(user:User){
    return this.http.delete<User>(this.url+"/"+user.id);
  }
  deletetel(user:User[]){
    return this.http.delete<User>(this.url+"/telefonos/"+user[0].id);
  }
  
  
}
