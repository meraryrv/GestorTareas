import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { NotificationService } from '../../services/notification.service';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    TaskEditComponent,
    FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  animations:[

trigger('slideFade', [

transition(':enter',[

style({

opacity:0,

transform:'translateY(-20px)'

}),


animate(

'300ms ease-out',

style({

opacity:1,

transform:'translateY(0)'

})

)

]),


  transition(':leave',[

  animate(

  '200ms ease-in',

  style({

  opacity:0,

  transform:'translateY(-20px)'

  })

  )

  ])

  ])

  ]
})
export class TaskListComponent implements OnInit {

  taskService = inject(TaskService);
  notification = inject(NotificationService);
  filter = 'all';
  searchText = '';
  showFilters = signal(false);

        selectedTask: Task | null = null;
  

  ngOnInit(): void {
    this.taskService.getTasks();
  }


 editTask(task: Task){

  this.selectedTask = task;

}


  closeEdit = () => {

    this.selectedTask = null;

  }


  deleteTask(id:string){

    this.taskService.deleteTask(id)
      .subscribe(()=>{

        this.taskService.getTasks();

        this.notification.show('Tarea eliminada correctamente');

      });

  }


  completeTask(id:string){

    this.taskService.completeTask(id)
      .subscribe(()=>{

        this.taskService.getTasks();

        this.notification.show('Tarea actualizada correctamente');

      });


  }

  get filteredTasks(){

  let tasks = this.taskService.tasks();


  // filtro por estado
  if(this.filter === 'completed'){

    tasks = tasks.filter(
      task => task.isComplete
    );

  }


  if(this.filter === 'pending'){

    tasks = tasks.filter(
      task => !task.isComplete
    );

  }


  // búsqueda
  if(this.searchText){

    tasks = tasks.filter(task =>

      task.title
      .toLowerCase()
      .includes(
        this.searchText.toLowerCase()
      )

    );

  }


  return tasks;

}
}