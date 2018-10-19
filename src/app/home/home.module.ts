import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CovalentLayoutModule, CovalentStepsModule} from '@covalent/core';
import {MatButtonModule, MatIconModule, MatListModule} from '@angular/material';
import {Router, RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MembersComponent} from '../members/members.component';
import {MembersModule} from '../members/members.module';
import {DefaultHomeComponent} from './default-home/default-home.component';

const membersRoutes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: '', component: DefaultHomeComponent},
      {path: 'members', component: MembersComponent}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild(membersRoutes),
    FlexLayoutModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MembersModule
  ],
  declarations: [HomeComponent, DefaultHomeComponent],
  exports: [RouterModule]
})
export class HomeModule {
}
