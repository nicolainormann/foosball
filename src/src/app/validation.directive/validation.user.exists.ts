import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { UsersService } from '.././users.component/users.service';

@Directive({
	selector: '[validationUserExists][ngModel]',
	providers: [
		{ provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidationUserExists), multi: true }
	]
})
export class ValidationUserExists implements Validator {
	constructor(private usersService: UsersService) {
	}

	validate(c: AbstractControl): { [key: string]: any } {
		let exist;

		this.usersService.users$.subscribe(users => {
			exist = users.filter(user => user.username === c.value).length ? { validationUserExists: true } : null;
		});
		
		return exist;
	}
}