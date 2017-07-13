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
		this.usersService.getOrderedUsers("name").subscribe(users => {
			this.users = users;
		});
	}

	createUser(eventUser) {
		this.usersService.createUser(eventUser);
	}
}
