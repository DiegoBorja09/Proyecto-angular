import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelo/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  user!: User[];
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  //metodo editar que recibe un id y lo guarda en una variable para de esta manera mostrar los datos del objeto en nuestro html 
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getByiduser(+id).subscribe(data=>{
    this.user=data;
      
    })
  }
  //metodo actualizar que invoca el metodo update user para actualizar nuestro objeto 
  Actualizar(){
    this.service.updateUser(this.user).subscribe(data=>{
      this.user=data;
      alert("Se actualizo con exito!!!!");
      this.router.navigate(["listar"])
    })
  }

}
