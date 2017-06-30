import { Component, Input } from '@angular/core';

@Component({
	selector: 'user',
	templateUrl: './user.html',
	styleUrls: ['./user.scss']
})
export class UserComponent {
	@Input() user;
}
