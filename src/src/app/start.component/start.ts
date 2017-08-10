///<reference path="../../references/references.ts"/>

import { Component, OnInit } from '@angular/core';

import { UsersService } from '.././users.component/users.service';
import { TournamentsService } from '.././tournaments.component/tournaments.service';

@Component({
	selector: 'start',
	templateUrl: './start.html',
	styleUrls: ['./start.scss']
})
export class StartComponent implements OnInit {
	double = true;

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
			this.tournaments = this.tournamentsService.getTournaments();
		}
	}

	pickTournament(tournament) {
		this.tournament = tournament;

		localStorage.setItem(this.tournamentKey, JSON.stringify(tournament));
		this.isTournamentPersisted = true;
	}
}
