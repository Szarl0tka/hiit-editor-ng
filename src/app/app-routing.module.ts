import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexStartComponent } from './components/index-start/index-start.component';
import { ExercicesListComponent } from './components/exercices-list/exercices-list.component';


const routes: Routes = [
  { path: '', component: IndexStartComponent, },
  { path: 'create-sequence', component: ExercicesListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }