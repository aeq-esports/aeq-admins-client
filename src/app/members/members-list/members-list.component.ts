import {Component, NgZone, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MemberService} from '../../services/member.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {TdMediaService, TdSearchBoxComponent} from '@covalent/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Member} from '../../models/member';
import {TrialPeriodState} from '../../models/trial-period';

@Component({
  selector: 'aeq-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MembersListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(TdSearchBoxComponent) searchBar: TdSearchBoxComponent;

  private _mediaSubscription: Subscription;

  dataSource = new MatTableDataSource<Member>();
  displayedColumns: string[];

  selection = new SelectionModel<Member>(true, []);
  data: Member[] = [
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.OPEN, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.PENDING, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.APPROVED, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.REJECTED, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.OPEN, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.PENDING, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.APPROVED, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.REJECTED, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.OPEN, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.PENDING, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.APPROVED, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.REJECTED, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.OPEN, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.PENDING, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.APPROVED, created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'M&S', trialPeriodState: TrialPeriodState.REJECTED, created: '23.01.2018'},
  ];

  constructor(public mediaService: TdMediaService,
              private memberService: MemberService,
              private _ngZone: NgZone,
              private _router: Router) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Member>(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this._mediaSubscription = this.mediaService.registerQuery('xs').subscribe((matches: boolean) => {
      this._ngZone.run(() => {
        if (matches) {
          this.displayedColumns = ['name', 'nickname', 'trialPeriodState'];
        } else {
          this.displayedColumns = ['name', 'nickname', 'position', 'trialPeriodState', 'created'];
        }
      });
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  displayMember($row) {
    console.log($row);
  }

  onSearchDebounce($event: string) {
    this.dataSource.filter = $event.trim().toLowerCase();
  }

  onBtnAddMemberClick() {
    this._router.navigate(['home/members/create']);
  }

  getIconForTrialPeriodState(state: TrialPeriodState): string {
    switch (state) {
      case TrialPeriodState.OPEN:
        return 'schedule';
      case TrialPeriodState.PENDING:
        return 'label_important';
      case TrialPeriodState.APPROVED:
        return 'done';
      case TrialPeriodState.REJECTED:
        return 'clear';
      default:
        return '';
    }
  }
}
