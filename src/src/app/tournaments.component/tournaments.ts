///<reference path="../../references/references.ts"/>

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TournamentsService } from '.././tournaments.component/tournaments.service';

@Component({
	selector: 'tournaments',
	templateUrl: './tournaments.html',
	styleUrls: ['./tournaments.scss']
})
export class TournamentsComponent implements OnInit{
	tournamentKey = "tournament";
	tournament: ITournamentShort;
	isTournamentPersisted = localStorage.getItem(this.tournamentKey) ? true : false;

	tournaments: ITournaments;

	constructor(private tournamentsService: TournamentsService) { }

	ngOnInit() {
		if (this.isTournamentPersisted) {
			this.tournament = JSON.parse(localStorage.getItem(this.tournamentKey));
		}
		else {
			this.tournamentsService.getTournaments().subscribe(data => {
				this.tournaments = data;	
			});
		}
	}

	pickTournament(tournament) {
		this.tournament = tournament;

		localStorage.setItem(this.tournamentKey, JSON.stringify(tournament));
		this.isTournamentPersisted = true;
	}
}
