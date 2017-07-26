import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'team',
	templateUrl: './team.html',
	styleUrls: ['./team.scss']
})
export class TeamComponent {
	@Input() team: number;
	@Input() double: boolean;
	@Input() users;

	@Output() onTeamCreated = new EventEmitter;
	
	constructor() {}

	pickedPlayer(user){
console.log(user);
	}
}
