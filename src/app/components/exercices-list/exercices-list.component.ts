import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercices-list',
  templateUrl: './exercices-list.component.html',
  styleUrls: ['./exercices-list.component.scss']
})
export class ExercicesListComponent implements OnInit {

  exercises:any;

  constructor(private exerciseService:ExerciseService) { }

  ngOnInit(): void {
    this.exerciseService.getPosts() 
      .subscribe((response: any) => {
        this.exercises = response['results'];
      });
  }

}
