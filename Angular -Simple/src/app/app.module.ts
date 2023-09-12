import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeeComponent } from './home/homee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home copy/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { FirstPageComponent } from './first-page/first-page.component';
//import { UDashboardComponent } from './u-dashboard/u-dashboard.component';
import { UDashboardComponent } from './board-user/u-dashboard/u-dashboard.component';
import { AdDashboardModule } from './board-admin/ad-dashboard/ad-dashboard.module';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { GuestComponent } from './guest/guest.component';
// import { USidenavModule } from './board-user/u-sidenav/u-sidenav.module';
// import { UHeaderModule } from './board-user/u-header/u-header.module';
import { UHomeModule } from './board-user/u-home/u-home.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { TestComponent } from './test/test.component';
//import { UDashboardModule } from './board-user/u-dashboard/u-dashboard.module';
import { CourtComponent } from './board-admin/court/court.component';
import { CauseComponent } from './board-admin/cause/cause.component';
import { ContactComponent } from './board-admin/contact/contact.component';
// import { UserSidenavComponent } from './user-com/user-sidenav/user-sidenav.component';
// import { UserNavbarComponent } from './user-com/user-navbar/user-navbar.component';
// import { UserUhomeComponent } from './user-com/user-uhome/user-uhome.component';
import {MatBadgeModule} from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import { ChatComponent } from './angularbot/chat/chat.component';
// import { MainComponent } from './angularbot/main/main.component';
// import { AngularBotModule } from './angularbot/angular-bot.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeeComponent,
    DashboardComponent,
    SidenavComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    NavbarComponent,
    FirstPageComponent,
    UDashboardComponent,
    GuestComponent,
    NotFoundComponent,
    TestComponent,
    CourtComponent,
    CauseComponent,
    ContactComponent,
    // ChatComponent,
    // MainComponent
    // UserSidenavComponent,
    // UserNavbarComponent,
    // UserUhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //* MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    //*
    FormsModule,
    HttpClientModule,
    AdDashboardModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    UHomeModule,
    NgbModule,
    MatBadgeModule,
    MatTableModule,
    MatSlideToggleModule,
    // AngularBotModule

  ],


  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
