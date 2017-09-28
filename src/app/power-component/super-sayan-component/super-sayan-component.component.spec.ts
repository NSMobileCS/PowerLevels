import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSayanComponentComponent } from './super-sayan-component.component';

describe('SuperSayanComponentComponent', () => {
  let component: SuperSayanComponentComponent;
  let fixture: ComponentFixture<SuperSayanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSayanComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSayanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
