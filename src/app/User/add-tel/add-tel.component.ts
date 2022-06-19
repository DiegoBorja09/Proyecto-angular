import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelo/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-tel',
  templateUrl: './add-tel.component.html',
  styleUrls: ['./add-tel.component.css']
})
export class AddTelComponent implements OnInit {
  user:User=new User
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    let id=localStorage.getItem("id");
    this.user.id=parseInt(id!);
  }
  
 
  Guardar(){
    this.service.createTel(this.user).subscribe(data=>{
      this.user=data;
      alert(data);
      this.router.navigate(["listar"]);
    })
  }

}
