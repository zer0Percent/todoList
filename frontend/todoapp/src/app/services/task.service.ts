import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }


  public getTasks(): Observable<any> {

    //TODO: 
    const urlGetTasks: string = `todo`;
    return this.httpClient.get(urlGetTasks);
  }

  public postTask(newTask: Task): Observable<any> {

    //TODO: 
    const postTask: string = `todo`;
    return this.httpClient.post(postTask, newTask);
  }

  public modifyTask(givenTask: Task) {

    //TODO: 
    const urlModifyTask: string = `todo`;
    return this.httpClient.put(urlModifyTask, givenTask);

  }

  public getTextStatus(status: number): string {
    return status === 0 ? 'Pending' : 'Completed';
  }

  public filterTasks(tasks: Array<Task>, criteria: number): Array<Task> {

    return tasks.filter(x => x.status === criteria);

  }
}
