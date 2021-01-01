import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'task-component',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  @Input() givenTask: Task;


  constructor(public taskService: TaskService,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  /**
   * Returns de style of the card depending of the status
   */
  public cardTheme() {
    return { completed: this.givenTask.status };
  }

  public openEditDialog(): any {

    const header: string = `Edit task`;
    const message: string = ``
    const stringButtonSubmmit: string = `Edit`

    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '300px',
      data: {task: this.givenTask,
            header: header,
            message: message,
            buttonSubmmit: stringButtonSubmmit,
            }
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });

  }

}
