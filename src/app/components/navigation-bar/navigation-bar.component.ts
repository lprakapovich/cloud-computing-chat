import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  @Output() signOutEvent = new EventEmitter();

  signOut(): void {
    this.signOutEvent.emit();
  }
}
