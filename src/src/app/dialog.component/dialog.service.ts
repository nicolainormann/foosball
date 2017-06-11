import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

interface IDialog {
	header?: string;
	component: any;
	close: boolean;
	inputs: number;
	buttons?: {
		button1:{
			text: string;
			cta: boolean;
		},
		button2?:{
			text: string;
			cta: boolean;
		}
	}
}

@Injectable()
export class DialogService {
	dialogObserver;
	dialogObservable: Observable<IDialog>;

	constructor() {
		this.dialogObservable = new Observable(observer => {
			this.dialogObserver = observer;
		});
	}

	openDialog(dialogObj: IDialog) {
		this.dialogObserver.next(dialogObj);
	}
}