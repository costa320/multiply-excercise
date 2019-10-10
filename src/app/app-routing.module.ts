import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* components */
import { HomePageComponent } from './home-page/home-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { QuestionPageComponent } from './question-page/question-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'questions',
    component: QuestionPageComponent
  },
  {
    path: 'results',
    component: ResultsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
