import { Component } from '@angular/core';

import { UsersService } from '.././users.component/users.service';

interface IUser {
	name: string,
	username: string,
	rating: number,
	rank: number,
	wins: number,
	losses: number
}

interface IUsers extends Array<IUser> { }

class Team {
	offence: IUser;
	defence: IUser;
}

@Component({
	selector: 'start',
	templateUrl: './start.html',
	styleUrls: ['./start.scss']
})
export class StartComponent {
	double = true;
	teamOne: Team;
	teamTwo: Team;

	users: IUsers;

	constructor(private usersService: UsersService) {}

	ngOnInit() {
		this.usersService.getOrderedUsers("name").subscribe(users => {
			this.users = users;
		});
	}

	teamUpdate(team){
		
	}
}
