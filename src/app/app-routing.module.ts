import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { MovimentacoesComponent } from './movimentacoes/movimentacoes.component';
import { PendentesComponent } from './pendentes/pendentes.component';

const routes: Routes = [
  {
    path: 'movimentacoes',
    component: MovimentacoesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pendentes',
    component: PendentesComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
