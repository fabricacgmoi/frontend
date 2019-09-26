import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroWizardComponent } from './cadastro-wizard.component';

describe('CadastroWizardComponent', () => {
  let component: CadastroWizardComponent;
  let fixture: ComponentFixture<CadastroWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
