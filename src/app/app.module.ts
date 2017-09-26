import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './HomePage/HomePage.component';
import { WorkPageComponent } from './WorkPage/WorkPage.component';
import { ResearchPageComponent } from './ResearchPage/ResearchPage.component';
import { PersonalPageComponent } from './PersonalPage/PersonalPage.component';
import { EducationPageComponent } from './EducationPage/EducationPage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    WorkPageComponent,
    ResearchPageComponent,
    PersonalPageComponent,
    EducationPageComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'work',
        component: WorkPageComponent
      },
      {
        path: 'research',
        component: ResearchPageComponent
      },
      {
        path: 'education',
        component: EducationPageComponent
      },
      {
        path: 'personal',
        component: PersonalPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
