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
  teamAScore = 0;
  teamBScore = 0;

  increaseScore(team: 'A' | 'B') {
    if (team === 'A') this.teamAScore++;
    else this.teamBScore++;
  }

  decreaseScore(team: 'A' | 'B') {
    if (team === 'A' && this.teamAScore > 0) this.teamAScore--;
    else if (team === 'B' && this.teamBScore > 0) this.teamBScore--;
  }

  resetScores() {
    this.teamAScore = 0;
    this.teamBScore = 0;
  }

  isWinning(team: 'A' | 'B') {
    if (team === 'A') return this.teamAScore > this.teamBScore;
    return this.teamBScore > this.teamAScore;
  }
}
