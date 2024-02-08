import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchUser:string = "";

  receivedSearch($event:string){
    this.searchUser = $event
  }
}
