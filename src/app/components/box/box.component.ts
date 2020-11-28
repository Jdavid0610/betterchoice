import { Component, OnInit, Inject, Input } from '@angular/core';
import {Item} from '../../interfaces/item'
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  item:Item;
  constructor() {

  }

  ngOnInit(): void {
    this.item= JSON.parse(sessionStorage.getItem('item'));
  }

}
