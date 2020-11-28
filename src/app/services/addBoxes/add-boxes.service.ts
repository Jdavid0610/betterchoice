import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { from } from 'rxjs';
import { BoxComponent } from '../../components/box/box.component'
import { Item } from '../../interfaces/item'

@Injectable({
  providedIn: 'root'
})
export class AddBoxesService {

  constructor(private cfr: ComponentFactoryResolver) { }
  getbox(item:Item){
    sessionStorage.setItem('item',JSON.stringify(item));
    let cf = this.cfr.resolveComponentFactory(BoxComponent);
    return cf;
  }
}
