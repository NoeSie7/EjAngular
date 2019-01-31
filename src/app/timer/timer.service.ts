import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private countdownTimerRef: any = null;
  private init: number = 0;
  public countdown: number = 0;

 //  private countDownEndSource = new Subject<void> ();
  private countdownSource = new BehaviorSubject<number>(0); // Subjcet privado y behaviorSubject tiene nocion de su estado
                                                              // Siempre tiene un valor, recibes ultimo valor disponible, metodo getValue())
  public countdownEnd$ = this.countdownSource.asObservable(); // Observable publico, para emtiir un nuevo flujo hay q usar next

  constructor() { }

  public restartCountdown(init?) {
      // restart the countdown
      if (init) {
      this.init = init;
      }

      if (this.init && this.init > 0) {
        this.clearTimeout();
        this.countdownSource.next( this.init);
        this.doCountdown();
      }

  }

  public destroy() {
      // clean timeout reference
  }

  private doCountdown() {
    // call process countdown after 1 second
    if (this.countdownSource.getValue() > 0) {
      this.countdownTimerRef = setTimeout(() => {
      this.countdownSource.next(this.countdownSource.getValue() - 1);
      this.processCountdown();
      }, 1000);
    }
  }

  private processCountdown() {
    // check if countdown has finished
    // HERE I SHOULD EMIT THE EVENT

    if ( this.countdownSource.getValue() <= 0) {
      this.countdownSource.next(0); // CUIDADOOO AQUIIIIII ?¿?¿?¿?¿??¿?¿

    } else {
      this.doCountdown();
    }


    // if (this.countdown === 0) {
    //   this.countdownEndSource.next();
    // } else {
    //   this.doCountdown();
    // }
  }

  private clearTimeout() {
    // remove countdown reference
  }
}
