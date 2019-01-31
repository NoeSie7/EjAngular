import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NameEditorComponent } from './name-editor/name-editor.component';

import { ListaComponent } from './user-list/user-list.component';
import { UserService } from './user-list/user.service';
import { TimerComponent } from './timer/timer.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import {HttpClientModule } from '@angular/common/http';
import { ClaveValorPipe } from './shared/clave-valor.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NameEditorComponent,
    ListaComponent,
    TimerComponent,
    HeroesComponent,
    HeroeComponent,
    ClaveValorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  exports: [AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
