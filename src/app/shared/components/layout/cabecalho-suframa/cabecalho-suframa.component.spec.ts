import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoSuframaComponent } from './cabecalho-suframa.component';

xdescribe('CabecalhoSuframaComponent', () => {
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
});
