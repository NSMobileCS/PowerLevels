import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSayanFourComponentComponent } from './super-sayan-four-component.component';

describe('SuperSayanFourComponentComponent', () => {
  let component: SuperSayanFourComponentComponent;
  let fixture: ComponentFixture<SuperSayanFourComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSayanFourComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSayanFourComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
