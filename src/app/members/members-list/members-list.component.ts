import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MemberService} from '../../services/member.service';
import {MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {TdMediaService} from '@covalent/core';

export interface MembersData {
  name: string;
  nickname: string;
  position: string;
  games: string;
}

@Component({
  selector: 'aeq-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MembersListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  sidebarOpened: boolean;

  dataSource = new MatTableDataSource<MembersData>();
  displayedColumns: string[] = ['name', 'nickname', 'position', 'games', 'edit'];
  selection = new SelectionModel<MembersData>(true, []);

  data: MembersData[] = [
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
    {name: 'Lukas', nickname: 'Cypher', position: 'Staff', games: 'League of Legends'},
  ];

  constructor(private media: TdMediaService,
              private memberService: MemberService) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<MembersData>(this.data);
    this.dataSource.sort = this.sort;
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
}
