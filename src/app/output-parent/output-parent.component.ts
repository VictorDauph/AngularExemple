import { Component } from '@angular/core';
import { OutputEnfantComponent } from "../output-enfant/output-enfant.component";

@Component({
  selector: 'app-output-parent',
  imports: [OutputEnfantComponent],
  templateUrl: './output-parent.component.html',
  styleUrl: './output-parent.component.css'
})
export class OutputParentComponent {
  titleContent = "Titre par défaut"

  handleMessageEnfant(message: string) {
    this.titleContent = message;
  }
}
