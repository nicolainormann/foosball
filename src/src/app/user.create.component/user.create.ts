///<reference path="../../references/references.ts"/>

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';

export class User {
	constructor(
		public name: string,
		public username: string
	) { }
}

@Component({
	selector: 'user-create',
	templateUrl: './user.create.html',
	styleUrls: ['./user.create.scss']
})
export class UserCreateComponent {
	model = new User("", "");

	@Input() existingUserNames;

	@Output() onCreateUser = new EventEmitter();

	onSubmit(form: NgForm) {
		this.onCreateUser.emit(this.model);
		this.model = new User("", "");
		form.reset();
	}
}
