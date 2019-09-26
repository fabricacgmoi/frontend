import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoSuframaComponent } from './cabecalho-suframa.component';

describe('CabecalhoSuframaComponent', () => {
  let component: CabecalhoSuframaComponent;
  let fixture: ComponentFixture<CabecalhoSuframaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabecalhoSuframaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoSuframaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar o metodo logoff', () => {
    fixture = TestBed.createComponent(CabecalhoSuframaComponent);
    component = fixture.componentInstance;
    let spy = spyOn(component, 'logoff').and.callFake( () => {
      return "a";
    });
    //let spy1 = spyOnProperty(component, 'logoff');

    component.logoff();

    expect(spy).toMatch("a");
    //expect(spy1).toHaveBeenCalled();
  });
});
