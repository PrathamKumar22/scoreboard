import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ScoreboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
