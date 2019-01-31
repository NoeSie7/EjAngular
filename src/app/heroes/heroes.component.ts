import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../heroes/shared/heroes.service';

@Component({
  selector: 'app-angp-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
   x = this.heroesService.getAllHerores();
  public heroes: Object = {};
  public ejecutarPipe: boolean = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
       this.heroesService.getAllHerores()
       .subscribe( data => {
         if ( data != null) {
         console.log('DAATAA', data);
         this.heroes = data;
         this.ejecutarPipe = !this.ejecutarPipe;
        console.log('Heroes', this.heroes);
         } else {
            console.log('Error al mostrar heroes', data);

         }
       },
       error => {
         console.log('Error', error);
       }
     );
  }

  public eliminarHeroe(key: string) {
    console.log('Eliminar heroe', key);
      this.heroesService.eliminarHeroe(key)
      .subscribe( res => {
        if (res == null) {
          delete this.heroes[key];
          this.ejecutarPipe = !this.ejecutarPipe;
        } else {
          console.error('Error al eliminar heroe', res);
        }
      }, error => {
        console.error('Error al eliminar heroe', error);
      });
    }


  public buscarHeroe( texto: string) {
    console.log('LLego a buscar heroe');

  }
}
