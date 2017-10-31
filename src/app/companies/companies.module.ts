import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { ReactiveFormsModule } from "@angular/forms";

import { CompaniesComponent } from "./companies.component";
import { routing } from "./companies.routing";
import { SharedModule } from "../shared.module";
import { environment } from "../../environments/environment";
import { CompanyDialogComponent } from "../company-dialog/company-dialog.component";
import { MatDialogRef } from "@angular/material";

@NgModule({
  imports: [
    routing,
    SharedModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [CompaniesComponent, CompanyDialogComponent],
  entryComponents: [CompanyDialogComponent]
})
export class CompaniesModule {}
