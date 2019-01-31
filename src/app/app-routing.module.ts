import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ListaComponent } from './user-list/user-list.component';
import { TimerComponent } from './timer/timer.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';



const routes: Routes = [
  {path: 'home' ,  component: HomeComponent},
  {path: 'name-editor', component: NameEditorComponent},
  {path: 'user', component: ListaComponent},
  {path: 'observable', component: TimerComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'newheroe' , component: HeroeComponent},
  {path: 'newheroe/:id' , component: HeroeComponent},
  {path: ' ', pathMatch: 'full', redirectTo: 'heroes'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
