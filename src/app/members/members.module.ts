import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MembersComponent} from './members.component';
import {CovalentLayoutModule, CovalentMediaModule, CovalentStepsModule} from '@covalent/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatRippleModule,
  MatTableModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {MembersListComponent} from './members-list/members-list.component';
import {CdkTableModule} from '@angular/cdk/table';
import { ApplicationsListComponent } from './applications-list/applications-list.component';

const membersRoutes: Routes = [
  {
    path: 'members', component: MembersComponent,
    children: [
      {path: 'list', component: MembersListComponent},
      {path: 'applications', component: ApplicationsListComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(membersRoutes),
    FlexLayoutModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentMediaModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    MatTableModule,
    CdkTableModule,
    MatCheckboxModule,
    MatRippleModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTabsModule
  ],
  declarations: [MembersComponent, MembersListComponent, ApplicationsListComponent],
  exports: [MembersComponent]
})
export class MembersModule {
}
