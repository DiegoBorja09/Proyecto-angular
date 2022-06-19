import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelo/User';
import{ServiceService}from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

 user!: User[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getUser().subscribe(data=>{
      this.user=data;
    });

  }
  //metodo editar que guarda el id en una variable de el user que vamos a editar para mostrar luego los datos de este en nuestro html
  Editar(user:User):void{
    localStorage.setItem("id",user.id.toString());
    this.router.navigate(["editar"]);
  }
  agregarTel(user:User):void{
    localStorage.setItem("id",user.id.toString());
    this.router.navigate(["addtel"]);
  }
  agregaremail(user:User):void{
    localStorage.setItem("id",user.id.toString());
    this.router.navigate(["addemail"]);
  }
  info(user:User):void{
    localStorage.setItem("id",user.id.toString());
    this.router.navigate(["info"]);
  }
  
  //metodo del boton eliminar. llama al metodo de servicios para eliminar un user 
  Delete(user:User){
    this.service.deleteUser(user).subscribe(data=>{
      this.user=this.user.filter(p=>p!==user);
      alert("Usuario eliminado!!!!");
    });

  }

}
