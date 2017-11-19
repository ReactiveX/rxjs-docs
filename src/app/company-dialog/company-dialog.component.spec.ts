import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDialogComponent } from './company-dialog.component';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared.module';

describe('CompanyDialogComponent', () => {
  let component: CompanyDialogComponent;
  let fixture: ComponentFixture<CompanyDialogComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedModule],
        declarations: [CompanyDialogComponent],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// @NgModule({
//   declarations: [CompanyDialogComponent],
//   entryComponents: [
//     CompanyDialogComponent,
//   ],
//   imports: [],
//   providers: [],
//   exports: []
// })
// class TestModule { }
