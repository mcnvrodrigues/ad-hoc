import { Component, OnInit } from '@angular/core';
import { Request } from './request/request.model';
import { RequestsService } from './requests.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adhoc-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests: Request[];
  SelectedId: Request;

  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    this.requestsService.requests().subscribe(reqs => this.requests = reqs);
  }

  receiverId(responseId) {
    this.SelectedId = responseId;
    console.log('Foi emitido o evento e chegou no pai >>>', responseId);
  }

}
