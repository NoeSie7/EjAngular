import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeroesService} from '../shared/heroes.service';
import {HeroeModel} from '../shared/heroe';
import { EstadoForm } from '../shared/estado-form.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseResponseModel } from 'firebase/database';

@Component({
  selector: 'app-angp-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  public heroeForm: FormGroup = new FormGroup({
    'nombre': new FormControl('', Validators.required),
    'tipo': new FormControl('', Validators.required),
    'bio': new FormControl('')
  });

  public estadoForm = EstadoForm;
  public estadoFormEnum: EstadoForm = EstadoForm.estadoInicial;
  public id: string;

  constructor(private heroesServic: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
    // ANTERIOR
    // this.heroeForm.setValue(new HeroeModel());
    // this.activatedRoute.params
    //   .subscribe( params => {
    //     this.id = params['id'];
    //     console.log('Hay cambio');
    //     if (this.id === 'nuevo') {
    //       this.heroeForm.reset(new HeroeModel());
    //     } else {
    //       this.heroesServic.obtenerHeroe(this.id)
    //       .subscribe(( heroe: HeroeModel) => {
    //         this.heroeForm.reset(heroe);
    //       });
    //     }
    //   });

    // NUEVO
     this.activatedRoute.params
       .switchMap( params => {
        this.id = params['id'];
         console.log('Hay cambio');
         if (this.id === 'nuevo') {
           return Observable.of(new HeroeModel());
         } else {
          return this.heroesServic.obtenerHeroe('nuevo');
         }
       })
       .subscribe(( heroe: HeroeModel) => {
         console.log(heroe);
         this.heroeForm.reset(heroe);
       });
  }

//   public guardar() {
//     console.log('Entro en guardar');
//     if (this.heroeForm.valid) {
//       this.estadoFormEnum = EstadoForm.enviando;
//       this.heroesServic.nuevoHeroe(this.heroeForm.value)
//       .subscribe(datos => {
//         console.log(datos);
//         this.estadoFormEnum = this.estadoForm.envioOk;
//       },
//       error => {
//         console.error('Error al guardar el heroe', error);
//         this.estadoFormEnum = this.estadoForm.envioError;
//       });
//     } else {
//         console.log('Formato no valido');
//         this.estadoFormEnum = this.estadoForm.formInvalido;
//     }
//  }

 public guardar_firebase() {
  console.log('Entro en guardar ');
  if (this.heroeForm.valid) {
    this.estadoFormEnum = EstadoForm.enviando;
    if (this.id === 'nuevo') {
      this.altaHeroe();
    } else {
      this.actualizarHeroe();
    }
  } else {
    this.estadoFormEnum = this.estadoForm.formInvalido;
  }
 }

private altaHeroe() {
  this.heroesServic.nuevoHeroe(this.heroeForm.value, this.heroeForm.value.nombre)
    .subscribe((datos: FirebaseResponseModel) => {
      console.log(datos);
      this.estadoFormEnum = EstadoForm.envioOkPost;
      this.router.navigate(['/newheroe', datos.nombre]);
    },
    error => {
      console.error('Error al guardar el heroe', error);
      this.estadoFormEnum = EstadoForm.envioError;
    });
}

private actualizarHeroe() {
  this.heroesServic.actualizarHeroe(this.heroeForm.value, this.id)
    .subscribe((datos: HeroeModel) => {
      console.log(datos);
      this.estadoFormEnum = this.estadoForm.envioOkPut;
    },
    error => {
      console.error('Error al actualizar el heroe', error);
      this.estadoFormEnum = this.estadoForm.envioError;
    });
}

public pruebaSubscribeAnidado() {
  for (let i = 0; i < 100; ++i ) {
      console.log('Iteracion: ', i);
      setTimeout(() => {
        this.router.navigate(['/newheroe', '-LNAsS_iDMLzU-CLZ5YL']);
      }, 300);

      setTimeout(() => {
        this.router.navigate(['/newheroe', '-LNAqQupo63uxU6VgzH2']);
      }, 300);
  }
}


//     this.heroesServic.nuevoHeroe(this.heroeForm.value)
//     .subscribe((datos: FirebasePostResponseModel) => {
//       console.log(datos);
//       this.estadoFormEnum = this.estadoForm.envioOk;
//       this.router.navigate(['/heroe', datos.name]);
//     },
//     error => {
//       console.error('Error al guardar el heroe', error);
//       this.estadoFormEnum = this.estadoForm.envioError;
//     });
//   } else {
//       console.log('Formato no valido');
//       this.estadoFormEnum = this.estadoForm.formInvalido;
//   }
//  }
}
