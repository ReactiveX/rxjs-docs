import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GettingStartedGuideComponent } from './getting-started-guide.component';

const routes: Routes = [
  { path: '', component: GettingStartedGuideComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

