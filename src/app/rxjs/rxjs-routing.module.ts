import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { InstallationComponent } from './components/installation/installation.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent,
    data: { title: [], description: 'The complete RxJS documentation...' }
  },
  {
    path: 'installation',
    component: InstallationComponent,
    data: { title: [], description: 'Installation information...' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule {}
