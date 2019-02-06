import {Component, NgZone, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MemberService} from '../../services/member.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {TdMediaService, TdSearchBoxComponent} from '@covalent/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

export interface MembersData {
  name: string;
  nickname: string;
  position: string;
  created: string;
}

@Component({
  selector: 'aeq-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MembersListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(TdSearchBoxComponent) searchBar: TdSearchBoxComponent;

  pagingConfig: number[];

  private _mediaSubscription: Subscription;

  dataSource = new MatTableDataSource<MembersData>();
  displayedColumns: string[];

  selection = new SelectionModel<MembersData>(true, []);
  data: MembersData[] = [
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Maintenance and Service', created: '23.01.2018'},
  ];

  constructor(public mediaService: TdMediaService,
              private memberService: MemberService,
              private _ngZone: NgZone,
              private _router: Router) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<MembersData>(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this._mediaSubscription = this.mediaService.registerQuery('xs').subscribe((matches: boolean) => {
      this._ngZone.run(() => {
        if (matches) {
          this.displayedColumns = ['name', 'nickname'];
        } else {
          this.displayedColumns = ['name', 'nickname', 'position', 'created'];
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
}
