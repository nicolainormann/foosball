import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

interface IUser {
	name: string,
	username: string,
	rating: number,
	rank: number,
	wins: number,
	losses: number
}

interface IUsers extends Array<IUser> { }

@Injectable()
export class UsersService {
	users$: FirebaseListObservable<IUsers> = this.db.list("/users");

	constructor(private db: AngularFireDatabase) {
	}

	getOrderedUsers(orderByChild = "") {
		return this.db.list("/users", { query: { orderByChild: orderByChild } });
	}

	createUser(user: IUser) {
		user.rating = 2000;
		user.wins = 0;
		user.losses = 0;

		this.users$.push(user);
	}
}