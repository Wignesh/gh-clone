import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //repos:Array<any> = [];

  repos = [
    {
      title: 'project1',
      readme: 'this is project 1',
      language: 'typescript'
    },
    {
      title: 'project1',
      readme: 'this is project 1',
      language: 'typescript'
    },
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

  constructor() { }

  // setRepoList(repos:Array<any>){
  //   this.repos = repos;
  // }

  getRepoList(){
    return this.repos;
  }
}
