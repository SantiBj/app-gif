import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IGif } from 'src/app/models/gif.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit, OnChanges {
  @Input() searchUser = '';
  gifs!: IGif[]|null;

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchGifs(this.searchUser ? this.searchUser : 'Angular Js');
  }

  ngOnChanges(changes: SimpleChanges ): void {
    if (changes['searchUser'] && changes['searchUser'].currentValue) {
      this.gifs = null
      this.fetchGifs(this.searchUser ? this.searchUser : 'Angular');
    }
  }

  fetchGifs(search: string): void {
    this._apiService.getGifs(search).subscribe((data) => {
      this.gifs = data;
    });
  }
}
