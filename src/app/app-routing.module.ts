import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IndexComponent} from  './modules/default/index/index.component';
import {DefaultModule} from './modules/default/default.module';
import {SelecionarSistemaComponent} from './modules/default/selecionar-sistema/selecionar-sistema.component';
import {SegurancaModule} from './modules/seguranca/seguranca.module';
import {LoginComponent} from './modules/seguranca/authentication/login/login.component';
import {EsqueciMinhaSenhaComponent} from './modules/seguranca/authentication/esqueci-minha-senha/esqueci-minha-senha.component';
import { CadastroBasicoComponent } from './modules/default/cadastro-basico/cadastro-basico.component';
import { CadastroAbasComponent } from './modules/default/cadastro-abas/cadastro-abas.component';
import { CadastroModalComponent } from './modules/default/cadastro-modal/cadastro-modal.component';
import { CadastroWizardComponent } from './modules/default/cadastro-wizard/cadastro-wizard.component';
import { AlterarBasicoComponent } from './modules/default/alterar-basico/alterar-basico.component';
import { AlterarAbasComponent } from './modules/default/alterar-abas/alterar-abas.component';
import { AlterarModalComponent } from './modules/default/alterar-modal/alterar-modal.component';
import { AlterarWizardComponent } from './modules/default/alterar-wizard/alterar-wizard.component';


const routes: Routes = [

  { path: '', component: IndexComponent, pathMatch: 'full' },

  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'esqueci-minha-senha', component: EsqueciMinhaSenhaComponent, pathMatch: 'full' },
  { path: 'selecionar-sistema', component: SelecionarSistemaComponent, pathMatch: 'full' },

  { path: 'cadastro-basico', component: CadastroBasicoComponent, pathMatch: 'full' },
  { path: 'cadastro-abas', component: CadastroAbasComponent, pathMatch: 'full' },
  { path: 'cadastro-modal', component: CadastroModalComponent, pathMatch: 'full' },
  { path: 'cadastro-wizard', component: CadastroWizardComponent, pathMatch: 'full' },

  { path: 'alterar-basico', component: AlterarBasicoComponent},
  { path: 'alterar-abas', component: AlterarAbasComponent, pathMatch: 'full' },
  { path: 'alterar-modal', component: AlterarModalComponent, pathMatch: 'full' },
  { path: 'alterar-wizard', component: AlterarWizardComponent, pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes), DefaultModule, SegurancaModule],
  exports: [RouterModule, DefaultModule, SegurancaModule]
})
export class AppRoutingModule { }
