import 'zone.js/dist/zone';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'parent-component',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  template: `
    <child-component (sampleEvent)=parentFunction($event)></child-component>

    <button (click)='anotherFunction()'>Trigger</button>
  `,
})
export class Main {
  @ViewChild(ChildComponent) child!: ChildComponent;

  name = 'Parent <-> Child';

  parentFunction(data: any) {
    console.log('Parent Function: ', data); //not getting called
  }

  anotherFunction() {
    this.child.sampleFunction();
  }
}

bootstrapApplication(Main);
