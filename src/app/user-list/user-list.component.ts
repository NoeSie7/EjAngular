// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-angp-user-list',
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/zip';
@Component({
  selector: 'app-angp-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
  export class ListaComponent implements OnInit {
    // lista: string[] = [ 'hola ', 'que ', 'tal ', 'estas '];
    //  lista: Observable<Array<string>> = Observable.of([ 'hola ', 'que ', 'tal ', 'estas ']);
    //  constructor() { }

     lista: Observable<string[]> = Observable.of([ 'hola ', 'que ', 'tal ', 'estas '],
   [ 'hola2 ', 'que2 ', 'tal2 ', 'estas2 '], [ 'hola3 ', 'que3 ', 'tal3 ', 'estas3 ']);

   listaTemporal: any;

   constructor() {
     this.listaTemporal = Observable.zip(this.lista, Observable.interval(500), (a, b) => a);
     console.log(this.lista);

   }

    ngOnInit() {
    }

  }


