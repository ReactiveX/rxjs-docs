import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { TranslateModule } from '@ngx-translate/core';

import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './operators.component';
import { OperatorComponent } from './components/operator/operator.component';
import { OperatorHeaderComponent } from './components/operator-header/operator-header.component';
import { OperatorParametersComponent } from './components/operator-parameters/operator-parameters.component';
import { OperatorExamplesComponent } from './components/operator-examples/operator-examples.component';
import { RelatedOperatorsComponent } from './components/related-operators/related-operators.component';
import { OperatorExtrasComponent } from './components/operator-extras/operator-extras.component';
import { AdditionalResourcesComponent } from './components/additional-resources/additional-resources.component';
import { MarbleDiagramComponent } from './components/marble-diagram/marble-diagram.component';
import { WalkthroughComponent } from './components/walkthrough/walkthrough.component';
import { HighlightJsDirective } from './directives/highlight-js.directive';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    OperatorsComponent,
    OperatorComponent,
    OperatorHeaderComponent,
    OperatorParametersComponent,
    OperatorExamplesComponent,
    RelatedOperatorsComponent,
    OperatorExtrasComponent,
    AdditionalResourcesComponent,
    WalkthroughComponent,
    MarbleDiagramComponent,
    HighlightJsDirective,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    OperatorsRoutingModule,
    LayoutModule,
    TranslateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OperatorsModule {}
