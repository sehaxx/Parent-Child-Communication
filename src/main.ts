import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'parent-component',
  standalone: true,
  imports: [CommonModule],
  template: ``,
})
export class Main {
  name = 'Angular';
}

bootstrapApplication(Main);
