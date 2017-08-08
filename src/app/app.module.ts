import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppMaterialModule} from './app-material.module';
import {AppComponent} from './app.component';
import {OrgModule} from './org/org.module';
import {AppCommonModule} from './app-common/app-common.module';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {UserLoginPageComponent} from './components/user-login-page/user-login-page.component';
import {UserCreateAccountComponent} from './components/user-create-account/user-create-account.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserLoginPageComponent,
    UserCreateAccountComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule, // .withServerTransition({appId: 'librarium'}),
    AppRoutingModule,
    AppMaterialModule,
    OrgModule,
    AppCommonModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
