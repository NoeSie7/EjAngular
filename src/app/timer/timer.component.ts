import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {TimerService} from './timer.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-angp-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit {

  @Input()   init: number = 20;
  @Output()  Complete = new EventEmitter <any>();

  // TODO: emit event when count ends with this.onComplete.emit();
   countdownEndRef: Subscription = null;
  // x = this.init;
  constructor(public timer: TimerService) {}

  ngOnInit() {
    console.log('Entro en init timer');

    this.timer.restartCountdown(this.init);
    /*
     this.countdownEndRef = this.timer.countdownEnd$.subscribe(
       (data) => {
        console.log('Me subscribo');
        //this.Complete.emit(data);
        this.x = data;
     });*/
  }

  OnDestroy() {
    this.timer.destroy();
    this.countdownEndRef.unsubscribe();
  }

  // logCompleted() {
  //   console.log('LLEGO??');

  // }

}
