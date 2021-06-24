import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent ,ActivatedRoute} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-repository-page-header',
  templateUrl: './repository-page-header.component.html',
  styleUrls: ['./repository-page-header.component.scss']
})
export class RepositoryPageHeaderComponent implements OnInit {

  currentURL: string = ""
  author:string = ""
  repositoryName:string = ""
  basePath:string = ""

  constructor(private router: Router,private route:ActivatedRoute) {

    this.currentURL = router.url

    route.params.subscribe(params=>{
      this.author = params["author"]
      this.repositoryName = params["repo"]
      this.basePath = '/repository-info/'+this.author + "/"+this.repositoryName
    })

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe(event => {
        event = event as RouterEvent
        this.currentURL = event.url
    });
  }

  ngOnInit(): void {

  }

}
