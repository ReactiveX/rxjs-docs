import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './../material/material.module';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { environment } from '../../environments/environment';
import { CompanyService } from './company.service';

@NgModule({
  imports: [CommonModule, CompaniesRoutingModule, MaterialModule],
  declarations: [CompaniesComponent],
  providers: [CompanyService]
})
export class CompaniesModule {}
