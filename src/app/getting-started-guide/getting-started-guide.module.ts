import { NgModule } from '@angular/core';

import { GettingStartedGuideComponent } from './getting-started-guide.component';
import { routing } from './getting-started-guide.routing';

@NgModule({
  imports: [routing],
  declarations: [GettingStartedGuideComponent]
})
export class GettingStartedGuideModule { }
