import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus Course', 3),
    new Task('Brainstorm angular 2 project ideas', 2),
    new Task('Update Readme for Repos on github', 1),
  ];

  selectedTask: Task = this.tasks[0];

  editTask(clickedTask){
    this.selectedTask = clickedTask;
  }

  isDone(clickedTask: Task){
    if(clickedTask.done === true){
      alert("The task is done!")
    } else {
      alert("The task is not done.  Better get to work!")
    }
  }

  priorityColor(currentTask){
    if(currentTask.priority == 3){
      return "bg-danger"
    } else if (currentTask.priority == 2){
      return "bg-warning"
    }else {
      return "bg-info"
    }
  }
}
