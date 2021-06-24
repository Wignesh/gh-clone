import { Component, OnInit } from '@angular/core';
import { RepoListItemComponent } from 'src/app/core/pages/shared/repo-list-item/repo-list-item.component';
import { RepoListDataService } from '../../services/RepoListData/repo-list-data.service';

import { DataService } from '../profile/services/data.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.page.html',
  styleUrls: ['./repositories.page.scss'],
})
export class RepositoriesPage implements OnInit {


  constructor(private repoListDataService: RepoListDataService) {}

  ngOnInit(): void {
    this.getRepositories();
  }

  repos =  [{
    title: '',
    author:'',
    readme: '',
    language: '',
    tags: [''],
    lastupdated: ''
  }];

  getRepositories(){
    this.repos = this.repoListDataService.getrepos();
  }

}
