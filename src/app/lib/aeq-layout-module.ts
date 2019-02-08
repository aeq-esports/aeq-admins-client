import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CovalentLayoutModule} from '@covalent/core';
import {AeqLayoutListDetailComponent} from './aeq-layout-list-detail/aeq-layout-list-detail.component';
import {MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    CovalentLayoutModule
  ],
  declarations: [AeqLayoutListDetailComponent],
  exports: [AeqLayoutListDetailComponent]
})
export class AeqLayoutModule {
}
