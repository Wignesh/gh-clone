import { Component, OnInit } from '@angular/core';
import { RepoListItemComponent } from 'src/app/core/pages/shared/repo-list-item/repo-list-item.component';

import { DataService } from '../profile/services/data.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.page.html',
  styleUrls: ['./repositories.page.scss'],
})
export class RepositoriesPage implements OnInit {

//repos list here i cut it and put that on the services
  isRepo:boolean = true;
  isOverview:boolean = false;
  repos:Array<any> = [];

  constructor(private dataService : DataService) {}

  ngOnInit(): void {
    this.repos = this.dataService.getRepoList();
    this.isOverview = false;
    this.isRepo = true;
  }
}
