import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  searchUser: string = '';
  error: String = '';

  sendSearch() {
    if (this.searchUser.trim().length == 0) {
      this.error = 'Debe ingresar un valor para realizar una busqueda';
    } else {
      if (this.error.length > 0) {
        this.error = '';
      }
      this.searchEvent.emit(this.searchUser);
    }
  }
}
