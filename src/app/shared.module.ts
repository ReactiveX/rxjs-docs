import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatSidenavModule,
  MatExpansionModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatTooltipModule
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule {}
