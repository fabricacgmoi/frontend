import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IndexComponent} from  './modules/default/index/index.component';
import {DefaultModule} from './modules/default/default.module';
import {SelecionarSistemaComponent} from './modules/default/selecionar-sistema/selecionar-sistema.component';
import {SegurancaModule} from './modules/seguranca/seguranca.module';
import {LoginComponent} from './modules/seguranca/authentication/login/login.component';
import {EsqueciMinhaSenhaComponent} from './modules/seguranca/authentication/esqueci-minha-senha/esqueci-minha-senha.component';


const routes: Routes = [

  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'esqueci-minha-senha', component: EsqueciMinhaSenhaComponent, pathMatch: 'full' },
  { path: 'selecionar-sistema', component: SelecionarSistemaComponent, pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes), DefaultModule, SegurancaModule],
  exports: [RouterModule, DefaultModule, SegurancaModule]
})
export class AppRoutingModule { }
