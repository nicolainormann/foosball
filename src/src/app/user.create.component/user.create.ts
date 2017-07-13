import { Component, Input, Output, EventEmitter } from '@angular/core';

export class User {
	constructor(
		public name: string,
		public username: string,
		public rating: number
		) { }
}

@Component({
	selector: 'user-create',
	templateUrl: './user.create.html',
	styleUrls: ['./user.create.scss']
})
export class UserCreateComponent {
	model = new User("", "", 2000);

	@Input() existingUserNames;

	@Output() onCreateUser = new EventEmitter();

	onSubmit(){
		this.onCreateUser.emit(this.model);
	}
}
