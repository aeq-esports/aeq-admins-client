import { Component, OnInit } from '@angular/core';
import {TdMediaService} from '@covalent/core';

@Component({
  selector: 'aeq-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(public media: TdMediaService) { }

  ngOnInit() {
  }

}
