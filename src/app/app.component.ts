import { Component } from '@angular/core';
import { ExerciseService } from './services/exercise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'hiit-editor-ng';
  posts:any;

  constructor(private exerciseService:ExerciseService) {}
  
  ngOnInit() {
      this.exerciseService.getPosts()
        .subscribe((response: any) => {
          this.posts = response;
        });
  }
  
}
