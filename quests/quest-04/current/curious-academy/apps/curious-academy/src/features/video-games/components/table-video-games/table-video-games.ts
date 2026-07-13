import { Component, input, output } from '@angular/core';
import { VideoGame, VideoGames } from '../list-video-games/models/video-games';

@Component({
  selector: 'app-table-video-games',
  imports: [],
  templateUrl: './table-video-games.html',
  styleUrl: './table-video-games.css',
})
export class TableVideoGames {

  title = input<string>();

  items = input.required<VideoGames>();

  askToRemoveVideoGame = output<string>();

  askToRemoveVideoGameSpecific = output<VideoGame>();  

  clickToRemove(): void {
   this.askToRemoveVideoGame.emit('ask to remove video game');  
  }   

  clickToRemoveSpecific(item: VideoGame): void {
    this.askToRemoveVideoGameSpecific.emit(item);
  }


}
