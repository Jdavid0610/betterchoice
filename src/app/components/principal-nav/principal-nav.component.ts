import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../../services/auth/auth.service";
import { HttpClient } from '@angular/common/http';
import{AddBoxesService } from '../../services/addBoxes/add-boxes.service';
import { Router } from "@angular/router";
import { from } from 'rxjs';
@Component({
  selector: 'app-principal-nav',
  templateUrl: './principal-nav.component.html',
  styleUrls: ['./principal-nav.component.scss']
})
export class PrincipalNavComponent implements OnInit {

  constructor(public httpClient: HttpClient, public authService:AuthService, public bs:AddBoxesService, public rt:Router) { }

  ngOnInit(): void {
  }
  search(solicitud:string){
    this.bs.cargarSolicitud(solicitud);
    this.rt.navigate['hwgeneral'];
  }
}
