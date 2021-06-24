import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*
  This component will host the elements present below the 
  nav bar( which shows repo and author name and has <>code and issues buttons)
  in repository page
*/
@Component({
  selector: 'app-repository-content',
  templateUrl: './repository-content.component.html',
  styleUrls: ['./repository-content.component.scss']
})
export class RepositoryContentComponent implements OnInit {

  authorName:string="";
  repoName:string="";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.authorName = this.route.snapshot.params.author;
    this.repoName = this.route.snapshot.params.repo;
    console.log("repo-content");
  }

}
