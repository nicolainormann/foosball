///<reference path="../../references/references.ts"/>

import { Component } from '@angular/core';

import { UsersService } from '.././users.component/users.service';

@Component({
	selector: 'ladder',
	templateUrl: './ladder.html',
	styleUrls: ['./ladder.scss']
})
export class LadderComponent {
	users;

	constructor() {
	}

	ngOnInit() {
	}
}
