import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Inject, Input, Output, inject } from '@angular/core';
import { from } from 'rxjs';
import {Item} from '../../interfaces/item'
import {AddBoxesService} from '../../services/addBoxes/add-boxes.service'
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  item:Item;
  constructor(private addBoxes:AddBoxesService) {
    
  }

  
  ngOnInit(): void {
    this.item=this.addBoxes.dataSolicitada();
  }

}
