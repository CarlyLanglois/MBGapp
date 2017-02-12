/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GiftMembershipFormComponent } from './gift-membership-form.component';

describe('GiftMembershipFormComponent', () => {
  let component: GiftMembershipFormComponent;
  let fixture: ComponentFixture<GiftMembershipFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftMembershipFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftMembershipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
