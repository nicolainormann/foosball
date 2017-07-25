import { Component, Input } from '@angular/core';

@Component({
	selector: 'team',
	templateUrl: './team.html',
	styleUrls: ['./team.scss']
})
export class TeamComponent {
	@Input() team: number;
	@Input() double: boolean;
	@Input() users;
	
	constructor() {}
}
