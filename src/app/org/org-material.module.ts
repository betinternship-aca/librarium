import {NgModule} from '@angular/core';
import {MdButtonModule, MdCardModule, MdInputModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ]
})
export class OrgMaterialModule {
}
