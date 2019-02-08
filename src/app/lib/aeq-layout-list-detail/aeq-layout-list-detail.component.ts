import {Component, Input, ViewChild} from '@angular/core';
import {MatDrawerToggleResult, MatSidenav} from '@angular/material';

@Component({
  selector: 'aeq-aeq-layout-list-detail',
  templateUrl: './aeq-layout-list-detail.component.html',
  styleUrls: ['./aeq-layout-list-detail.component.css']
})
export class AeqLayoutListDetailComponent {

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  @Input('position') position: 'start' | 'end' = 'end';
  @Input('mode') mode: 'side' | 'push' | 'over' = 'side';
  @Input('opened') opened = true;
  @Input('sidenavWidth') sidenavWidth = '350px';

  get disableClose(): boolean {
    return this.mode === 'side';
  }

  public toggle(): Promise<MatDrawerToggleResult> {
    return this.sidenav.toggle(!this.sidenav.opened);
  }

  public open(): Promise<MatDrawerToggleResult> {
    return this.sidenav.open();
  }

  public close(): Promise<MatDrawerToggleResult> {
    return this.sidenav.close();
  }
}
