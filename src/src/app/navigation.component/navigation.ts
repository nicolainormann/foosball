import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss']
})
export class NavigationComponent {
  items = [{name: "Ladder", url : "/ladder"}, {name: "Stats", url : "/stats"}];
}
