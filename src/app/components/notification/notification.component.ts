import { Component, inject } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone:true,
  templateUrl:'./notification.component.html',
  styleUrls:['./notification.component.css']
})
export class NotificationComponent {


  notificationService = inject(NotificationService);


}