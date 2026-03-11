import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { WorkExperience } from './work-experience/work-experience';
import { Education } from './education/education';
import { Languages } from './languages/languages';
import { Skills } from './skills/skills';
import { Interests } from './interests/interests';
import { Certificates } from './certificates/certificates';
import { CardContainer } from './card-container/card-container';
import { LeftContainer } from './left-container/left-container';
import { RightContainer } from './right-container/right-container';

@NgModule({
  declarations: [
    App,
    Header,
    WorkExperience,
    Education,
    Languages,
    Skills,
    Interests,
    Certificates,
    CardContainer,
    LeftContainer,
    RightContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
