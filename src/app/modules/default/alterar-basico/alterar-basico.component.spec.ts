import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarBasicoComponent } from './alterar-basico.component';

describe('AlterarBasicoComponent', () => {
  let component: AlterarBasicoComponent;
  let fixture: ComponentFixture<AlterarBasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarBasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
