import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { DialogService } from '.././dialog.component/dialog.service';

interface IDialog {
	open: boolean;
	header?: string;
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

@Component({
	selector: 'dialog-component',
	templateUrl: './dialog.html',
	styleUrls: ['./dialog.scss']
})
export class DialogComponent {
	dialogObj = {
		open: false,
		header: "",
		component: null,
		close: true,
		hideCloseIcon: false,
		inputs: 0,
		buttons: {
			button1: {
				text: "",
				cta: false
			},
			button2: {
				text: "",
				cta: false
			}
		}
	} as IDialog;
	
	dialogComponent;

	@ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

	constructor(private dialogService: DialogService,
				private resolver: ComponentFactoryResolver) {
	}

	ngOnInit() {
		this.dialogService.dialogObservable.subscribe(dialogObj => {
			const factory = this.resolver.resolveComponentFactory(dialogObj.component);

			this.dynamicComponentContainer.createComponent(factory);
			
			Object.assign(this.dialogObj, dialogObj);
			this.dialogObj.open = true;
		});
	}

	private close(){
		this.dialogObj.open = false;
		this.dynamicComponentContainer.clear();
	}

	closeOnClick(e){
		if (this.dialogObj.close && (e.target.className === "dialog__overlay" || e.target.className === "dialog__close")) {
			e.stopPropagation();
			this.close();
		}
	}
}
