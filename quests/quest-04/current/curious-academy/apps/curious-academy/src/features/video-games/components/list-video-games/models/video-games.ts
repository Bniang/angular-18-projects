export interface VideoGame {
  id?: number;
  label: string;
  year: number;
  /*genre: string;
  releaseDate: string;
  developer: string;
  publisher: string;
  platform: string;
  rating: number;*/
}

export type VideoGames = VideoGame[];