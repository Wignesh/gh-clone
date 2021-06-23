import { Component, OnInit } from '@angular/core';

/* 
  This component will contain the files present inside a repo. will also display the contents of the file
*/
@Component({
  selector: 'app-repository-code',
  templateUrl: './repository-code.component.html',
  styleUrls: ['./repository-code.component.scss']
})
export class RepositoryCodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
