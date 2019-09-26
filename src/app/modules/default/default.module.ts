import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SelecionarSistemaComponent } from './selecionar-sistema/selecionar-sistema.component';
<<<<<<< HEAD
import { CadastroBasicoComponent } from './cadastro-basico/cadastro-basico.component';
import { CadastroAbasComponent } from './cadastro-abas/cadastro-abas.component';
import { CadastroModalComponent } from './cadastro-modal/cadastro-modal.component';
import { CadastroWizardComponent } from './cadastro-wizard/cadastro-wizard.component';
import { AlterarBasicoComponent } from './alterar-basico/alterar-basico.component';
import { AlterarAbasComponent } from './alterar-abas/alterar-abas.component';
import { AlterarModalComponent } from './alterar-modal/alterar-modal.component';
import { AlterarWizardComponent } from './alterar-wizard/alterar-wizard.component';

@NgModule({
  declarations: [IndexComponent, SelecionarSistemaComponent, CadastroBasicoComponent, CadastroAbasComponent, CadastroModalComponent, CadastroWizardComponent, AlterarBasicoComponent, AlterarAbasComponent, AlterarModalComponent, AlterarWizardComponent],
=======

@NgModule({
  declarations: [IndexComponent, SelecionarSistemaComponent],
>>>>>>> 8804c95f290cc8ffff0c0480963d665ecb84096b
  imports: [
    CommonModule
  ],
  exports:[
    SelecionarSistemaComponent
  ]
})
export class DefaultModule { }
