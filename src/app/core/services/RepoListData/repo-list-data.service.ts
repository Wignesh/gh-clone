import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepoListDataService {

  repos = [
    {
      title: 'object_detector',
      author:'droidLight',
      readme: 'This is a webpage built using angular, which allows a user to add notes and Todo items',
      language: 'typescript',
      tags: ['angular', 'typescript', 'html'],
      lastupdated: '5 days ago'
    },
    {
      title: 'Go-TheAlgorithms',
      author:'Wignesh',
      readme: 'Machine learning project built with python and convolutional neural network to learn image detection',
      language: 'Python',
      tags: ['python', 'jupyter Notebook', 'CNN'],
      lastupdated: '25 days ago'
    },
    {
      title: 'suggest-a-random-movie',
      author:'Abishek-Balasubramaniam',
      readme: 'Movie suggestion website built using django and MySQL database',
      language: 'python',
      tags: ['python', 'Django', 'MySQL', 'HTML'],
      lastupdated: '3 months ago'
    },
    {
      title: 'Colosseum_2k19',
      author: 'droidLight',
      readme: 'This repository contains all Python Projects.',
      language: 'python',
      tags: ['python', 'python GUI', 'python-webapp'],
      lastupdated: 'Updated on Apr 27'
    },
    {
      title: 'Tanjore-Disaster-Management',
      author: 'droidLight',
      readme: 'This is the Project made for Disaster Management in Tanjore,Tamil Nadu.',
      language: 'c',
      tags: ['tree', 'stack', 'heap'],
      lastupdated: 'updated on Mar 29'
    },
    {
      title: 'Todo-Notes-and-Contacts',
      author:'Abishek-bala',
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

  
  isOverview: boolean = true;
  isRepository: boolean = false;

  loadRepo(){
    this.isRepository = true;
    this.isOverview = false; 
  }

  loadOverview(){
    this.isRepository=false;
    this.isOverview=true;
  }

}
