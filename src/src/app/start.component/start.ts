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

interface IMember {
	user: IUser,
	role: string
}

interface ITeam {
	offence: IMember,
	defence: IMember,
	teamNumber: number
}

class Match {
	constructor(
		public team1: ITeam,
		public team2: ITeam,
		public double: boolean
	)
	{ }
}

@Component({
	selector: 'start',
	templateUrl: './start.html',
	styleUrls: ['./start.scss']
})
export class StartComponent {
	double = true;
	users: IUsers;
	availablePlayers: IUsers;

	match = new Match(
		{
			offence: {
				user: {
					name: "",
					username: "",
					rating: 0,
					rank: 0,
					wins: 0,
					losses: 0
				},
				role: null
			},
			defence: {
				user: {
					name: "",
					username: "",
					rating: 0,
					rank: 0,
					wins: 0,
					losses: 0
				},
				role: null
			},
			teamNumber: 1
		},
		{
			offence: {
				user: {
					name: "",
					username: "",
					rating: 0,
					rank: 0,
					wins: 0,
					losses: 0
				},
				role: null
			},
			defence: {
				user: {
					name: "",
					username: "",
					rating: 0,
					rank: 0,
					wins: 0,
					losses: 0
				},
				role: null
			},
			teamNumber: 2
		},
		this.double
	);

	constructor(private usersService: UsersService) {

	}

	ngOnInit() {
		this.usersService.getOrderedUsers("name").subscribe(users => {
			this.users = users;
			this.availablePlayers = users;
			this.removePickedPlayer(this.match);
		});
	}

	teamUpdate(team: ITeam) {
		if (team.teamNumber === 1) {
			this.match.team1 = team;
		}
		else if (team.teamNumber === 2) {
			this.match.team2 = team;
		}
		
		this.removePickedPlayer(this.match);
	}

	removePickedPlayer(match) {
		let usernames = [];
		if (match.team1.offence.user.username) {
			usernames.push(match.team1.offence.user.username);
		}
		if (match.team1.defence.user.username) {
			usernames.push(match.team1.defence.user.username);
		}
		if (match.team2.offence.user.username) {
			usernames.push(match.team2.offence.user.username);
		}
		if (match.team2.defence.user.username) {
			usernames.push(match.team2.defence.user.username);
		}
		
		this.availablePlayers = this.users.filter(user => usernames.indexOf(user.username) === -1);
	}
}
