import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './core/pages/login/login.page';
import { DashboardPage } from './core/pages/dashboard/dashboard.page';
import { RepositoriesPage } from './core/pages/repositories/repositories.page';
import { RepositoryInfoPage } from './core/pages/repository-info/repository-info.page';
import { SettingsPage } from './core/pages/settings/settings.page';
import { ProfilePage } from './core/pages/profile/profile.page';
import { RepositoryContentComponent } from './core/pages/repository-info/repository-content/repository-content.component';
import { IssuesComponent } from './core/pages/repository-info/issues/issues.component';
import { PullRequestsComponent } from './core/pages/repository-info/pull-requests/pull-requests.component';
import { CodeViewComponent } from './core/pages/repository-info/code-view/code-view.component';
import { AuthGuard } from './core/pages/login/auth.guard';
import { AccessGuard } from './core/pages/access.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    canActivate: [AccessGuard],
  },
  {
    path: 'login',
    component: LoginPage,
    canActivate: [AccessGuard],
  },
  {
    path: 'dashboard',
    component: DashboardPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'repositories',
    component: RepositoriesPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'repository-info/:author/:repo',
    component: RepositoryInfoPage,
    children: [
      {
        path: 'issues',
        component: IssuesComponent,
      },
      {
        path: 'pullrequest',
        component: PullRequestsComponent,
      },
      {
        path: '',
        component: RepositoryContentComponent,
      },
      {
        path:"**",
        component:CodeViewComponent
      }
    ]
  },
  {
    path: 'settings',
    component: SettingsPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
