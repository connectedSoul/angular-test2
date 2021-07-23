import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-entry',
  templateUrl: './nav-entry.component.html',
  styleUrls: ['./nav-entry.component.scss']
})
export class NavEntryComponent implements OnInit {

  @Input() navItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}
