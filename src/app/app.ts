import { Component, signal } from '@angular/core';
import { MainModule } from './main/main-module';

@Component({
  selector: 'app-root',
  imports: [MainModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personalpage');
}
