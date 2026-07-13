import { Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { VideoGame } from '../list-video-games/models/video-games';

@Component({
  selector: 'app-add-videogame',
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-videogame.html',
  styleUrl: './add-videogame.css',
})
export class AddVideogame {

  videogame:VideoGame = {
    label: '',
    year: new Date().getFullYear(),
    /*genre: '',
    releaseDate: '',
    developer: '',
    publisher: '',
    platform: '',
    rating: 0*/
  }

  form = viewChild<NgForm>('videogameForm');

  //@ViewChild('videogameForm') form?: NgForm;
    
  save() {
    console.log('Form submitted:', this.form()?.form.value);
    console.log('Form submitted:', this.form()?.form.valid);
    console.log('Form submitted errors:', this.form()?.controls["label"].errors);
    console.log(this.videogame);
  }

}
