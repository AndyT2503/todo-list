import { StorageService } from './services/storage.service';
import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { TodoItem } from './models/todo-item.model';

let ID = 1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  newContent!: string;
  todoItemList$ = this.storageService.todoItemList();
  constructor(
    private storageService: StorageService
  ) {}
  ngOnInit(): void {
  }

  addNewTask(): void{
    if (!this.newContent) {
      alert('Please input new content!!');
      return;
    }
    const newTodoItem: TodoItem = {
      content: this.newContent,
      id: ++ID
    };
    this.storageService.addNewItem(newTodoItem);
    this.newContent = '';
  }
}
