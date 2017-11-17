import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import * as firebase from "firebase";
import { MatDialog } from "@angular/material";
import { CompanyDialogComponent } from "../company-dialog/company-dialog.component";
import { CompanyService } from "./company.service";

@Component({
  selector: "app-companies",
  templateUrl: "./companies.component.html",
  styleUrls: ["./companies.component.scss"]
})
export class CompaniesComponent implements OnInit {
  companies: Observable<any[]>;
  private uploadTask: firebase.storage.UploadTask;
  private companiesCollection: AngularFirestoreCollection<any>;
  constructor(
    db: AngularFirestore,
    private dialog: MatDialog,
    private companyService: CompanyService
  ) {
    this.companiesCollection = db.collection("companies");
    this.companies = this.companiesCollection.valueChanges();
  }

  ngOnInit() {}

  uploadSingle(file: any, id: string) {
    this.companyService.pushUpload(file, id);
  }

  addCompany() {
    const dialogRef = this.dialog.open(CompanyDialogComponent, {});
    dialogRef.afterClosed().subscribe(company => {
      if (company) {
        this.companiesCollection.add(company).then(result => {
          console.log(result); // result.id has unique key to location of company added
          const file = this.uploadSingle(company.File, result.id);
          // let file = this.uploadSingle(company.File);
        });
      }
    });
  }
}
