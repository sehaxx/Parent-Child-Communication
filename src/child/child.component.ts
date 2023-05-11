import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'child-component',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Output() sampleEvent: EventEmitter<any> = new EventEmitter<any>();

  myObservable = of(1, 2, 3);

  constructor() {}
  sampleFunction() {
    this.myObservable.subscribe((x) => {
      this.sampleEvent.emit(x);
    });
  }
}
