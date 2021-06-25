import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './core/pages/login/login.page';
import { DashboardPage } from './core/pages/dashboard/dashboard.page';
import { RepositoriesPage } from './core/pages/repositories/repositories.page';
import { RepositoryInfoPage } from './core/pages/repository-info/repository-info.page';
import { SettingsPage } from './core/pages/settings/settings.page';
import { IssuesComponent } from './core/pages/repository-info/issues/issues.component';
import { ProfilePage } from './core/pages/profile/profile.page';
import { RepoListItemComponent } from './core/pages/shared/repo-list-item/repo-list-item.component';  
import { RouterModule } from '@angular/router';
import { NavProfileComponent } from './core/pages/profile/components/nav-profile/nav-profile.component';
import { PopRepoComponent } from './core/pages/profile/components/pop-repo/pop-repo.component';
import { ProfileFooterComponent } from './core/pages/profile/components/profile-footer/profile-footer.component';
import { ProfileDescComponent } from './core/pages/shared/profile-desc/profile-desc.component';
import { ContributionBlockComponent } from './core/pages/profile/components/contribution-block/contribution-block.component';
import { RepoListSearchFormComponent } from './core/components/repo-list-search-form/repo-list-search-form.component';
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
import { LanguagesUsedIndicatorComponent } from './core/pages/repository-info/languages-used-indicator/languages-used-indicator.component';
import { RepoFileNavigationComponent } from './core/pages/repository-info/repo-file-navigation/repo-file-navigation.component';
import { RepoBranchesDropdownComponent } from './core/pages/repository-info/repo-file-navigation/repo-branches-dropdown/repo-branches-dropdown.component'


import { NavComponent } from './core/components/shared/nav/nav.component';
import { AuthFooterComponent } from './core/components/shared/auth-footer/auth-footer.component';
import { ButtonComponent } from './core/components/shared/button/button.component';
import { DashboardLoadingComponent } from './core/pages/dashboard/dashboard-loading/dashboard-loading.component';
import { DashboardSidebarLeftComponent } from './core/pages/dashboard/dashboard-sidebar-left/dashboard-sidebar-left.component';
import { DashboardFooterComponent } from './core/pages/dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardNewsItemCommitsComponent } from './core/pages/dashboard/dashboard-news-item-commits/dashboard-news-item-commits.component';
import { DashboardNewsItemCommitComponent } from './core/pages/dashboard/dashboard-news-item-commit/dashboard-news-item-commit.component';
import { DashboardNewsItemReleaseComponent } from './core/pages/dashboard/dashboard-news-item-release/dashboard-news-item-release.component';
import { DashboardNewsItemStarredComponent } from './core/pages/dashboard/dashboard-news-item-starred/dashboard-news-item-starred.component';
import { DashboardNewsItemCreatedComponent } from './core/pages/dashboard/dashboard-news-item-created/dashboard-news-item-created.component';
import { DashboardNewsItemForkedComponent } from './core/pages/dashboard/dashboard-news-item-forked/dashboard-news-item-forked.component';
import { DashboardNewsLoadingComponent } from './core/pages/dashboard/dashboard-news-loading/dashboard-news-loading.component';
import { DashboardNewsFeedComponent } from './core/pages/dashboard/dashboard-news-feed/dashboard-news-feed.component';
import { DashboardNewsFeedSidebarRightComponent } from './core/pages/dashboard/dashboard-news-feed-sidebar-right/dashboard-news-feed-sidebar-right.component';
import { CodeViewComponent } from './core/pages/repository-info/code-view/code-view.component';
import { RepoCodeDownloadDropdownComponent } from './core/pages/repository-info/repo-file-navigation/repo-code-download-dropdown/repo-code-download-dropdown.component';
import { ResolverDetailsPopupComponent } from './core/pages/repository-info/shared/resolver-details-popup/resolver-details-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkInProgressComponent } from './core/pages/shared/work-in-progress/work-in-progress.component';
import { IssuesFilterDropdownComponent } from './core/pages/repository-info/issues/issues-filter-dropdown/issues-filter-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    DashboardPage,
    RepositoriesPage,
    RepositoryInfoPage,
    SettingsPage,
    ProfilePage,
    RepoListItemComponent,
    NavProfileComponent,
    PopRepoComponent,
    ProfileFooterComponent,
    ProfileDescComponent,
    ContributionBlockComponent,
    RepoListSearchFormComponent,
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
    LanguagesUsedIndicatorComponent,
    RepoFileNavigationComponent,
    RepoBranchesDropdownComponent,
    NavComponent,
    AuthFooterComponent,
    ButtonComponent,
    DashboardLoadingComponent,
    DashboardSidebarLeftComponent,
    DashboardFooterComponent,
    DashboardNewsItemCommitsComponent,
    DashboardNewsItemCommitComponent,
    DashboardNewsItemReleaseComponent,
    DashboardNewsItemStarredComponent,
    DashboardNewsItemCreatedComponent,
    DashboardNewsItemForkedComponent,
    DashboardNewsLoadingComponent,
    DashboardNewsFeedComponent,
    DashboardNewsFeedSidebarRightComponent,
    CodeViewComponent,
    ResolverDetailsPopupComponent,
    RepoCodeDownloadDropdownComponent,
    WorkInProgressComponent,
    IssuesFilterDropdownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, FormsModule, HttpClientModule],
 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
