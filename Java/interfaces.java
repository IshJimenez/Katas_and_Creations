Used to guarantee the availability of methods in implementing classes.

All methods are public abstract

All variables are public static final

Similar to classes but use interface instead

public interface Dobe {}

public class Chore
expands Talk
implements Dobe {}

Interfaces make compiler-enforced contracts. A class that implements an interface must provide an implementation
for every interface method, or be an abstract class.

Interface methods do not have implementations and interface avriables are static, so no states or behavior are inherited.

Said to have type inheritance. A class that implements an interface is polymorphicaly considered an instance of the interface.

Name interfaces are adjectives or verbs.

An interface describes, what behaviors a class should have, it provides none of its own.

Ex. Runnable, Serialiable, Functional

A class can only extend one class

A class can implement multiple interfaces

Interfaces extend other interfaces, with no limits on the quantity allowed.

Interfaces cannot extend classes, and do not implement other interfaces.

public class InterfaceExample {

	public static void main(String[] args) {
		
		Domesticated myPet = new Dog();
		
		myPet.doWork();
	}
}

package examples;

class Animal {
	public void eat() {
		System.out.println("The animal munches on some food");
	}
}

interface Domesticated {
	public void doWork();
}

class Wolf extends Animal {}

class Dog extends Animal implements Domesticated {
	public void eat() {
		System.out.println("The dog munches on some kibble");
	}
	
	public void doWork() {
		System.out.println("The dog rolls over!");
	}
}

Java 8 Interfaces

public interface Doable