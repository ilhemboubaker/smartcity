import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ClaimSubmissionComponent } from './claim-submission/claim-submission.component';
import { FormsModule } from '@angular/forms';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';

@NgModule({
  declarations: [AppComponent,  LoginComponent, ClaimSubmissionComponent, AdminDashbordComponent],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
