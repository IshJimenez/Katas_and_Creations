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

