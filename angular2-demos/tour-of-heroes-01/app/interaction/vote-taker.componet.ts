﻿import {Component}      from 'angular2/core';
import {VoterComponent} from './voter.component';
@Component({
    selector: 'vote-taker',
    template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <my-voter *ngFor="#voter of voters"
      [name]="voter"
      (onVoted)="onVoted($event)">
    </my-voter>
  `,
    directives: [VoterComponent]
})
export class VoteTakerComponent {
    agreed = 0;
    disagreed = 0;
    voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto']
    onVoted(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
    }
}