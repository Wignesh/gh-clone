import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RepoListDataService } from 'src/app/core/services/RepoListData/repo-list-data.service';

@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.scss']
})
export class NavProfileComponent implements OnInit {
  @Output() isOverview = new EventEmitter<boolean>();
  @Output() isRepo = new EventEmitter<boolean>();

  constructor(private repoListDataService: RepoListDataService) { }

  ngOnInit(): void {
  }

  loadOverviewPage(){
    this.repoListDataService.loadOverview();
    this.isOverview.emit(this.repoListDataService.isOverview);
    this.isRepo.emit(this.repoListDataService.isRepository);
  }

  loadRepoPage(){
    console.log("isrepo",this.isRepo);
    this.repoListDataService.loadRepo();
    this.isOverview.emit(this.repoListDataService.isOverview);
    this.isRepo.emit(this.repoListDataService.isRepository);
    console.log("isrepo",this.isRepo);

  }
}
