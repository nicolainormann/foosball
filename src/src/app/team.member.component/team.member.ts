import { Component, Input, Output, EventEmitter } from '@angular/core';

interface IUser {
	name: string,
	username: string,
	rating: number,
	rank: number,
	wins: number,
	losses: number
}

export class Member {
	constructor(
		public user: IUser,
		public role: string
	) {}
}

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
		let role;
		if (this.double) {
			role = this.member === 1 ? "defence" : "offence";
		}
		else {
			role = "single";
		}

		this.onPickedPlayer.emit(new Member(user, role));
		this.togglePicker();
	}
}
