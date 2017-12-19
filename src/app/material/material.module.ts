import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatButtonModule,
  MatExpansionModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTabsModule
  ]
})
export class MaterialModule {}
