import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SelecionarSistemaComponent } from './selecionar-sistema/selecionar-sistema.component';

@NgModule({
  declarations: [IndexComponent, SelecionarSistemaComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SelecionarSistemaComponent
  ]
})
export class DefaultModule { }
