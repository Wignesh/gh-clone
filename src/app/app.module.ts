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
import { DashboardSidebarComponent } from './core/pages/dashboard/dashboard-sidebar/dashboard-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    DashboardPage,
    RepositoriesPage,
    RepositoryInfoPage,
    SettingsPage,
    ProfilePage,
    DashboardSidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
