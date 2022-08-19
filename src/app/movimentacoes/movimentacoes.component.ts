import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movimentacao } from '../models/movimentacao';
import { PagedList } from '../models/paged-list';

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.component.html',
  styleUrls: ['./movimentacoes.component.css']
})
export class MovimentacoesComponent implements OnInit {  
  items: Movimentacao[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.http.get<PagedList<Movimentacao>>("/api/Movimentacao/all")
    .subscribe(response => { this.items = response.items; })
  }
}
