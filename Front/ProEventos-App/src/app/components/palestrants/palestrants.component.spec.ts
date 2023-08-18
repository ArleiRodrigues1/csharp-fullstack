/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PalestrantsComponent } from './palestrants.component';

describe('PalestrantsComponent', () => {
  let component: PalestrantsComponent;
  let fixture: ComponentFixture<PalestrantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalestrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalestrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
