import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculos } from 'src/app/Modelo/Vehiculos';
import{ServiceService}from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  vehiculos!: Vehiculos[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getVehiculos().subscribe(data=>{
      this.vehiculos=data;
    });

  }
  //metodo editar que guarda el id en una variable de el vehiculo que vamos a editar para mostrar luego los datos de este en nuestro html
  Editar(vehiculos:Vehiculos):void{
    localStorage.setItem("id",vehiculos.id_vehiculo.toString());
    this.router.navigate(["editar"]);
  }
  //metodo del boton eliminar. llama al metodo de servicios para eliminar un vehiculo 
  Delete(vehiculos:Vehiculos){
    this.service.deleteVehiculos(vehiculos).subscribe(data=>{
      this.vehiculos=this.vehiculos.filter(p=>p!==vehiculos);
      alert("Usuario eliminado!!!!");
    });

  }

}
