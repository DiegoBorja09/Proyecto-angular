import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemailsComponent } from './addemails.component';

describe('AddemailsComponent', () => {
  let component: AddemailsComponent;
  let fixture: ComponentFixture<AddemailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
