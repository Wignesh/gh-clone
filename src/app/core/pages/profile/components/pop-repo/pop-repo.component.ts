import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { RepoListDataService } from 'src/app/core/services/RepoListData/repo-list-data.service';

@Component({
  selector: 'app-pop-repo',
  templateUrl: './pop-repo.component.html',
  styleUrls: ['./pop-repo.component.scss']
})
export class PopRepoComponent implements OnInit {

  repos =  [{
    title: '',
    readme: '',
    language: '',
    tags: [''],
    lastupdated: ''
  }];

  constructor(private repoListDataService : RepoListDataService) { }

  getRepositories(){
    this.repos = this.repoListDataService.getrepos();
  }

  ngOnInit(): void {
    this.getRepositories();
  }

}
