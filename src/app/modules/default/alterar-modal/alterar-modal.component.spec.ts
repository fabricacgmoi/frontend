import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarModalComponent } from './alterar-modal.component';

describe('AlterarModalComponent', () => {
  let component: AlterarModalComponent;
  let fixture: ComponentFixture<AlterarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
