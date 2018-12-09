import { Component, OnInit, DoCheck, AfterContentInit } from '@angular/core';
import { Request } from '../requests/request/request.model';
import { RequestsService } from '../requests/requests.service';
import * as $ from 'jquery';

@Component({
  selector: 'adhoc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  requests: Request[];

  constructor(private requestsService: RequestsService) { }

  /*
  ngDoCheck(){
    $(document).ready(function(){
      $(".menu").click(function(){
        $(".keep").toggleClass("width");
      });
    });
  }

  ngAfterContentInit(){
    $(document).ready(function(){
      $(".menu").click(function(){
        $(".keep").toggleClass("width");
      });
    });
  }
  */
  ngOnInit() {
    this.requestsService.requests().subscribe(reqs => this.requests = reqs);

    $(document).ready(function(){
      $(".menu").click(function(){
        $(".keep").toggleClass("width");
      });
    });
  }

}
