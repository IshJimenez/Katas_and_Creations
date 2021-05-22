Gives access to the states and behaviors of one class to another JV

Consider a book, which has properties describing the number of pages contained, and a title.

It has methods describing the behavior of turning a page.

The Book would be a super base or parent class and from Book one could extend Magazine.

Magazine is a sub derived or child class of Book.

The extends keyword in Java goes in a class definition, right after the name.

A class in Java can only extend only other class.

You can use this to create a chain of inheritance.

Where class C extends B, and B extends class A.

That way class class has access to all the variables and methods of Classes B and A.

C can affect A and B that is called multiple inheritance and can lead to problems and Java doesnt support it at of book,least not in name.

So maagzines automatically inherits the public and protected fields, like title and numPages.

Similiary, the magazine automatically has a default page-turning implementation that it gets from Book.

This helps have to write less code by changing the code in superclass you could affect all the classes that use it.

If you can describe a class as being an example of another typeof class, you can create an is-a relationship and thus an inheritance.

Inheritance is also the gateway to polymorphism.

Its the ability for an object to also be considered an instance of every object in its inheritance chain.

Sci Journal is an instance of Magazine, its also an instance of Book, which is an instance of the Object class.

So it can be treated as a Magazine, Book or Object.

package examples;

class Animal {
	
	public void speak() {
		System.out.println("\"generic animal sounds!\"");
	}
}

class Dog extends Animal {
	public void speak() {           // Method overriding here and this one will run 
		System.out.println("Woof!");
	}
	
	public void beg() {
		System.out.println("The dog looks cute for food.");
	}
}


public class InheritanceTest {

	public static void saySomething(Animal a) {
		a.speak();
		
		if (a instanceof Dog)
			((Dog) a).beg();
	}
	
	public static void main(String[] args) {
		
		Animal myAnimal = new Animal();
		Dog myDog = new Dog();
		
		saySomething(myAnimal);
		saySomething(myDog);

	}

}

A child class inherits public and protected methods from a parent class, but it overrides the implementaton of those methods with its own.

Since youll often find yourself needingg certain methods in different sublcasses to be called by the same name, but you need some or all of those
subclasses to have a unique implementation.

You're just overriding a method by hiding it behind a new method that has the same name, and the same number and types of parameters getting passed in.

The super keyword is a reference to the parents class.

You can use the super keyword with the dot operator to invoke a method defined in the current classes superclass.

1.Write a class named Person that declares instance variables name (String) and age(int); they should be
marked protected. Create a default no-arg constructor for Person. Create another class named
AwesomePerson that extends Person2. AwesomePerson should declare a method talk() that prints its name
and age properties. AwesomePerson should also have its own default, no-arg constructor.
In an Application class, instantiate an AwesomePerson and call its talk() method.
Place the Person2 and AwesomePerson in the package, model. Place the Application.java file in the
package, main.

package main;

import program5.AwesomePerson;

public class Application {
	public static void main(String[] args) {
		AwesomePerson tv = new AwesomePerson();
		tv.talk();
	}

}

package program5;

public class AwesomePerson extends Person2 {

	public AwesomePerson() {
		this.name = "Bond";
		this.age = 212;
		
		System.out.println("In AwesomePerson constructor...");
	}
	
	public void talk(){
		System.out.println("Hello my name is " + this.name + " and I'm " + this.age);
	}
}

package program5;

public class Person2 {
	
	protected String name;
	protected int age;

	public Person2() {
		System.out.println("In Person constructor...");
	}
}

2.Create a class named ReallyAwesomePerson that extends AwesomePerson. Overload the inherited talk() method to print a statement of your choice. 
Update the constructors of Person, AwesomePerson and ReallyAwesomePerson to print a message of your choice.
Update the Application class from the above assignment to instantiate a ReallyAwesomePerson and run its talk() method that you overloaded.
Notice the order of the constructors executed when you run the application.
ReallyAwesomePerson.java should be in the package, program5.

package program5;

public class ReallyAwesomePerson extends AwesomePerson {
	
	public ReallyAwesomePerson() {
		System.out.println("In ReallyAwesomePerson constructor...");
	}
	
	public void talk(String message){
		System.out.println(message);

}
}

package main;

import program5.AwesomePerson;
import program5.ReallyAwesomePerson;

public class Application {

	public static void main(String[] args) {
		AwesomePerson tv = new AwesomePerson();
		tv.talk();
		
		ReallyAwesomePerson rap = new ReallyAwesomePerson();
		rap.talk("Look at Me!");
	}
}


3.Create a class named GameObject that declares an update() method with a void return type. Place this in a
new package called, game. Create two other classes, Player and Enemy that both extend GameObject.
Place them in the same package as GameObject. Override the update() method for both Player and Enemy
to do print a message of your choice.
Create a fourth class, Game, in the game package. Write a main() method. In its main() method, create two
GameObjects that are a Player and an Enemy. 

package Game;

public class Game {
	public static void main(String[] args) {
		
		GameObject player = new Player();
		GameObject enemy = new Enemy();
		
		player.update();
		enemy.update();
	}
}

package Game;

public class GameObject {

	public void update(){
		System.out.println("In the update method...");
	}
}

package Game;

public class Player extends GameObject{
	
	@Override
	public void update() {
		System.out.println("Updating Person's hitpoints...");
	}
}

package Game;

public class Enemy extends GameObject{
	
	@Override
	public void update() {
		System.out.println("Updating Enemy's hitpoints...");
	}
}


