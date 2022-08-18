import { NgIfContext } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.component.html',
  styleUrls: ['./movimentacoes.component.css']
})
export class MovimentacoesComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  list = (): Observable<Object> => {
    return this.http.get("/api/Movimentacao/List", 
    {
      headers:
      {
        'Content-Type': "application/json"
      }
    })
  }
}
