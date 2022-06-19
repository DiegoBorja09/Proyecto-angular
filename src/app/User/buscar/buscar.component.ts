import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelo/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  user!: User[];
  constructor(private router:Router,private service:ServiceService) { }
  
  ngOnInit(): void {
   this.buscar()
  }

  buscar(){
    let nombre=localStorage.getItem("nombre");
    this.service.getByname(nombre!).subscribe(data=>{
      this.user=data;
    });
  }

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
