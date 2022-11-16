import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private url = 'https://wger.de/api/v2/exercise/?equipment=7';
  // private API_KEY = 'b82b208a0dbd9f52b1b03a37e97c901195b59d50';

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(`https://wger.de/api/v2/exercise/?equipment=7&limit=40&language=2`);
  }
}
