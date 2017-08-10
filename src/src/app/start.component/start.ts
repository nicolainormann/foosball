///<reference path="../../references/references.ts"/>

import { Component, OnInit } from '@angular/core';

import { UsersService } from '.././users.component/users.service';

@Component({
	selector: 'start',
	templateUrl: './start.html',
	styleUrls: ['./start.scss']
})
export class StartComponent implements OnInit {
	double = true;

	ngOnInit(){
		
	}
}
