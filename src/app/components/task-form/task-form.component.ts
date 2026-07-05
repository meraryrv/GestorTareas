import { Component, inject, signal} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  animations:[

  trigger('slideFade', [

    transition(':enter',[

      style({

        opacity:0,

        transform:'translateY(-30px)'

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

        '250ms ease-in',

        style({

          opacity:0,

          transform:'translateY(-20px)'

        })

      )


    ])

  ])]

})
export class TaskFormComponent {

  private fb = inject(FormBuilder);
  private taskService = inject(TaskService);
  
  notification = inject(NotificationService);
  showForm = signal(false);
  

  taskForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(5)]]
  });

onSubmit() {

  if (this.taskForm.invalid) {
    this.taskForm.markAllAsTouched();
    return;
  }

  console.log(this.taskForm.value);

   this.taskService.createTask(this.taskForm.value)
    .subscribe({

      next: (task) => {

        console.log("Tarea creada:", task);

        this.taskService.getTasks();

        this.notification.show('Tarea creada correctamente');

        this.taskForm.reset();

      },

      error: (err) => {
  console.error("Error creando tarea:", err.error);
}

    });

}
}