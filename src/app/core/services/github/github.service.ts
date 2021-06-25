import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import files from '../../config/files.config';

//http headers
const OPTIONS = {
  headers: new HttpHeaders({ "Content-Type": "application/text" })
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private directorySubject = new BehaviorSubject("");
  directoryObservable = this.directorySubject.asObservable();

  private fileSubject = new BehaviorSubject("");
  fileObservable = this.fileSubject.asObservable();

  constructor(private http: HttpClient) { }

  getContents(author: string, repo: string, path: string) {
    console.log(`getContents ${author}\t${repo}\t${path}`);
    //check for null
    let url = (author !== "" && repo !== "") ?
      `https://api.github.com/repos/${author}/${repo}/contents${path}` :
      "https://api.github.com/repos/droidLight/object_detector/contents";

    //make rest-API call
    this.http.get(url, OPTIONS).subscribe((response) => {

      let dirResults: any = [];
      let fileResults: any = [];
      let results: any = [];
      if (response !== null) {

        Object.entries(response).forEach((item) => {

          //removing the root path from the url
          let newPath = item[1].path.replace(path?.replace("/", ""), "");
          //for relative url routing
          newPath = newPath.replace("/", "");
          let temp = {
            name: item[1].name,
            path: newPath,
            type: item[1].type
          };
          if (temp.type === "dir") {
            dirResults.push(temp);
          } else {
            fileResults.push(temp);
          }
          //the result will have folders first and then files
          results = dirResults.concat(fileResults);
        });
        this.directorySubject.next(results);
      }

    });
  }


  getFile(author: string, repo: string, path: string) {

    let url = (author !== "" && repo !== "") ?
      `https://api.github.com/repos/${author}/${repo}/contents${path}` :
      "https://api.github.com/repos/droidLight/object_detector/contents/requirements.txt";


    this.http.get(url, OPTIONS).subscribe((response) => {

      if (response !== null) {

        Object.entries(response).forEach((item) => {

          //get the file content which is base64 encoded
          //decode it to get original text
          if (item[0] === "content") {
            let content = item[1];
            let decoded = atob(content);

            this.fileSubject.next(decoded);
          }
        });
      }

    });
  }

  checkIfFile(path: string) {
    let isFile = false;
    for(let i = 0; i < files.length; i++){
      isFile = path.includes(files[i]);
      if(isFile){
        break;
      }
    }    
    console.log(`isFile: ${isFile}`);
    return isFile;
  }
}
