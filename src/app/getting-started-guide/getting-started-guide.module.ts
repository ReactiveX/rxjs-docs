import { NgModule } from "@angular/core";

import { GettingStartedGuideComponent } from "./getting-started-guide.component";
import { routing } from "./getting-started-guide.routing";
import { MatCardModule } from "@angular/material";

@NgModule({
  imports: [routing, MatCardModule],
  declarations: [GettingStartedGuideComponent]
})
export class GettingStartedGuideModule {}
