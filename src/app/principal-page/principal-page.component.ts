import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss']
})
export class PrincipalPageComponent implements OnInit {
  datos:any;
  
  constructor(public httpClient: HttpClient) { 
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
