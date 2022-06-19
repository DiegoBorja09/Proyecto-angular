import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelo/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
  }
  user:User=new User

  //metodo guardar que invoca al metodo createVehiculo de servicios para agregar un registro a la base de datos 
  Guardar(){
    this.service.createUser(this.user).subscribe(data=>{
      alert(data);
      this.router.navigate(["listar"]);
    })
  }
  

}
