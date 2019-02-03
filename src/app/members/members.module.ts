import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MembersComponent} from './members.component';
import {CovalentLayoutModule, CovalentMediaModule, CovalentStepsModule} from '@covalent/core';
import {CovalentSearchModule} from '@covalent/core/search';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatRippleModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatPaginatorModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {MembersListComponent} from './members-list/members-list.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MembersNavComponent} from './members-nav.component';

const membersRoutes: Routes = [
  {path: 'members', component: MembersComponent},
  {path: 'members/list', component: MembersListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(membersRoutes),
    FlexLayoutModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentMediaModule,
    CovalentSearchModule,
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
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule
  ],
  declarations: [MembersComponent, MembersListComponent, MembersNavComponent],
  exports: [MembersComponent]
})
export class MembersModule {
}
