///<reference path="../../references/references.ts"/>

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
	}

	createUser(eventUser) {
	}
}
