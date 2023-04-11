import { Component } from '@angular/core';
import { Task } from './models';
import { Capitalize } from './utils';
import { itemAnimation } from './animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[itemAnimation]
})
export class AppComponent {
  list: Task[] = [
    { name: 'Fare la spesa', completed: false },
    { name: 'Fare esercizi Front-end', completed: false },
    { name: 'Fare esercizi Back-end', completed: false },
    { name: 'Guardare approfondimenti', completed: false },
  ];

  addToList(form: NgForm): void {
    let newTask = {
      name: Capitalize(form.value.taskToAdd),
      completed: false,
    };
    this.list.push(newTask);
  }

  toggleCompleted(index: number) {
    this.list[index].completed = !this.list[index].completed;
  }

  removeItem(index: number, event: Event){
    event.preventDefault()
    this.list.splice(index,1)


  };
}
