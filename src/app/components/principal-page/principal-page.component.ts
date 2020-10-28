import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../../services/auth/auth.service";
@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss']
})
export class PrincipalPageComponent implements OnInit {
  datos:any;
  
  constructor(public httpClient: HttpClient, public authService:AuthService) { 
    this.datos={'username':'', 'email':''};
  }

  consulta(num:number){
    const url = "http://127.0.0.1:8000/users/"+num;
    console.log(url);
    
    this.httpClient.get(url).subscribe((res) => {
      this.datos=res;
    });
  }

  ngOnInit(): void {
  }

}
