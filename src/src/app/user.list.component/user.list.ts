///<reference path="../../references/references.ts"/>

import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user.list.html',
  styleUrls: ['./user.list.scss']
})
export class UserListComponent {
  @Input() users;
}
