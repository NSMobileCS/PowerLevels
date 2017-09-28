import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSayanThreeComponentComponent } from './super-sayan-three-component.component';

describe('SuperSayanThreeComponentComponent', () => {
  let component: SuperSayanThreeComponentComponent;
  let fixture: ComponentFixture<SuperSayanThreeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSayanThreeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSayanThreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
