import { Component } from '@angular/core';

import { UsersService } from '.././users.component/users.service';

@Component({
	selector: 'users',
	templateUrl: './users.html',
	styleUrls: ['./users.scss']
})
export class UsersComponent {
	users;

	constructor(private usersService: UsersService) {
	}

	ngOnInit() {
		this.usersService.users$.subscribe(users => {
			this.users = users.sort((a, b) => {
				return b.rating - a.rating;
			});
		});
	}

	createUser(eventUser) {
		this.usersService.createUser(eventUser);
	}
}
