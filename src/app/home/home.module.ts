import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CovalentLayoutModule, CovalentStepsModule} from '@covalent/core';
import {MatButtonModule, MatIconModule, MatListModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MembersModule} from '../members/members.module';
import {DefaultHomeComponent} from './default-home/default-home.component';

const homeRoutes: Routes = [
  {
    path: 'home', component: HomeComponent,
    loadChildren: () => MembersModule
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    FlexLayoutModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [HomeComponent, DefaultHomeComponent],
  exports: [RouterModule]
})
export class HomeModule {
}
