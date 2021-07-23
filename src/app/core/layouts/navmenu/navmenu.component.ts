import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {

  public navData: any[] = [];

  constructor() {
    this.navData.push(
      {
        page:
          {
            label: 'Hallo1',
            path: '/admin/editors-dashboard',
            counter: null
          },
        subpages: []
      },
      {
        page:
          {
            label: 'Hallo2',
            path: '/admin/editors-dashboard',
            counter: null
          },
        subpages: [
          {
            label: 'Hallo2Sub1',
            path: '/admin/editors-dashboard',
            counter: null
          },
          {
            label: 'Hallo2Sub2',
            path: '/admin/editors-dashboard',
            counter: null
          },
        ]
      },
      {
        page:
          {
            label: 'Hallo3',
            path: '/admin/editors-dashboard',
            counter: null
          },
        subpages: [
          {
            label: 'Hallo3Sub1',
            path: '/admin/editors-dashboard',
            counter: null
          },
          {
            label: 'Hallo3Sub2',
            path: '/admin/editors-dashboard',
            counter: null
          },
        ]
      },

    );
  }

  ngOnInit(): void {
  }

}
