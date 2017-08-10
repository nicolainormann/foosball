///<reference path="../../references/references.ts"/>

import { Component, Input } from '@angular/core';

@Component({
  selector: 'navigation-item',
  templateUrl: './navigation.item.html',
  styleUrls: ['./navigation.item.scss']
})
export class NavigationItemComponent {
	@Input() item;
}
