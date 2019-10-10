import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NumberButtonComponent } from './home-page/number-button/number-button.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { QuestionComponent } from './question-page/question/question.component';
/* MATERIAL */
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NumberButtonComponent,
    ResultsPageComponent,
    QuestionPageComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
