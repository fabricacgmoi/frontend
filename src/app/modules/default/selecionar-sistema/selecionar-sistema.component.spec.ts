import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarSistemaComponent } from './selecionar-sistema.component';

describe('SelecionarSistemaComponent', () => {
  let component: SelecionarSistemaComponent;
  let fixture: ComponentFixture<SelecionarSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionarSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
