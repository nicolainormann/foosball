import { Component, Input } from '@angular/core';

@Component({
	selector: 'team-preview',
	templateUrl: './team.preview.html',
	styleUrls: ['./team.preview.scss']
})
export class TeamPreviewComponent {
	@Input() team;
}
