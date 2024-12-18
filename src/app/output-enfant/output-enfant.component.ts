import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-enfant',
  imports: [],
  templateUrl: './output-enfant.component.html',
  styleUrl: './output-enfant.component.css'
})
export class OutputEnfantComponent {
  @Output() messageEnfant = new EventEmitter<string>()

  handleClick() {
    this.messageEnfant.emit("Bonjour depuis le composant enfant!!")
  }
}
