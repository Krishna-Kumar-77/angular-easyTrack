import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import {type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  
  // alternate syntax for @Input() name?: string; is @Input() name: string | undefined;
  // @Input() name?: string;

  @Input({required:true}) userId!: string;
  @Input({required:true}) name!: string;
  isAddingTask = false;
  // private tasksService = new TasksService();

  // private tasksService: TasksService;
  
  constructor(private tasksService: TasksService){
    // this.tasksService = tasksService;
  }

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id:string){
    
  // }
  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCloseAddTask(){
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData){
    
  //   this.isAddingTask = false;
  // }
}
