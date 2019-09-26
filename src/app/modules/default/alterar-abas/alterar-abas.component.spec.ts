import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarAbasComponent } from './alterar-abas.component';

describe('AlterarAbasComponent', () => {
  let component: AlterarAbasComponent;
  let fixture: ComponentFixture<AlterarAbasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarAbasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarAbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
