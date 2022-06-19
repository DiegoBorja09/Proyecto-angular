import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTelComponent } from './add-tel.component';

describe('AddTelComponent', () => {
  let component: AddTelComponent;
  let fixture: ComponentFixture<AddTelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
