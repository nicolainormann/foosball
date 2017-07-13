import { Component } from '@angular/core';

import { UsersService } from '.././users.component/users.service';

@Component({
	selector: 'ladder',
	templateUrl: './ladder.html',
	styleUrls: ['./ladder.scss']
})
export class LadderComponent {
	users;

	constructor(private usersService: UsersService) {
	}

	ngOnInit() {
		this.usersService.getOrderedUsers("rating").subscribe(users => {
			this.users = users;
			this.users.forEach(user => {
				user.played = user.wins + user.losses;
				user.winRatio = !isNaN(user.wins / user.losses) ? user.wins / user.losses : 0;
				user.winPercent = !isNaN(user.wins / user.played * 100) ? user.wins / user.played * 100 : 0;
			});
		});
	}
}
