### Repository link
https://github.com/zer0Percent/todoList
## Important
Do not forget to execute npm install. It's required in order to execute the front-end application.

## How long did you spend on your solution?
It took me about 5.5 hours to complete the functionality requested keeping in mind that I had to install some Angular libraries and I had troubles with the back-end testing part.
## How do you build and run your solution?
The front-end was built in Angular in his latest version.
The back-end was developend in .NET Core, using Entity Framework Core as well to achieve the three "CRUD" operations.

In order to execute de frontend side you will have to:
* Install Node.js
* Install Angular CLI
* run the command "ng serve" to stand up the front-end server. Execute ng build to build the front-end app.
If you want to check a passing testing, run "ng test". The test were implemented using Jasmine.

In order to execute the back-end, set the proyect PerfectChannel.WebApi as the runnable one and run it. It will stand up the backend server.
On the other hand, a SQLite database was used. The string connection can be changed in the appsettings.json file. 
It is important to change this string in order to access to the database file.

## What technical and functional assumptions did you make when implementing your solution?
* I have assumed that there will be only two tasks categories so, in the front-end, there will always be two groups (two accordions). 
  However, the status field on the Task class is typed as an integer (in order to keep in mind that it is possible to have multiples status in a potential change or requeriment).
* I have assumed that is it possible to have tasks with the same description.

## Explain briefly your technical design and why do you think is the best approach to this problem.
Front-end: 
* Four component were implemented. Two of them are dedicated to show a pop-up to edit/create a new task when clicking certains buttons.
* I implemented a service to perform the calls to de REST API. I used an observable variable to keep a track of the tasks retrieved by the GET method because, when adding a new task or modifying one, we need to show up the new tasks (we update the content that is being watched).

Back-end
* I used a SQLite database in order to persist the information. I applied Entity Framework Core and ASP.NET Core concepts to make the CRUD application with a entity named Task. 

#This is the fatest approach but no the better one. I would have implemented a generic Repository to perform CRUD operations given any kind of entity, using a N-layer architecture (but this approach takes much longer so I ended up to keep the things simple).
## If you were unable to complete any user stories, outline why and how would you have liked to implement them.
I implemented the whole task in 4 hours but the back-end testing part was giving me some troubles. That's why I spend a little bit more time but with no luck (I used macOS and, sometimes, it can be a little bit painful to perform some actions).
