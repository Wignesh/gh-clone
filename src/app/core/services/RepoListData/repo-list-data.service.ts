import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepoListDataService {

  repos = [
    {
      title: 'Todo',
      readme: 'This is a webpage built using angular, which allows a user to add notes and Todo items',
      language: 'typescript',
      tags: ['angular', 'typescript', 'html'],
      lastupdated: '5 days ago'
    },
    {
      title: 'Image Detection',
      readme: 'Machine learning project built with python and convolutional neural network to learn image detection',
      language: 'Python',
      tags: ['python', 'jupyter Notebook', 'CNN'],
      lastupdated: '25 days ago'
    },
    {
      title: 'Random movie recommendation',
      readme: 'Movie suggestion website built using django and MySQL database',
      language: 'python',
      tags: ['python', 'Django', 'MySQL', 'HTML'],
      lastupdated: '3 months ago'
    },
    {
      title: 'Python projects',
      readme: 'This repository contains all Python Projects.',
      language: 'python',
      tags: ['python', 'python GUI', 'python-webapp'],
      lastupdated: 'Updated on Apr 27'
    },
    {
      title: 'Data structures and Algorithms',
      readme: 'All Data Structures Implementation in C. All famous Algorithms implementation in C. Dynamic Programming Algorithms.',
      language: 'c',
      tags: ['tree', 'stack', 'heap'],
      lastupdated: 'updated on Mar 29'
    },
    {
      title: 'C++_tutorial',
      readme: 'This repository contains all my cpp tutorial projects',
      language: 'c++',
      tags: ['c++'],
      lastupdated: '5 days ago'
    },
  ]

  constructor() { } 

  getrepos(){
    return this.repos;
  }
}
