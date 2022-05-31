import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculos } from 'src/app/Modelo/Vehiculos';
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
  vehiculos:Vehiculos=new Vehiculos

  //metodo guardar que invoca al metodo createVehiculo de servicios para agregar un registro a la base de datos 
  Guardar(){
    this.service.createVehiculo(this.vehiculos).subscribe(data=>{
      alert("se Agrego con Exito!!!!");
      this.router.navigate(["listar"]);
    })
  }
  

}
