import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { GoalsComponent } from './components/goals/goals.component';
import { TodayComponent } from './components/today/today.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    QuestionsComponent,
    GoalsComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
