import { StorageService } from './../../services/storage.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
  inject,
  ChangeDetectorRef,
} from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.model';
import { ActivatedRoute, Router } from '@angular/router';

let ID = 1;
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  content!: string;
  isEdit = false
  constructor(
    private storageService: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    const  { id }= this.activatedRoute.snapshot.queryParams;
    this.isEdit  = !!id
    if (!id) {
      return;
    }
    const todoItem = this.storageService.getTodoItemById(+id);
    this.content = todoItem.content;
  }

  submit(): void {
    if (!this.content) {
      alert('Please input new content!!');
      return;
    }
    if (!this.isEdit) {
      const newTodoItem: TodoItem = {
        content: this.content,
        id: ++ID,
      };
      this.storageService.addNewItem(newTodoItem);
    } else {
      const  { id }= this.activatedRoute.snapshot.queryParams;
      this.storageService.updateItem(+id, this.content);
    }
    this.router.navigateByUrl('list');
  }
}
