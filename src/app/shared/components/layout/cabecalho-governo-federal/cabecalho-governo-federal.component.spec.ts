import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoGovernoFederalComponent } from './cabecalho-governo-federal.component';

xdescribe('CabecalhoGovernoFederalComponent', () => {
  let component: CabecalhoGovernoFederalComponent;
  let fixture: ComponentFixture<CabecalhoGovernoFederalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabecalhoGovernoFederalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoGovernoFederalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
