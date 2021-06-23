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
import { NavComponent } from './core/components/shared/nav/nav.component';
import { AuthFooterComponent } from './core/components/shared/auth-footer/auth-footer.component';
import { ButtonComponent } from './core/components/shared/button/button.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
