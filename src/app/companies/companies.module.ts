import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatDialogRef } from '@angular/material';

import { CompaniesComponent } from './companies.component';
import { SharedModule } from '../shared.module';
import { environment } from '../../environments/environment';
import { CompanyDialogComponent } from '../company-dialog/company-dialog.component';
import { CompanyService } from './company.service';
import { CompaniesRoutingModule } from './companies-routing.module';

@NgModule({
  imports: [
    CompaniesRoutingModule,
    SharedModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [CompaniesComponent, CompanyDialogComponent],
  entryComponents: [CompanyDialogComponent],
  providers: [CompanyService, AngularFireDatabase]
})
export class CompaniesModule {}
