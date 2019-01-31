import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroeModel } from './heroe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  urlbase: string = 'https://heroes-a05d3.firebaseio.com/';
  heroesURL: string = 'https://heroes-a05d3.firebaseio.com/.json';
  heroeURL: string = 'https://heroes-a05d3.firebaseio.com/heroes';

  constructor(private http: HttpClient) { }

  public nuevoHeroe(heroe: HeroeModel, key: string) {
    const body: string = JSON.stringify(heroe);
    const headers: HttpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json'
    });
    const url = `${this.heroeURL}/${key}.json`;

    return this.http.put(url, body , {headers: headers});
      // .map((res: Response) => {
      //   return res.json();
      // });
  // return this.http.post (this.heroesURL, body,  {headers: headers});



  // .map((res: Response) => {
 // return res.json();
 // });
  }

  public getAllHerores(): Observable<HeroeModel> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<HeroeModel>(`${this.urlbase}heroes.json`, {headers: headers});
  }
  public obtenerHeroe(key: string): Observable<HeroeModel> {
      const headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      // const url: string = `${this.heroeURL}/${key}.json`;
      const url: string = `${this.heroesURL}`;
      return this.http.get<HeroeModel>(url , {headers: headers});
        // .map((res: Response) => {
        //   return res.json();
        // });
    }

    public actualizarHeroe( heroe: HeroeModel, key: string) { // Arreglar funcion actualizar
      console.log('actualizar');
      return null;
    }

    public eliminarHeroe(key: string) {
      console.log('Entro a eliminar en el servicio');

      const headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const url: string = `${this.heroeURL}/${key}.json`;
      console.log('URL', url);

      return this.http.delete(url, {headers: headers});
      // .map((res: Response) => {
      //   console.log('Servicio Res', res);
      //   res.json();
      // });

    }
}
