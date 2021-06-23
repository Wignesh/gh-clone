import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
