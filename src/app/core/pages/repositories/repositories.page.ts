import { Component, OnInit } from '@angular/core';
import { RepoListItemComponent } from 'src/app/core/components/repo-list-item/repo-list-item.component';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.page.html',
  styleUrls: ['./repositories.page.scss'],
})
export class RepositoriesPage implements OnInit {

  repos = [
    {
      title: 'project1',
      readme: 'this is project 1',
      language: 'typescript'
    },
    {
      title: 'project2',
      readme: 'this is project 2',
      language: 'javascript'
    },
    {
      title: 'project3',
      readme: 'this is project 3',
      language: 'python'
    }
  ]

  constructor() {}

  ngOnInit(): void {}
}
