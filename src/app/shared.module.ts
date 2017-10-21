import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatPaginatorModule,
        MatTableModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
    ],
    providers: [],
    entryComponents: [],
    exports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatPaginatorModule,
        MatTableModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
    ],
})
export class SharedModule { }
