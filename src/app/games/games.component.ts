import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  games = [];
  searchText = '';
  sortType = 'title';
  sortOrder = 'ascending';
  pageIndex = 0;
  pageSize = 10;
  platforms = [];
  selectedPlatform = '';
  pageSizeOptions = [10, 20, 40, 50];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    if (!this.dataService.games) {
      this.dataService.getGames().subscribe(
        (data: any) => {
          this.dataService.games = data.slice(1).map((game, index) => {
            if(this.platforms.indexOf(game.platform) === -1) {
              this.platforms.push(game.platform);
            }
            game.imageUrl = `https://i.picsum.photos/id/${index}/250/150.jpg`;
            return game;
          });
          this.games = this.dataService.games;
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.games = this.dataService.games;
    }
  }

  resetPageIndex() {
    this.pageIndex = 0;
  }

  sortByField(sortType, sortOrder) {
    this.resetPageIndex();
    this.sortType = sortType;
    this.sortOrder = sortOrder;
  }

  handlePage(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  selectPlatform(platform) {
    this.selectedPlatform = platform;
  }
}
