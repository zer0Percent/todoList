import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskToObserve = new BehaviorSubject<any>([]);
  public tasks$ = this.taskToObserve.asObservable();

  constructor(private httpClient: HttpClient) { }


  public getTasks() {

    const urlGetTasks: string = environment.baseURL + `/GetTasks`;
    this.httpClient.get(urlGetTasks).subscribe(tasks => {
      
      this.taskToObserve.next(tasks);
    })
                  
    //eturn this.httpClient.get(urlGetTasks).;
  }

  public postTask(newTask: Task): Observable<any> {

    //TODO: 
    const postTask: string = environment.baseURL + `/AddTask`;
    return this.httpClient.post(postTask, newTask);
  }

  public modifyTask(givenTask: Task) {

    //TODO: 
    const urlModifyTask: string = environment.baseURL + `/ModifyTask`;
    return this.httpClient.put(urlModifyTask, givenTask);

  }

  public getTextStatus(status: number): string {
    return status === 0 ? 'Pending' : 'Completed';
  }

  public filterTasks(tasks: Array<Task>, criteria: number): Array<Task> {

    return tasks.filter(x => x.status === criteria);

  }
}
