import { Component, OnInit } from '@angular/core';
import { Request } from '../requests/request/request.model';
import { RequestsService } from '../requests/requests.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adhoc-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request;
  constructor(private requestsService: RequestsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.requestsService.requestById(this.route.snapshot.params['id'])
    .subscribe(request => this.request = request);
  }

}
