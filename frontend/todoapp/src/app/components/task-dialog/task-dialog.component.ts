import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.sass']
})
export class TaskDialogComponent implements OnInit {

  // FormControl to catch the value (number) of the chosen option
  status = new FormControl('');

  // tuples of status a their corresponding status number. Ideally, this would come via a web service
  states: Array<[string, number]> = [['Pending', 0], ['Completed', 1]];

  constructor(public dialogRef: MatDialogRef<TaskDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, // data contains an object referecing the clicked task
              private taskService: TaskService) { }

  ngOnInit(): void {
    // Set the initial value of the select
    const state: [string, number] = this.getStatus(this.data.task);
    this.status.setValue(state);
  }

  onEditClick(): void {

    const numberChosenStatus: number = this.status.value[1];
    const task: Task = new Task(this.data.task.description, numberChosenStatus);

    console.log(task);
    //TODO
    //this.taskService.modifyTask(task);
    // update tasks
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  public getStatus(task: Task): [string, number] {
    return this.states.find(x => x[1] === task.status);
  }
}
