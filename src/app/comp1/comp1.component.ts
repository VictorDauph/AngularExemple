import { Component } from '@angular/core';

import { User } from '../models/User';
import { Customer } from '../models/Customer';
import { UserI } from '../../interfaces/UserI';
import { Roles } from '../enums/Roles';
import { Color } from '../enums/Color';
import { Comp2Component } from '../comp2/comp2.component';
import { FormsModule } from '@angular/forms';
import { NgModelComponent } from "../ng-model/ng-model.component";



@Component({
  selector: 'app-comp1',
  imports: [Comp2Component, FormsModule, NgModelComponent],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {

  text = "Je suis un texte dynamique";
  isHiglighted: boolean = true;

  inputText = "Bonjour"

  toggleIsHiglighted() {
    this.isHiglighted = !this.isHiglighted
  }

  ngOnInit() {
    this.text = "Je suis un texte initialisé"
  }
}
