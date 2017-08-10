///<reference path="../../references/references.ts"/>

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'team-member',
	templateUrl: './team.member.html',
	styleUrls: ['./team.member.scss']
})
export class TeamMemberComponent {
	@Input() member: number;
	@Input() double: boolean;
	@Input() users;

	@Output() onPickedPlayer = new EventEmitter;

	showPicker = false;
	playerPicked = false;

	constructor() { }

	togglePicker() {
		this.showPicker = !this.showPicker;
	}

	closePickerIfActive() {
		if (this.showPicker) {
			this.togglePicker();
		}
	}

	pickPlayer(user) {
	}
}
