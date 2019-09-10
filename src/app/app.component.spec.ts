import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CabecalhoGovernoFederalComponent } from './shared/components/layout/cabecalho-governo-federal/cabecalho-governo-federal.component';
import { CabecalhoSuframaComponent } from './shared/components/layout/cabecalho-suframa/cabecalho-suframa.component';
import { MenuComponent } from './shared/components/layout/menu/menu.component';
import { RodapeGovernoFederalComponent } from './shared/components/layout/rodape-governo-federal/rodape-governo-federal.component';
import { RodapeMenuComponent } from './shared/components/layout/rodape-menu/rodape-menu.component';
import { TemplateComponent } from './shared/components/layout/template/template.component';


xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        CabecalhoGovernoFederalComponent,
        CabecalhoSuframaComponent,
        MenuComponent,
        RodapeGovernoFederalComponent,
        RodapeMenuComponent,
        TemplateComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.query;
    expect(app).toHaveBeenCalled();
  });

  // it(`should have as title 'frameworksuframa'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Framework Suframa');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to frameworksuframa!');
  // });
});
