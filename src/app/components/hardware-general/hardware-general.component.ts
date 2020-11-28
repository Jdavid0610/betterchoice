import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, Input } from '@angular/core';
import { from } from 'rxjs';
import { ConexionService } from '../../services/conexion/conexion.service'
import { AddBoxesService } from '../../services/addBoxes/add-boxes.service'
import { DynamycHostDirective } from '../../directive/dynamyc-host.directive'
@Component({
  selector: 'app-hardware-general',
  templateUrl: './hardware-general.component.html',
  styleUrls: ['./hardware-general.component.scss']
})
export class HardwareGeneralComponent implements OnInit {
  @ViewChild(DynamycHostDirective, {static: true}) boxHost: DynamycHostDirective;
  link:String;

  constructor(public conexionService:ConexionService, public addBS: AddBoxesService) {

   }

  ngOnInit(): void {

  }


  sendSearch(Sbrand:String, sModel:String, sPrice_max:number){
    const sItem = {
      brand: Sbrand,
      model: sModel,
      price_max: sPrice_max
    }
    this.conexionService.SendData(sItem).subscribe(item => {
      this.link=item.URL;
      let cf =this.addBS.getbox(item);
      let vcr = this.boxHost.viewContainerRef;
      vcr.createComponent(cf,0)
    });
  }
}
