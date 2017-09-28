import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayanComponentComponent } from './sayan-component.component';

describe('SayanComponentComponent', () => {
  let component: SayanComponentComponent;
  let fixture: ComponentFixture<SayanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayanComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
