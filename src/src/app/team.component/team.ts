import { Component, Input, Output, EventEmitter } from '@angular/core';

interface IMember{
	username: string,
	role: string
}

export class Team{
	constructor(
		public offence: IMember | {},
		public defence: IMember | {},
		public teamNumber: number
	)
	{}
}

@Component({
	selector: 'team',
	templateUrl: './team.html',
	styleUrls: ['./team.scss']
})
export class TeamComponent {
	@Input() team: number;
	@Input() double: boolean;
	@Input() users;

	@Output() onTeamUpdate = new EventEmitter;

	provisionalTeam = new Team({}, {}, 0);

	constructor() {

	}

	pickedPlayer(member: IMember){
		if(member.role === "offence"){
			this.provisionalTeam.offence = member;
		}
		else if(member.role === "defence"){
			this.provisionalTeam.defence = member;
		}
		this.provisionalTeam.teamNumber = this.team;
		
		this.onTeamUpdate.emit(this.provisionalTeam);
	}
}
