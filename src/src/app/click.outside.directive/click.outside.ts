///<reference path="../../references/references.ts"/>

import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    @Output() clickOutside = new EventEmitter();

    constructor(private elementRef : ElementRef) {
    }

    @HostListener('document:click', ['$event.target'])
    onClick(targetElement) {
        if (!this.elementRef.nativeElement.contains(targetElement)) {
            this.clickOutside.emit(null);
        }
    }
}