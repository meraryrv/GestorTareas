import { Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "../models/task";
import { environment } from "../../environments/environment";

@Injectable({  providedIn: "root" })

export class TaskService {
    private apiUrl = `${environment.apiUrl}/Task`;
    tasks = signal<Task[]>([]);

    constructor(private http: HttpClient) {}

    getTasks() {

    this.http.get<Task[]>(this.apiUrl)
    .subscribe({

      next: (tasks) => {

        console.log("Tareas recibidas:", tasks);

        this.tasks.set(tasks);

      },

      error: (err) => {

        console.error("Error cargando tareas:", err);

      }

    });

}

    createTask(task: any){
        return this.http.post<Task>(this.apiUrl, task);
    }

    updateTask(id: string, task: any){
        return this.http.put(`${this.apiUrl}/${id}`, task);
    }

    deleteTask(id: string){
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

    completeTask(id: string){

  return this.http.patch(
    `${this.apiUrl}/${id}/complete`,
    {}
  );

}
}