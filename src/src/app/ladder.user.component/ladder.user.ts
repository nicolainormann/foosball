import { Component, Input } from '@angular/core';

@Component({
	selector: 'ladder-user',
	templateUrl: './ladder.user.html',
	styleUrls: ['./ladder.user.scss']
})
export class LadderUserComponent {
	@Input() user;
}
