import { Component, ViewEncapsulation } from '@angular/core';
import { VideoGame, VideoGames } from './models/video-games';
import { TableVideoGames } from '../table-video-games/table-video-games';
import { FilterVideoGames } from '../filter-video-games/filter-video-games';
import { AddVideogame } from '../add-videogame/add-videogame';

@Component({
  selector: 'app-list-video-games',
  imports: [TableVideoGames,AddVideogame, FilterVideoGames],
  templateUrl: './list-video-games.html',
  styleUrl: './list-video-games.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ListVideoGames {

  videoGames: VideoGames = [
    { label: 'Game 1', year: 2020 }, 
    { label: 'Game 2', year: 2021 }
  ];

  childTitle = 'Liste des jeux vidéo';

  toRemoveVideoGame(value: string): void {
     this.videoGames.pop(); 
  }

  toRemoveVideoGameSpecific(item: VideoGame): void  {
    const index = this.videoGames.indexOf(item);
    if (index !== -1) {
      this.videoGames.splice(index, 1);
    }
  }

}
