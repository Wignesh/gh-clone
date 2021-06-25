import { Component, OnInit } from '@angular/core';
import { RepositoriesPage } from '../repositories/repositories.page';
import { RepoListDataService } from 'src/app/core/services/RepoListData/repo-list-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  isOverview:boolean = true;
  isRepo:boolean = false;

  constructor(private repoListDataService: RepoListDataService) { }

  changeOverview(isOview:boolean){
    this.isOverview = isOview;
  }

  changeRepo(isRep:boolean){
    this.isRepo = isRep;
    console.log("isrepositoryevent",this.isRepo)
  }

  ngOnInit(): void { }
}
