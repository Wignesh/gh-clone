import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPage } from './core/pages/login/login.page';
import { DashboardPage } from './core/pages/dashboard/dashboard.page';
import { RepositoriesPage } from './core/pages/repositories/repositories.page';
import { RepositoryInfoPage } from './core/pages/repository-info/repository-info.page';
import { SettingsPage } from './core/pages/settings/settings.page';
import { IssuesComponent } from './core/pages/repository-info/issues/issues.component';
import { ProfilePage } from './core/pages/profile/profile.page';
import { RepositoryContentComponent } from './core/pages/repository-info/repository-content/repository-content.component';
import { RepositoryCodeComponent } from './core/pages/repository-info/repository-code/repository-code.component';
import { RepositoryPageHeaderComponent } from './core/pages/repository-info/repository-page-header/repository-page-header.component';
import { RepositoryPageAboutComponent } from './core/pages/repository-info/repository-page-about/repository-page-about.component';

import { PullRequestsComponent } from './core/pages/repository-info/pull-requests/pull-requests.component';
import { ResolverCardContainerComponent } from './core/pages/repository-info/shared/resolver-card-container/resolver-card-container.component';
import { ResolverHeaderbarComponent } from './core/pages/repository-info/shared/resolver-headerbar/resolver-headerbar.component';
import { ResolverWelcomeComponent } from './core/pages/repository-info/shared/resolver-welcome/resolver-welcome.component';
import { ResolverDetailsCardComponent } from './core/pages/repository-info/shared/resolver-details-card/resolver-details-card.component';
import { RepositoryPageReadmeComponent } from './core/pages/repository-info/repository-page-readme/repository-page-readme.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LanguagesUsedIndicatorComponent } from './core/pages/repository-info/languages-used-indicator/languages-used-indicator.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    DashboardPage,
    RepositoriesPage,
    RepositoryInfoPage,
    SettingsPage,
    ProfilePage,
    RepositoryContentComponent,
    RepositoryCodeComponent,
    RepositoryPageHeaderComponent,
    RepositoryPageAboutComponent,
    PullRequestsComponent,
    IssuesComponent,
    ResolverCardContainerComponent,
    ResolverHeaderbarComponent,
    ResolverWelcomeComponent,
    ResolverDetailsCardComponent,
    RepositoryPageReadmeComponent,
    LanguagesUsedIndicatorComponent
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
