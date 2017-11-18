import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CompanyDialogComponent } from "./company-dialog.component";
import { SharedModule } from "../shared.module";
import { MatDialogModule } from "@angular/material";

describe("CompanyDialogComponent", () => {
  let component: CompanyDialogComponent;
  let fixture: ComponentFixture<CompanyDialogComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedModule, MatDialogModule],
        declarations: [CompanyDialogComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
