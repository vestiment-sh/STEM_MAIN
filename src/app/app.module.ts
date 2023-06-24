import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PushCodeComponent } from './push-code/push-code.component';
import { PullCodeComponent } from './pull-code/pull-code.component';
import { AcceptPullRequestComponent } from './accept-pull-request/accept-pull-request.component';
import { HomeComponent } from './Home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PushCodeComponent,
    PullCodeComponent,
    AcceptPullRequestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }