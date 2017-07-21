import { Component, Input } from '@angular/core';

@Component({
	selector: 'team',
	templateUrl: './team.html',
	styleUrls: ['./team.scss']
})
export class TeamComponent {
	@Input() team: number;

	double = true;
	
	constructor() {}
}
