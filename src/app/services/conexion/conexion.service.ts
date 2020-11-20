import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { Item } from '../../interfaces/item';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  itemData:any;
  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }
  constructor(private httpClient: HttpClient, public router : Router, public ngZone: NgZone) {
    
  }
  
  SendData(brand:String,model:String,price_max:number,use:String){
     /*this.itemData.brand=brand;
     this.itemData.model=model;
     this.itemData.price=price_max;
     this.itemData.use=use;*/
     this.itemData={
       'brand':brand,
       'model':model,
       'price':price_max,
       'use':use
     };
     localStorage.setItem('item',JSON.stringify(this.itemData));
     const item=localStorage.getItem('item');
    this.httpClient.post('http://127.0.0.1:8000/betterchoise/mensaje',this.itemData).subscribe((res)=>{
      console.log(res);
    });
  }

}
