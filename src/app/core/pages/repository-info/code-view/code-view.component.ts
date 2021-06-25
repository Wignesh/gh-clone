import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.scss']
})
export class CodeViewComponent implements OnInit {

  urlList:any=[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.url.subscribe((segments: UrlSegment[]) => {
      this.urlList = [];
      segments.forEach((item)=>{
        this.urlList.push(item.path);
      });
    });
  }

}
