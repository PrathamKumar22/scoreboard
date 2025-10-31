import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
  // 🏆 Team names
  teamA = 'Team A';
  teamB = 'Team B';

  // 🧮 Scores
  scoreA = 0;
  scoreB = 0;

  // ➕ Increment / ➖ Decrement
  increaseA() {
    this.scoreA++;
  }

  decreaseA() {
    if (this.scoreA > 0) this.scoreA--;
  }

  increaseB() {
    this.scoreB++;
  }

  decreaseB() {
    if (this.scoreB > 0) this.scoreB--;
  }

  // 🔁 Reset everything
  reset() {
    this.scoreA = 0;
    this.scoreB = 0;
  }
}
