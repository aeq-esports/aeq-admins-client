import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MembersComponent} from './members.component';
import {CovalentLayoutModule, CovalentMediaModule, CovalentStepsModule} from '@covalent/core';
import {CovalentSearchModule} from '@covalent/core/search';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatNativeDateModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {MembersListComponent} from './members-list/members-list.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MembersNavComponent} from './members-nav.component';
import {MembersCreateComponent} from './members-create/members-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const membersRoutes: Routes = [
  {path: 'members', component: MembersComponent},
  {path: 'members/create', component: MembersCreateComponent},
  {path: 'members/list', component: MembersListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(membersRoutes),
    FormsModule,
    ReactiveFormsModule,
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
    MatPaginatorModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatChipsModule
  ],
  declarations: [MembersComponent, MembersListComponent, MembersNavComponent, MembersCreateComponent],
  exports: [MembersComponent]
})
export class MembersModule {
}
