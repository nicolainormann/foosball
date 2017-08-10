///<reference path="../../references/references.ts"/>

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'tournament',
	templateUrl: './tournament.html',
	styleUrls: ['./tournament.scss']
})
export class TournamentComponent {
	@Input() tournament: ITournamentShort;

	@Output() onPickTournament = new EventEmitter;

	pickTournament(tournament){
		this.onPickTournament.emit(tournament);
	}
}
