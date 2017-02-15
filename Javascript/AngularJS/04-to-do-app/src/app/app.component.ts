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
    new Task('Finish weekend Angular homework for Epicodus Course', 'High'),
    new Task('Brainstorm angular 2 project ideas', 'Hedium'),
    new Task('Update Readme for Repos on github', 'Low'),
  ];

  editTask(){
    alert("You just requested to edit a Task!")
  }

  isDone(clickedTask: Task){
    if(clickedTask.done === true){
      alert("The task is done!")
    } else {
      alert("The task is not done.  Better get to work!")
    }
  }
}
