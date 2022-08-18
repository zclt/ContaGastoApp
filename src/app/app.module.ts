import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovimentacoesComponent } from './movimentacoes/movimentacoes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { PendentesComponent } from './pendentes/pendentes.component';


@NgModule({
  declarations: [
    AppComponent,
    MovimentacoesComponent,
    PendentesComponent
  ],
  imports: [
    AuthModule.forRoot({
      domain: 'zclt-dev.us.auth0.com',
      clientId: 'yEtu6w9d4ydoMHygcK3D9ISkDqBjcsev'
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true   
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
