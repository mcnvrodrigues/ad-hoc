import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Request } from './request.model';

@Component({
  selector: 'adhoc-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  @Input() request: Request;
  @Output() idSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  @Input()
  showInfo() {
    console.log('teste');
    return this.request;
  }

  returnId() {
    this.idSelected.emit(this.request);
  }

}
