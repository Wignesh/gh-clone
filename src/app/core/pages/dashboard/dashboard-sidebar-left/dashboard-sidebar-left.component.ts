import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar-left',
  templateUrl: './dashboard-sidebar-left.component.html',
  styleUrls: ['./dashboard-sidebar-left.component.scss'],
})
export class DashboardSidebarLeftComponent implements OnInit {
  isSidebarLoading: boolean = true;
  repos: any = [];
  _repos: any = [];
  isLoadingMore: boolean = false;
  searchTerm: string = '';

  constructor() {
    this._repos = [
      {
        name: 'Wignesh/gh-clone',
        isPrivate: true,
      },
      {
        name: 'Wignesh/coda-training',
        isPrivate: false,
      },
      {
        name: 'Wignesh/farmiest',
        isPrivate: true,
      },
      {
        name: 'Wignesh/Wignesh',
        isPrivate: false,
      },
      {
        name: 'Wignesh/angular-todo',
        isPrivate: false,
      },
      {
        name: 'Wignesh/mailway-org',
        isPrivate: true,
      },
      {
        name: 'Wignesh/Java',
        isPrivate: true,
      },
      {
        name: 'Wignesh/books',
        isPrivate: false,
      },
      {
        name: 'mailway-app/mailway',
        isPrivate: false,
      },
      {
        name: 'Wignesh/bd-env',
        isPrivate: false,
      },
      {
        name: 'okteto/okteto',
        isPrivate: false,
      },
      {
        name: 'Wignesh/docker',
        isPrivate: true,
      },
      {
        name: 'Wignesh/Java-Design-Patter',
        isPrivate: true,
      },
      {
        name: 'Wignesh/Linkedin',
        isPrivate: true,
      },
      {
        name: 'Wignesh/okteto-sync',
        isPrivate: true,
      },
      {
        name: 'Wignesh/hpl',
        isPrivate: true,
      },
      {
        name: 'Wignesh/rn-stocks',
        isPrivate: true,
      },
      {
        name: 'Wignesh/js-image-compressor',
        isPrivate: false,
      },
      {
        name: 'Wignesh/geny-auto',
        isPrivate: true,
      },
      {
        name: 'e2necc',
        isPrivate: false,
      },
      {
        name: 'flask-todo',
        isPrivate: false,
      },
    ];
    this.repos = this._repos.slice(0, 7);
  }

  showMoreRepos() {
    this.isLoadingMore = true;
    if (this.searchTerm == '') {
      setTimeout(() => {
        this.isLoadingMore = false;
        this.repos = this._repos;
      }, 1000);
    }
  }

  searchRepo() {
    if (this.searchTerm == '') {
      this.repos = this._repos.slice(0, 7);
    }
    this.repos = this._repos.filter((repo: any) => {
      return repo.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isSidebarLoading = false;
    }, 500);
  }
}
