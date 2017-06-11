import { Component } from '@angular/core';
import { DialogService } from '.././dialog.component/dialog.service';

import { LadderComponent } from '.././ladder.component/ladder';

@Component({
	selector: 'start',
	templateUrl: './start.html',
	styleUrls: ['./start.scss']
})
export class StartComponent {
	constructor(private dialogService: DialogService) {}

	openDialog() {
		this.dialogService.openDialog({
			header: "Dialog",
			component: LadderComponent,
			close: true,
			inputs: 0,
			buttons: {
				button1: {
					text: "Button 1",
					cta: false,
				},
				button2: {
					text: "Button 2",
					cta: true
				}
			}
		});
	}
}
