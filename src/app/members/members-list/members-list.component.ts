import {Component, OnInit, ViewChild} from '@angular/core';
import {MemberService} from '../../services/member.service';
import {MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {TdMediaService} from '@covalent/core';

export interface MembersData {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'aeq-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  sidebarOpened: boolean;

  dataSource = new MatTableDataSource<MembersData>();
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  selection = new SelectionModel<MembersData>(true, []);

  data: MembersData[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 12, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 13, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 14, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 15, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 16, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 17, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 18, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 19, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
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
