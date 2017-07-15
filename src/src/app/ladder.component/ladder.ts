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
			this.calculateMatchData();
		});
	}

	private calculateMatchData(){
		this.users.forEach(user => {
			user.played = user.wins + user.losses;
			
			if(user.wins > 0 && user.losses === 0){
				user.winRatio = 1;
				user.winPercent = 100;
			}
			else if(user.wins === 0 && user.losses === 0){
				user.winRatio = 0;
				user.winPercent = 0;
			}
			else{
				user.winRatio = user.wins / user.losses;
				user.winPercent = user.wins / user.played * 100;
			}
		});
	}
}
