import { Component, OnInit } from '@angular/core';
import {TdMediaService} from '@covalent/core';

@Component({
  selector: 'aeq-members-nav',
  templateUrl: './members-nav.component.html',
  styles: ['']
})
export class MembersNavComponent implements OnInit {

  constructor(private media: TdMediaService) { }

  ngOnInit() {
  }

}
