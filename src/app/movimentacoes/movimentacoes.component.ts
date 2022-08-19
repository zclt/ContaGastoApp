import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movimentacao } from '../models/movimentacao';
import { PagedList } from '../models/paged-list';
import { Saldo } from '../models/saldo';

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.component.html',
  styleUrls: ['./movimentacoes.component.css']
})
export class MovimentacoesComponent implements OnInit {  
  items: Movimentacao[] = []
  saldo: Saldo | undefined
  loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAll()
    this.getSaldo()
  }

  getAll() {
    this.loading = true
    this.http.get<PagedList<Movimentacao>>("/api/Movimentacao/all?size=100")
    .subscribe({
      next: (response)  => { this.items = response.items; }, 
      error: (e) => this.loading = false, 
      complete: () => this.loading = false 
    })
  }

  getSaldo() {
    this.loading = true
    this.http.get<Saldo>("/api/Movimentacao/saldo")
    .subscribe({
      next: (response)  => { this.saldo = response; }, 
      error: (e) => this.loading = false, 
      complete: () => this.loading = false 
    })
  }

  getEntradas() {
    this.loading = true
    this.http.get<Movimentacao[]>("/api/Movimentacao/entradas")
    .subscribe({
      next: (response)  => { this.items = response; }, 
      error: (e) => this.loading = false, 
      complete: () => this.loading = false 
    })
  }

  getSaidas() {
    this.loading = true
    this.http.get<Movimentacao[]>("/api/Movimentacao/saidas")
    .subscribe({
      next: (response)  => { this.items = response; }, 
      error: (e) => this.loading = false, 
      complete: () => this.loading = false 
    })
  }
}
