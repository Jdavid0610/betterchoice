import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  request;

  constructor(public httpClient: HttpClient) { 
    
  }
  
  consulta(path) {
    this.httpClient.get('http://127.0.0.1:8000/betterchoise/'+path).subscribe((res) => {
      console.log(res);
      this.request = res;
    });
  }

  ngOnInit(): void {
   this.request={'mensaje':'respuesta de la conexion'}; 
  }

}
