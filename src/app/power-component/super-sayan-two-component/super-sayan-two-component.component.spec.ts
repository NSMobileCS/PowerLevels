import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSayanTwoComponentComponent } from './super-sayan-two-component.component';

describe('SuperSayanTwoComponentComponent', () => {
  let component: SuperSayanTwoComponentComponent;
  let fixture: ComponentFixture<SuperSayanTwoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSayanTwoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSayanTwoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
