import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelo/User';
import{ServiceService}from '../../Service/service.service'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  user!: User[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.Listarbyid();
    
  }
 
    Listarbyid(){
      let id=localStorage.getItem("id");
      this.service.getByid(+id).subscribe(data=>{
        this.user=data;
      });
    }
    Delete(user:User){
      this.service.deletetel(this.user).subscribe(data=>{
        this.user=this.user.filter(p=>p!==user);
        alert("Datos eliminado!!!!");
      });
     
  
    }

}
