import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adhoc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'adhoc';

  constructor() { }

  ngOnInit() {
  }

}
