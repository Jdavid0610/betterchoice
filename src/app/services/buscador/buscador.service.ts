import { ComponentFactoryResolver, Injectable, ViewChild } from '@angular/core';
import { DynamycHostDirective } from 'src/app/directive/dynamyc-host.directive';
import { AddBoxesService } from '../addBoxes/add-boxes.service';
import { ConexionService } from '../conexion/conexion.service';
import { BoxComponent } from '../../components/box/box.component';
import { Item } from '../../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  @ViewChild(DynamycHostDirective, {static: true}) boxHost: DynamycHostDirective;
  constructor(public conexionService:ConexionService,private cfr: ComponentFactoryResolver, private limpiar:AddBoxesService) {

   }
  sendSearch(Sbrand?:String, sModel?:String, sPrice_max?:number,sPrice_min?:number,){
    const sItem = {
      brand: Sbrand,
      model: sModel,
      price_max: sPrice_max,
      price_min:sPrice_min
    }
    this.conexionService.SendData(sItem).subscribe(item => {
      this.limpiar.reiniciarSolicitudes();
      sessionStorage.clear();
      this.boxHost.viewContainerRef.clear();
      var items=item["items"];
      for (const key in items) {
        this.createComponents(items[key],key);
      }
    });
  }

  createComponents(items:Item,i:string){
    sessionStorage.setItem('item'.concat(i),JSON.stringify(items));
    let cf = this.cfr.resolveComponentFactory(BoxComponent);
    let vcr = this.boxHost.viewContainerRef;
    vcr.createComponent(cf,0);
  }
}
