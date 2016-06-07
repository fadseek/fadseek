import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fadseek-app',
  templateUrl: 'fadseek.component.html',
  styleUrls: ['fadseek.component.css']
})
export class FadseekAppComponent {
  title = 'fadseek works!';
  i = 0;
  onClick($event){
    console.log("onClick", $event);
    this.i++;
    this.title = "you have clicked this " + this.i +" times";
  }
}
