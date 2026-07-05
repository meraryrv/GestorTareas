import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  message = signal<string>('');

  show(message:string){

    this.message.set(message);


    setTimeout(()=>{

      this.message.set('');

    },3000);

  }

}