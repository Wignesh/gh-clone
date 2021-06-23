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
import { RepositoryContentComponent } from './core/pages/repository-info/repository-content/repository-content.component';
import { RepositoryCodeComponent } from './core/pages/repository-info/repository-code/repository-code.component';
import { RepositoryPageHeaderComponent } from './core/pages/repository-info/repository-page-header/repository-page-header.component';
import { RepositoryPageAboutComponent } from './core/pages/repository-info/repository-page-about/repository-page-about.component';


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

  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
