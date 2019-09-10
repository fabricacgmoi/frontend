import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeMenuComponent } from './rodape-menu.component';

xdescribe('RodapeMenuComponent', () => {
  let component: RodapeMenuComponent;
  let fixture: ComponentFixture<RodapeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodapeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodapeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
