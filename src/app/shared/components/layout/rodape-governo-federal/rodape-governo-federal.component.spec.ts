import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeGovernoFederalComponent } from './rodape-governo-federal.component';

xdescribe('RodapeGovernoFederalComponent', () => {
  let component: RodapeGovernoFederalComponent;
  let fixture: ComponentFixture<RodapeGovernoFederalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodapeGovernoFederalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodapeGovernoFederalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
