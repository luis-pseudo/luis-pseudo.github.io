import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './header/header';
import { WorkExperienceComponent } from './work-experience/work-experience';
import { EducationComponent } from './education/education';
import { LanguagesComponent } from './languages/languages';
import { SkillsComponent } from './skills/skills';
import { InterestsComponent } from './interests/interests';
import { CertificatesComponent } from './certificates/certificates';
import { CardContainer } from './card-container/card-container';
import { LeftContainer } from './left-container/left-container';
import { RightContainer } from './right-container/right-container';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    WorkExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    SkillsComponent,
    InterestsComponent,
    CertificatesComponent,
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
