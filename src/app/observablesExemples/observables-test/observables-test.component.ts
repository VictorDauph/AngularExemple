import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-observables-test',
  imports: [],
  templateUrl: './observables-test.component.html',
  styleUrl: './observables-test.component.css'
})
export class ObservablesTestComponent {

  numbers: number[] = []

  observable = new Observable((observer) => {
    observer.next("valeur 1")
    observer.next("valeur 2")
    observer.next("valeur 3")
    observer.complete()
  })

  behaviorSubject = new BehaviorSubject<string>("Start !")

  behaviorSubject1 = new BehaviorSubject<number>(0)

  ngOnInit() {

    //Utilisation d'un observable
    this.observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log("observable terminé")
    }
    )

    //Utilisation d'un behaviorSubject
    this.behaviorSubject.subscribe(value => console.log(value))

    this.behaviorSubject.next("behav 1");
    this.behaviorSubject.next("behav 2");
    this.behaviorSubject.next("behav 3");

    this.behaviorSubject.subscribe(value => console.log(value))
    this.behaviorSubject.next("behav 4");
    //this.behaviorSubject.unsubscribe();
    this.behaviorSubject.next("behav 5");

    //Exemple behaviorSubject1

    this.behaviorSubject1.subscribe(value => console.log(value))
    for (let i = 1; i <= 5; i++) {
      this.behaviorSubject1.next(i)
    }
  }
}
