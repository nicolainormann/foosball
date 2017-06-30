import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
	constructor() {
	}

	getUsers(){
		const users = [{username: "nicolainormann", name: "Nicolai", rating: "2000"}, {username: "mikkelstaerk", name: "Mikkel", rating: "1000"}, {username: "pvn", name: "Peter", rating: "3000"}];
		return users;
	}
}