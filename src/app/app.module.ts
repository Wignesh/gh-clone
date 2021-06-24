import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginPage } from './core/pages/login/login.page';
import { DashboardPage } from './core/pages/dashboard/dashboard.page';
import { RepositoriesPage } from './core/pages/repositories/repositories.page';
import { RepositoryInfoPage } from './core/pages/repository-info/repository-info.page';
import { SettingsPage } from './core/pages/settings/settings.page';
import { ProfilePage } from './core/pages/profile/profile.page';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    DashboardPage,
    RepositoriesPage,
    RepositoryInfoPage,
    SettingsPage,
    ProfilePage,
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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
