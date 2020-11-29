import { Component } from '@angular/core';
import { Dogs } from './dogs/dogs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DogsApp';


  constructor() {
    console.log("Hello, i am a constructor!");
  }

  ngOnInit(): void {
    this.dogs = this.listOfDogs();
    console.log(this.dogs);
  }

  listOfDogs(): Array<Dogs> {
    const arrayOfDogs: Array<Dogs> = [];
    const dog1 = new Dogs("Bob", "Boxer", 4);
    const dog2 = new Dogs("Swag", "Pitbull", 3);
    const dog3 = new Dogs("Lili ", "Chiuahua", 5);
    const dog4 = new Dogs("Aya", "Beagle", 2);

    arrayOfDogs.push(dog1, dog2, dog3, dog4);
    return arrayOfDogs;
  }

  dogs: Array<Dogs> = [];


  dogsWiki() {
    console.log("You clicked !");
    window.open ("https://en.wikipedia.org/wiki/Dog","_blank") ;
  }

  // bark(): void {
  //   if (this.dogs.length < 2) {
  //     console.log("Woof woof");
  //   } else {
  //     console.log("Who let the dogs out?");
  //   }
  // }
}


