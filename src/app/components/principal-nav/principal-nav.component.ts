import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../../services/auth/auth.service";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-principal-nav',
  templateUrl: './principal-nav.component.html',
  styleUrls: ['./principal-nav.component.scss']
})
export class PrincipalNavComponent implements OnInit {

  constructor(public httpClient: HttpClient, public authService:AuthService) { }

  ngOnInit(): void {
  }

}
