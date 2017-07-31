import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppMaterialModule} from './app-material.module';
import {AppComponent} from './app.component';
import {OrgModule} from './org/org.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // .withServerTransition({appId: 'librarium'}),
    AppRoutingModule,
    AppMaterialModule,
    OrgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
