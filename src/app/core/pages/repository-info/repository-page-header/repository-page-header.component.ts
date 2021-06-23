import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-repository-page-header',
  templateUrl: './repository-page-header.component.html',
  styleUrls: ['./repository-page-header.component.scss']
})
export class RepositoryPageHeaderComponent implements OnInit {

  currentURL: string = ""

  constructor(private router: Router) {

    this.currentURL = router.url

    console.log(this.currentURL)



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
