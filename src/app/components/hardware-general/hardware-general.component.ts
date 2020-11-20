import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion/conexion.service'
@Component({
  selector: 'app-hardware-general',
  templateUrl: './hardware-general.component.html',
  styleUrls: ['./hardware-general.component.scss']
})
export class HardwareGeneralComponent implements OnInit {


  constructor(public conexionService:ConexionService) {

   }

  ngOnInit(): void {
  }

}
