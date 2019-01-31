import { BehaviorSubject} from 'rxjs';
import {Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

    interface IUser {
      name: string;
      registration: string;
      email: string;
      isPremium: boolean;
    }

    export const DUMMY_DATA = [
      {
        name: 'John Lilki',
        registration: 'September 14, 2013',
        email: 'jhlilk22@yahoo.com',
        isPremium: true
      },
      {
        name: 'Jamie Harington',
        registration: 'January 11, 2014',
        email: 'jamieharingonton@yahoo.com',
        isPremium: true
      },
      {
        name: 'Jill Lewis',
        registration: 'May 11, 2014',
        email: 'jilsewris22@yahoo.com',
        isPremium: true
      }
    ];

    @Injectable()
    export class UserService {
      private usersSubject = new BehaviorSubject([]);
      private users: IUser[];

      constructor() { }

      getUsers(): Observable<IUser[]> {
        return this.usersSubject.asObservable();
      }

      private refresh() {
        // Emitir los nuevos valores para que todos los que dependan se actualicen.
        this.usersSubject.next(this.users);
      }

      createNewUser(user: IUser) {
        /**
        * Evitar hacer this.user.push() pues estaríamos modificando los valores directamente,
        * se debe generar un nuevo array !!!!.
        */
        this.users = [...this.users, user];
        this.refresh();
      }

      loadDummyData() {
        this.users = DUMMY_DATA;
        this.refresh();
      }

      approveAll() {
        /**
        * Evitar hacer un forEach e ir modificando cada property !!! this.users.forEach(user => user.isPremium = true);
        *
        * Pudieramos Utilizar el .map pues siempre nos retorna un nuevo array pero si olvidamos el Object.assign( {}, ... )
        * siempre estariamos tomando la referencia del objeto en memoria y estariamos modificando nuevamente el valor
        * original en vez de crear una nueva copia o version del dato.
        *
        */

        this.users = this.users.map(user => Object.assign({}, user, { isPremium: true }));
        this.refresh();
      }
    }
