import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MembersComponent} from './members.component';
import {CovalentLayoutModule, CovalentMediaModule, CovalentStepsModule} from '@covalent/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentMediaModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  declarations: [MembersComponent],
  exports: [MembersComponent]
})
export class MembersModule {
}
