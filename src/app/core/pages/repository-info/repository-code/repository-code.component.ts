import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { GithubService } from 'src/app/core/services/github/github.service';

/* 
  This component will contain the files present inside a repo. will also display the contents of the file
*/
@Component({
  selector: 'app-repository-code',
  templateUrl: './repository-code.component.html',
  styleUrls: ['./repository-code.component.scss']
})
export class RepositoryCodeComponent implements OnInit {

  @Input() authorName: string = "";
  @Input() repoName: string = "";

  isFile: boolean = false;
  fileList: any;
  fileContents: string = "";

  constructor(private route: ActivatedRoute, private githubServices: GithubService) { }

  ngOnInit(): void {

    //saving data for subsequent access
    if (this.authorName !== "" && this.repoName !== "") {
      localStorage.setItem("name", this.authorName);
      localStorage.setItem("repo", this.repoName);
    }

    //listen to directories updated from the services
    this.githubServices.directoryObservable.subscribe((results) => {
      this.fileList = results;
    });

    //listen to file contents results updated from the services
    this.githubServices.fileObservable.subscribe((content) => {
      this.fileContents = content;      
    })


    //observe to changes in url for retrieving files
    this.route.url.subscribe((segments: UrlSegment[]) => {

      //retrieve the url
      let path = "";
      segments.forEach((item) => {
        path = path + "/" + item.path;
      });
      this.isFile = this.githubServices.checkIfFile(path);


      let temp = localStorage.getItem("name");
      this.authorName = (temp === null) ? "sibi" : temp;
      temp = localStorage.getItem("repo");
      this.repoName = (temp === null) ? "object_detector" : temp;

      if(this.isFile){
        this.githubServices.getFile(this.authorName, this.repoName, path);
      }else{
        this.githubServices.getContents(this.authorName, this.repoName, path);        
      }
      
    });
  }

}
