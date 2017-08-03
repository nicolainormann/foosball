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

interface IMember{
	user: IUser,
	role: string
}

interface ITeam{
	offence: IMember,
	defence: IMember,
	teamNumber: number
}

class Match{
	constructor(
		public team1: ITeam | {},
		public team2: ITeam | {},
		public double: boolean
	)
	{}
}

@Component({
	selector: 'start',
	templateUrl: './start.html',
	styleUrls: ['./start.scss']
})
export class StartComponent {
	double = true;
	users: IUsers;

	match = new Match({}, {}, this.double);

	constructor(private usersService: UsersService) {

	}

	ngOnInit() {
		this.usersService.getOrderedUsers("name").subscribe(users => {
			this.users = users;
		});
	}

	teamUpdate(team: ITeam){
		if(team.teamNumber === 1){
			this.match.team1 = team;
		}
		else if(team.teamNumber === 2){
			this.match.team2 = team;
		}
		console.log(this.match, team);
		
		//this.removePickedPlayer()
	}

	removePickedPlayer(usernames){
		console.log(usernames);
	}
}
