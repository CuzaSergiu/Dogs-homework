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
    console.log(this.randomDog)
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
    window.open("https://en.wikipedia.org/wiki/Dog", "_blank");
  }

  randomDog() {
    const listNamesDogs: Array<string> = ['Lara', "Croft", "Max", "Min", "Zeus", "Azorel"]
    const randName = listNamesDogs[Math.floor(Math.random() * listNamesDogs.length)];
    const listBreeds: Array<string> = ["Ciobanesc", "Maidanez", "Beagle", "Bison", "Doberman", "Chihuahua", "Labrador"];
    const randBreed = listBreeds[Math.floor(Math.random() * listNamesDogs.length)];
    const listAge = Math.floor(Math.random() * 21);

    
    const randDog = new Dogs(randName, randBreed, listAge);
    this.dogs.push(randDog);
  }

}


