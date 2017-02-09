export class Task {
  done: boolean;
  description: string;
  priority: string;

  constructor(descriptionParameter: string, priorityParameter: string) {
    this.done = false;
    this.description = descriptionParameter;
    this.priority = priorityParameter;
  }
}


var tasks: Task[] = [];
tasks.push(new Task('Laundry', 'high'));
console.log(tasks);
