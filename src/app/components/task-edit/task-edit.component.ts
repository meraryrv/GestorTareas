import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent {

  private fb = inject(FormBuilder);
  private taskService = inject(TaskService);

  notification = inject(NotificationService);


  @Input() task!: Task;

  @Input() close!: () => void;


  taskForm = this.fb.group({

    title: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],

    description: ['', [
      Validators.required
    ]],

    isComplete: [false]

  });


  ngOnChanges(){

    if(this.task){

      this.taskForm.patchValue({

        title: this.task.title,

        description: this.task.description,

        isComplete: this.task.isComplete

      });

    }

  }



  updateTask(){

    if(this.taskForm.invalid){
      this.taskForm.markAllAsTouched();
      return;
    }


    this.taskService
      .updateTask(
        this.task.id.toString(),
        this.taskForm.value
      )
      .subscribe(()=>{


        this.taskService.getTasks();

        this.notification.show('Tarea actualizada correctamente');
        this.close();


      });

  }

}