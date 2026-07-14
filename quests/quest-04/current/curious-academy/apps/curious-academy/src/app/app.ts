import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { ListVideoGames } from '../features/video-games/components/list-video-games/list-video-games';
import { AddVideogame } from '../features/video-games/components/add-videogame/add-videogame';
import {MatSliderModule} from '@angular/material/slider';   
@Component({
  imports: [ RouterModule,ListVideoGames,MatSliderModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'curious-academy';
}
