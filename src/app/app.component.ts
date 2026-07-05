import { Component, inject } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ThemeService } from './services/theme.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TaskFormComponent,
    TaskListComponent,
    NotificationComponent,
    SidebarComponent
  ],
  template: `

  <div class="layout">
  <button
class="theme-btn"
(click)="theme.toggle()">

@if(theme.darkMode()) {

  ☀️

} @else {

  🌙

}

</button>

<app-sidebar></app-sidebar>


<main>
  

<app-notification></app-notification>

<header>

<h1>
📋 Gestor de Tareas
</h1>

<p>
Organiza tus pendientes y aumenta tu productividad
</p>

</header>




<app-task-form></app-task-form>

<app-task-list></app-task-list>

</main>
</div>
  `
})


export class AppComponent { 
  theme = inject(ThemeService);
}