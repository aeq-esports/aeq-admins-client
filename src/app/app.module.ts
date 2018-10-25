import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';
import {MemberService} from './services/member.service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    LoginModule,
    HomeModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
