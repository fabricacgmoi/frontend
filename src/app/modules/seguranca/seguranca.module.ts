import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './authentication/login/login.component';
import { EsqueciMinhaSenhaComponent } from './authentication/esqueci-minha-senha/esqueci-minha-senha.component';

@NgModule({
  declarations: [LoginComponent, EsqueciMinhaSenhaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    EsqueciMinhaSenhaComponent
	]
})
export class SegurancaModule { }
