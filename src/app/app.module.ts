import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoGovernoFederalComponent } from './shared/components/layout/cabecalho-governo-federal/cabecalho-governo-federal.component';
import { CabecalhoSuframaComponent } from './shared/components/layout/cabecalho-suframa/cabecalho-suframa.component';
import { MenuComponent } from './shared/components/layout/menu/menu.component';
import { RodapeGovernoFederalComponent } from './shared/components/layout/rodape-governo-federal/rodape-governo-federal.component';
import { RodapeMenuComponent } from './shared/components/layout/rodape-menu/rodape-menu.component';
import { TemplateComponent } from './shared/components/layout/template/template.component';
import { SegurancaModule } from './modules/seguranca/seguranca.module';

import { ApplicationService } from "./core/services/application.service";
import { ConverterService } from "./core/services/converter.service";
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoGovernoFederalComponent,
    CabecalhoSuframaComponent,
    MenuComponent,
    RodapeGovernoFederalComponent,
    RodapeMenuComponent,
    TemplateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SegurancaModule
    
  ],
  providers: [ApplicationService, ConverterService, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
