import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiExercise = 'https://wger.de/api/v2/exercise/?equipment=7&limit=40&language=2';
  private apiExerciseImages = 'https://wger.de/api/v2/exerciseimage/';
  // private API_KEY = 'b82b208a0dbd9f52b1b03a37e97c901195b59d50';

  constructor(private httpClient: HttpClient) { }

  getExercisesApi(){
    return this.httpClient.get(this.apiExercise);
  }

  getExerciseImagesApi(){
    return this.httpClient.get(this.apiExerciseImages);
  }
}
