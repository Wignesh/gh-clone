import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-file-navigation',
  templateUrl: './repo-file-navigation.component.html',
  styleUrls: ['./repo-file-navigation.component.scss']
})
export class RepoFileNavigationComponent implements OnInit {

  @Input() isRootPage:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
