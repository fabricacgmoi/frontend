import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAbasComponent } from './cadastro-abas.component';

describe('CadastroAbasComponent', () => {
  let component: CadastroAbasComponent;
  let fixture: ComponentFixture<CadastroAbasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAbasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
