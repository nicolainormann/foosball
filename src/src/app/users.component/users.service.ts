import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

interface IUser {
	name: string,
	username: string,
	rating: number
}

interface IUsers extends Array<IUser>{}

@Injectable()
export class UsersService {
	users$: FirebaseListObservable<IUsers> = this.db.list("/users");

	constructor(private db: AngularFireDatabase) {
	}
}