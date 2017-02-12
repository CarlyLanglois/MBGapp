/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RenewFormComponent } from './renew-form.component';

describe('RenewFormComponent', () => {
  let component: RenewFormComponent;
  let fixture: ComponentFixture<RenewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
