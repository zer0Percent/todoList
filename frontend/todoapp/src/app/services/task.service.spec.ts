import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task';


describe('TaskService', () => {
  let service: TaskService;
  let serviceTestController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
        providers: [TaskService],
        imports: [HttpClientTestingModule]
    });

    // Inyect the service and the http testing controller
    serviceTestController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TaskService);

    
  });

  afterEach(() => {
    serviceTestController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('#postTask()', () => {
    it('returned Observable should match the right data', () => {
      // mock data to post
      const mockTask: Task = new Task("new task", 0);

      // URL
      const urlPost: string = environment.baseURL + `/AddTask`;
      service.postTask(mockTask)
        .subscribe((retrievedTask: boolean) => {
          expect(retrievedTask).toEqual(true);
        });
        
      // We expect one web service call (the later one)
      const req = serviceTestController.expectOne(urlPost);
  

      expect(req.request.method).toEqual('POST');
  
      req.flush(true);
    }); 

  });

  describe('#getTasks()', () => {

    const expectedTasks: Array<Task> = [];

      it('return an list of tasks when getting them', () => {

      
        const urlGet: string = environment.baseURL + `/GetTasks`;
  
        service.getTasks()
          .subscribe( (retrievedTasks) => {
            // At first, we expect that there's no tasks persisted
            expect(retrievedTasks).toEqual(expectedTasks, 'should return zero tasks');
  
          })
  
          // We expect a call to the web service (the later one)
          const req = serviceTestController.match(urlGet);
    
          expect(req.length).toEqual(1);
  
          // expected zero elements in the later suscription
          req[0].flush([]);
      });
    
  })

  describe('modify a given task', () => {


    it('given a task, modify it by his status', () => {

      const urlModify: string = environment.baseURL + `/ModifyTask`
      const taskToModify: Task = new Task('Permanent description', 0);
      taskToModify.id = 4;

      service.modifyTask(taskToModify)
        .subscribe( result => {

          expect(result).toEqual(true);

        })

      const req = serviceTestController.match(urlModify);
      expect(req.length).toEqual(1);

      req[0].flush(true);
      
    })

    it('it was not modified the given task', () => {

      const urlModify: string = environment.baseURL + `/ModifyTask`
      const taskToModify: Task = new Task('Permanent description', 0);
      taskToModify.id = 4;

      service.modifyTask(taskToModify)
      .subscribe( result => {

        expect(result).toEqual(false);

      })

    const req = serviceTestController.match(urlModify);
    expect(req.length).toEqual(1);

    req[0].flush(false);


    })

  });



});





