import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculos } from 'src/app/Modelo/Vehiculos';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  vehiculos:Vehiculos=new Vehiculos();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  //metodo editar que recibe un id y lo guarda en una variable para de esta manera mostrar los datos del objeto en nuestro html 
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getVehiculosId(+id).subscribe(data=>{
      this.vehiculos=data;
    })

  }
  //metodo actualizar que invoca el metodo update vehiculos para actualizar nuestro objeto 
  Actualizar(){
    this.service.updateVehiculos(this.vehiculos).subscribe(data=>{
      this.vehiculos=data;
      alert("Se actualizo con exito!!!!");
      this.router.navigate(["listar"])
    })
  }

}
