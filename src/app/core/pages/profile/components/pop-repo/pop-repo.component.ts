import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pop-repo',
  templateUrl: './pop-repo.component.html',
  styleUrls: ['./pop-repo.component.scss']
})
export class PopRepoComponent implements OnInit {

repos:Array<any> = [];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.repos = this.dataService.getRepoList();
    console.log("pop-repo", this.repos);
  }

}
