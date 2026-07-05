import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn:'root'
})
export class ThemeService {


  darkMode = signal(false);


  toggle(){

    this.darkMode.update(
      value => !value
    );


    document.body.classList.toggle(
      'dark',
      this.darkMode()
    );

  }


}