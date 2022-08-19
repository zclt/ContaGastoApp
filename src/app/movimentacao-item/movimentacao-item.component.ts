import { Component, Input, OnInit } from '@angular/core';
import { Movimentacao } from '../models/movimentacao';

@Component({
  selector: 'app-movimentacao-item',
  templateUrl: './movimentacao-item.component.html',
  styleUrls: ['./movimentacao-item.component.css']
})
export class MovimentacaoItemComponent implements OnInit {

  @Input()
  movimentacao?: Movimentacao

  constructor() {}

  ngOnInit(): void {}
}
