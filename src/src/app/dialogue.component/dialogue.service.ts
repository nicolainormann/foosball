import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

export interface IDialogue {
	header?: string;
	content: any;
	close: boolean;
	hideCloseIcon?: boolean;
	buttons?: {
		button1?: {
			text: string,
			confirm: boolean,
			callback: boolean,
		},
		button2?: {
			text: string,
			confirm: boolean,
			callback: boolean,
		},
		button3?: {
			text: string,
			confirm: boolean,
			callback: boolean,
		}
	};
}

@Injectable()
export class DialogueService {
	dialogueObserver;
	dialogueObservable: Observable<IDialogue>;

	constructor() {
		this.dialogueObservable = new Observable(observer => {
			this.dialogueObserver = observer;
		});
	}

	openDialogue(dialogueObj: IDialogue) {
		this.dialogueObserver.next(dialogueObj);
	}
}

