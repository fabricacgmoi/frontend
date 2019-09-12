import { Component, OnInit, ViewEncapsulation, Input, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

// import { ActivatedRoute } from '@angular/router';
// import { ApplicationService } from "./core/services/application.service";
// import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {
    public constructor(
      private titleService: Title,
      private Meta: Meta,
      // private applicationService: ApplicationService,
      // private route: ActivatedRoute
    ) { }


    private sub: any;
    //variáveis de controle de acesso
    usuario: string;
    senha: string;
    mensagem: string;
    isAutenticado: boolean;
    isTemplate: boolean;

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    @Input()
    authenticated: boolean;

    ngOnInit()
    {
      this.Meta.addTag({ name: 'description', content: 'Framework Suframa' });
      this.Meta.addTag({ name: 'keywords', content: 'framework, Suframa, Governo Federal' });
      this.titleService.setTitle("Framework Suframa");

      //localStorage.clear();
      //this.isExibirLogin = environment.developmentMode;

      let _isAutenticado = localStorage.getItem("isAutenticado");
      this.isTemplate = JSON.parse(localStorage.getItem("isTemplate"));

      if (_isAutenticado != null)
      {
        this.isAutenticado = Boolean(_isAutenticado);
      }
      else
      {
        this.isAutenticado = false;
      }
    }

    // onLogout() {
    // }

}
