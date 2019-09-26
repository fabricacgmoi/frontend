import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarWizardComponent } from './alterar-wizard.component';

describe('AlterarWizardComponent', () => {
  let component: AlterarWizardComponent;
  let fixture: ComponentFixture<AlterarWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
