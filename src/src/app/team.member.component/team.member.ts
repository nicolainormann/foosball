import { Component, Input } from '@angular/core';

@Component({
	selector: 'team-member',
	templateUrl: './team.member.html',
	styleUrls: ['./team.member.scss']
})
export class TeamMemberComponent {
	@Input() member: number;
	@Input() double: boolean;

	constructor() {}

	pick(){
		console.log("sad");
	}
}
