import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tcc';

  constructor(private router:Router){}

//metodo del boton que nos redirecciona a el html de listar
  Listar(){
    this.router.navigate(["listar"])
  }
//metodo del boton que nos redirecciona a el html de add/agregar
  Nuevo(){
    this.router.navigate(["add"])
  }
}
