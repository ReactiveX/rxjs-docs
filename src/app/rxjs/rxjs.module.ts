import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
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
    MatExpansionModule,
    TranslateModule
  ],
  declarations: [RxjsComponent, InstallationComponent]
})
export class RxjsModule {}
