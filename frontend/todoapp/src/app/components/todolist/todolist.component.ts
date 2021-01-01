import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'todolist-component',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass']
})
export class TodolistComponent implements OnInit {

  constructor(public taskService: TaskService,
              public dialog: MatDialog) { }

  panelOpenState = false;
 
  completed: Array<Task> = [];
  pending: Array<Task> = [];

  tasks: Array<Task> = [new Task('escuchar el disco de dua lipa', 0), new Task('escuchar el disco de dua lipa', 0),  new Task('escuchar miley cyrus', 1)];

  tasksRetrieved: boolean = false;

  ngOnInit(): void {

    // We retrieve the tasks calling de web service
    this.retrieveTasks();
    
  }

  public retrieveTasks(){

    this.taskService.tasks$.subscribe(tasks => {

      this.completed = tasks.filter(x => x.status === 1);
      this.pending = tasks.filter(x => x.status === 0);

    });
    this.taskService.getTasks();
/*     this.taskService.getTasks().subscribe( retrievedTasks => {

      this.completed = retrievedTasks.filter(x => x.status === 1);
      this.pending = retrievedTasks.filter(x => x.status === 0);
      this.tasksRetrieved = true;

    });  */
  }

  public onClickNewTask(): any {

    const dialogRef = this.dialog.open(NewTaskComponent, {
      width: '300px',

    });

  }

  public areThereCompleted(): boolean {
    return this.completed.length > 0;
  }

  public areTherePending(): boolean {
    return this.pending.length > 0;
  }
 }
