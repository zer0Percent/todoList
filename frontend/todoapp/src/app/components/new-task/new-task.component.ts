import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.sass']
})
export class NewTaskComponent implements OnInit {
  taskForm = new FormGroup({
    descriptionFormControl: new FormControl('', [Validators.required]),
  });

  constructor(public dialogRef: MatDialogRef<NewTaskComponent>,
              
              private taskService: TaskService) { }

  ngOnInit(): void {
  }

  public onNoClick() {
    this.dialogRef.close();
  }

  public onAddClick() {
    
    const description: string = this.taskForm.get('descriptionFormControl').value;
    const status: number = 0; // status Pending by default

    const newTask: Task = new Task(description, status);
    
    this.taskService.postTask(newTask).subscribe(isInserted => {
      if(isInserted) {
        this.dialogRef.close();
        this.taskService.updateTasks();
      }
      
    });
  }
}
