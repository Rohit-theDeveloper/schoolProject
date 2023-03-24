import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstdApplicationComponent } from './addstd-application.component';

describe('AddstdApplicationComponent', () => {
  let component: AddstdApplicationComponent;
  let fixture: ComponentFixture<AddstdApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstdApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstdApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
