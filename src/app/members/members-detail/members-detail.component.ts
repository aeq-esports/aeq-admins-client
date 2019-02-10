import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aeq-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  cardlist: Object[] = [{
    icon: 'account_box',
    route: '.',
    title: 'John Jameson',
    description: 'Owner',
  }, {
    icon: 'description',
    route: '.',
    title: 'An item description',
    description: 'Description',
  }, {
    icon: 'vpn_key',
    route: '.',
    title: '1141e8e8-8d24-4956-93c2',
    description: 'API Key',
  },
  ];
  carddates: Object[] = [{
    icon: 'access_time',
    route: '.',
    date: '2017-07-07T00:25:49+00:00',
    description: 'Last Updated',
  }, {
    icon: 'today',
    route: '.',
    date: '2017-07-04T00:25:49+00:00',
    description: 'Created',
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
