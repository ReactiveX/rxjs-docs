import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { MatDialog } from "@angular/material";
import { CompanyDialogComponent } from "../company-dialog/company-dialog.component";

@Component({
  selector: "app-companies",
  templateUrl: "./companies.component.html",
  styleUrls: ["./companies.component.scss"]
})
export class CompaniesComponent implements OnInit {
  companies: Observable<any[]>;
  private companiesCollection: AngularFirestoreCollection<any>;
  constructor(db: AngularFirestore, private dialog: MatDialog) {
    this.companiesCollection = db.collection("companies");
    this.companies = this.companiesCollection.valueChanges();
  }

  ngOnInit() {}

  addCompany() {
    const dialogRef = this.dialog.open(CompanyDialogComponent, {});
    dialogRef.afterClosed().subscribe(company => {
      if (company) {
        this.companiesCollection.add(company);
      }
    });
  }
}
