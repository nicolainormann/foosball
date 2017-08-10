///<reference path="../../references/references.ts"/>

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'tournaments',
	templateUrl: './tournaments.html',
	styleUrls: ['./tournaments.scss']
})
export class TournamentsComponent {
	@Input() tournaments: ITournaments;

	@Output() onPickTournament = new EventEmitter;

	pickTournament(tournament){
		this.onPickTournament.emit(tournament);
	}
}
