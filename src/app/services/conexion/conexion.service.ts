import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { Item } from '../../interfaces/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private urlBack='http://127.0.0.1:8000/betterchoise/ASearch';
  itemData:Item;
  httpHeaders: HttpHeaders = new HttpHeaders({
    'content-type': 'application/json',
  });
  constructor(private httpClient: HttpClient, public router : Router, public ngZone: NgZone) {
    
  }
  
  SendData(item:Item):Observable<Item>{
    return this.httpClient.post<Item>(this.urlBack,item,{headers:this.httpHeaders})
  }
}
