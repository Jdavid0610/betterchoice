import { ComponentFactoryResolver, Injectable} from '@angular/core';
import { BoxComponent } from '../../components/box/box.component'
import { Item } from '../../interfaces/item'

@Injectable({
  providedIn: 'root'
})
export class AddBoxesService {
  constructor(/*private cfr: ComponentFactoryResolver*/) { }
  vecesSolicitada:number=0;
  dataSolicitada(){
    var item=JSON.parse(sessionStorage.getItem('item'.concat(this.vecesSolicitada.toString())));
    this.vecesSolicitada++;
    return item;
  }
  reiniciarSolicitudes(){
    this.vecesSolicitada=0;
  }
  /*getbox(item:Item) {
    sessionStorage.setItem('item',JSON.stringify(item));
    let cf = this.cfr.resolveComponentFactory(BoxComponent);
    return cf;
  }*/
}
