import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { AppComponent } from 'src/app/app.component';
import { CabecalhoGovernoFederalComponent } from 'src/app/shared/components/layout/cabecalho-governo-federal/cabecalho-governo-federal.component';
import { CabecalhoSuframaComponent } from 'src/app/shared/components/layout/cabecalho-suframa/cabecalho-suframa.component';
import { MenuComponent } from 'src/app/shared/components/layout/menu/menu.component';
import { RodapeGovernoFederalComponent } from 'src/app/shared/components/layout/rodape-governo-federal/rodape-governo-federal.component';
import { RodapeMenuComponent } from 'src/app/shared/components/layout/rodape-menu/rodape-menu.component';
import { TemplateComponent } from 'src/app/shared/components/layout/template/template.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [
        IndexComponent,
        AppComponent,
        CabecalhoGovernoFederalComponent,
        CabecalhoSuframaComponent,
        MenuComponent,
        RodapeGovernoFederalComponent,
        RodapeMenuComponent,
        TemplateComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('deve verificar se o usuario esta autenticado', () => {
    const de = fixture.debugElement.componentInstance;
    //fixture.detectChanges();
    expect(de).toBeTruthy();
  });
});
