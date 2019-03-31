import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GamesComponent} from './games/games.component';
import {ResumeComponent} from './resume/resume.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
{path: '', pathMatch:'full', redirectTo: 'home'},
{path: 'games', component: GamesComponent},
{path: 'resume', component: ResumeComponent},
{path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
