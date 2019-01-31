import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'claveValor',
   pure: false
})
export class ClaveValorPipe implements PipeTransform {
  transform(value: any, ejecutarPipe?: boolean): any {
    console.log('Entro al pipe clavevalor');
    console.log('valor Value', value);

    Object.keys(value).forEach( e => {
      console.log('E', e);
      console.log('value', value);
      console.log('value[e]', value[e]);


    });

    return Object.keys(value);


    // const keys: string[] = [];
    // return Object.keys(value);
    // const keyValue: {
    //   key: string;
    //   value: string;
    // }[] = [];
    // if (value != null) {
    //   Object.keys(value).forEach(e => {
    //     keyValue.push({
    //       key: e,
    //       value: value[e]
    //     });
    //   });
    // }

    //  for ( const index in value) {
    //      keyValue.push(
    //        {
    //          key: index,
    //          value: value[index]
    //        });
    //  }
    // return keyValue;


  //   const array = [];
  //   console.log('Entro al pipe');
  //  Object.keys(value).forEach (e => {
  //     console.log('VAlor', value);
  //     console.log('E', e);
  //     console.log('valoe[e]', value[e]);

  //     array.push(value[e]);
  //   });
  //   return array;
  }
}
