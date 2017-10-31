import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-company-dialog",
  templateUrl: "./company-dialog.component.html",
  styleUrls: ["./company-dialog.component.scss"]
})
export class CompanyDialogComponent implements OnInit {
  companyForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createCompanyForm();
  }

  ngOnInit() {}

  private createCompanyForm() {
    this.companyForm = this.formBuilder.group({
      Name: ["", Validators.required],
      Location: ["", Validators.required],
      Website: ["", Validators.required]
    });
  }

  private subscribeToForm() {
    const nameControl = this.companyForm.get("Name");
    nameControl.valueChanges.forEach((value: string) => console.log(value));
    const locationControl = this.companyForm.get("Location");
    nameControl.valueChanges.forEach((value: string) => console.log(value));
    const websiteControl = this.companyForm.get("Website");
    nameControl.valueChanges.forEach((value: string) => console.log(value));
  }
}
