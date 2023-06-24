import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PushCodeComponent } from './push-code/push-code.component';
import { PullCodeComponent } from './pull-code/pull-code.component';
import { AcceptPullRequestComponent } from './accept-pull-request/accept-pull-request.component';
import { HomeComponent } from './Home/home.component';

const routes: Routes = [
  { path: 'push', component: PushCodeComponent },
  { path: 'pull', component: PullCodeComponent },
  { path: 'accept', component: AcceptPullRequestComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }