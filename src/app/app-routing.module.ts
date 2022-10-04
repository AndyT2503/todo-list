import { TodoListComponent } from './ui/todo-list/todo-list.component';
import { InputComponent } from './ui/input/input.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    component: InputComponent
  },
  {
    path: 'list',
    component: TodoListComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
