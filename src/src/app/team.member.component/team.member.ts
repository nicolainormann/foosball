import { Component, Input } from '@angular/core';

@Component({
	selector: 'team-member',
	templateUrl: './team.member.html',
	styleUrls: ['./team.member.scss']
})
export class TeamMemberComponent {
	@Input() member: number;
	@Input() double: boolean;
	@Input() users;

	showPicker = false;

	constructor() {}

	togglePicker(){
		this.showPicker = !this.showPicker;
	}
}
