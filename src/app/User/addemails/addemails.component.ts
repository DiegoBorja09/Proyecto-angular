import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelo/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-addemails',
  templateUrl: './addemails.component.html',
  styleUrls: ['./addemails.component.css']
})
export class AddemailsComponent implements OnInit {
  user:User=new User;
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    let id=localStorage.getItem("id");
    this.user.id=parseInt(id!);
  }
  Guardar(){
    this.service.createemail(this.user).subscribe(data=>{
      this.user=data;
      alert(data);
      this.router.navigate(["listar"]);
    })
  }
}
