import { Component } from '@angular/core';
import { ExerciseService } from './services/exercise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'hiit-editor-ng';
  exercises:any;

  constructor(private exerciseService:ExerciseService) {}
  
  ngOnInit() {
      this.exerciseService.getPosts() 
        .subscribe((response: any) => {
          this.exercises = response['results'];
        });
  }
  
}
