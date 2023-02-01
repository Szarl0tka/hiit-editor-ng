import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercices-list',
  templateUrl: './exercices-list.component.html',
  styleUrls: ['./exercices-list.component.scss']
})
export class ExercicesListComponent implements OnInit {

  apiExercises:any;
  apiThumbnails:any;
  exercisesBaseIds:any;

  exercises:any;

  constructor(private exerciseService:ExerciseService) { }

  ngOnInit(): void {
    this.getExercisesApi();
    this.getThumbnails();
    this.getExercises();
  }

  getExercisesApi(): void {
    this.exerciseService.getExercisesApi() 
      .subscribe((response: any) => { this.apiExercises = response['results']});
  }

  getExercises(): void {
    
    let data:any = this.getExercisesApi();
  
  
    for (let i = 0; i < data.length; i++ ) {
      this.exercisesBaseIds.push(data[i]['exercise_base']);
   }
  }

  getThumbnails(): void {
    this.exerciseService.getExerciseImagesApi() 
      .subscribe((images: any) => { this.apiThumbnails = images['results']});
  }

}
