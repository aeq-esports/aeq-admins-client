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
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {MembersListComponent} from './members-list/members-list.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MembersNavComponent} from './members-nav.component';
import {MembersCreateComponent} from './members-create/members-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MembersDetailComponent} from './members-detail/members-detail.component';

import {CovalentBaseEchartsModule} from '@covalent/echarts/base';
import {CovalentBarEchartsModule} from '@covalent/echarts/bar';
import {CovalentLineEchartsModule} from '@covalent/echarts/line';
import {CovalentTooltipEchartsModule} from '@covalent/echarts/tooltip';
import {CovalentToolboxEchartsModule} from '@covalent/echarts/toolbox';

const membersRoutes: Routes = [
  {path: 'members', component: MembersComponent},
  {path: 'members/create', component: MembersCreateComponent},
  {path: 'members/list', component: MembersListComponent},
  {path: 'members/:id', component: MembersDetailComponent}
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
    MatChipsModule,
    MatRadioModule,
    CovalentBaseEchartsModule,
    CovalentBarEchartsModule,
    CovalentToolboxEchartsModule,
    CovalentLineEchartsModule,
    CovalentTooltipEchartsModule
  ],
  declarations: [MembersComponent, MembersListComponent, MembersNavComponent, MembersCreateComponent, MembersDetailComponent],
  exports: [MembersComponent]
})
export class MembersModule {
}
