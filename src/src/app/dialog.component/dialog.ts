import { Component, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';

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
			let inputProviders = Object.keys(dialogObj.inputs).map((inputName) => { return { provide: inputName, useValue: dialogObj.inputs[inputName] }; });
			let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

			let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

			let factory = this.resolver.resolveComponentFactory(dialogObj.component);

			let component = factory.create(injector);

			this.dynamicComponentContainer.insert(component.hostView);

			if (this.dialogComponent) {
				this.dialogComponent.destroy();
			}

			this.dialogComponent = component;
			
			Object.assign(this.dialogObj, dialogObj);
			this.dialogObj.open = true;
		});
	}

	private close(){
		this.dialogObj.open = false;
		this.dynamicComponentContainer.clear();
		this.dialogComponent.destroy();
	}

	closeOnClick(e){
		if (this.dialogObj.close && (e.target.className === "dialog__overlay" || e.target.className === "dialog__close")) {
			e.stopPropagation();
			this.close();
		}
	}
}
