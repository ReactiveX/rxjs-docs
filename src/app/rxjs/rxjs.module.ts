import { NgModule } from '@angular/core';

import { RxjsComponent } from './rxjs.component';
import { RxjsRoutingModule } from './rxjs-routing.module';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule
} from '@angular/material';
import { InstallationComponent } from './components/installation/installation.component';

@NgModule({
  imports: [
    RxjsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule
  ],
  declarations: [RxjsComponent, InstallationComponent]
})
export class RxjsModule {}
