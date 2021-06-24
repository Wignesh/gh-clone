import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './core/pages/login/login.page';
import { DashboardPage } from './core/pages/dashboard/dashboard.page';
import { RepositoriesPage } from './core/pages/repositories/repositories.page';
import { RepositoryInfoPage } from './core/pages/repository-info/repository-info.page';
import { SettingsPage } from './core/pages/settings/settings.page';
import { ProfilePage } from './core/pages/profile/profile.page';
import { RepoListItemComponent } from './core/pages/shared/repo-list-item/repo-list-item.component';  
import { RouterModule } from '@angular/router';
import { NavProfileComponent } from './core/pages/shared/nav-profile/nav-profile.component';
import { PopRepoComponent } from './core/pages/profile/components/pop-repo/pop-repo.component';
import { ProfileFooterComponent } from './core/pages/profile/components/profile-footer/profile-footer.component';
import { ProfileDescComponent } from './core/pages/shared/profile-desc/profile-desc.component';
import { ContributionBlockComponent } from './core/pages/profile/components/contribution-block/contribution-block.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
    
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
