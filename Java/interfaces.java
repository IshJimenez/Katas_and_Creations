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

Said to have type inheritance. A class that implements an interface is polymorphically considered an instance of the interface.

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

The animal class defines eat method, and the Domesticated interface dictates that an implementing class must complete the doWork method.

Also the wolf class, extends Animal, and Dog class both extends Animal, and implements Domesticated.

Wolf and Dog both override eat. Because Dog implements the Domesticated interface, it also implements the doWork method.

We use the poolymorphism to refer to the Dog object with a Domesticated type reference variable.

We can only use this variable to call the doWork() method we cant call the eat() method from a Demoesticated type reference variable, because the 
eat() method isnt delcared in the interface.

Since we are using a Domesticated interface type, this code can now support any Domesticated object 
A houseAlien object, a Horse object.

They all gurantee to have an implementation for the doWork() method.

And as long as we imlement the Domesticated interface we can be assured that future changes to the "doWork" implemntation in the Dog class will never
break the code that invokes it.

Java 8 Interfaces

public interface Doable {
    void doAthing()
    void doAnotherThing()  == This would need to be implemented below 
}
public class Task implements Doable {
    public void doAThing() {
        System.out.println("Doneeee");
    }
}
public class Chore implements Doable {
    static int choresDone = 0;

    public void doAThing() {
        choresDone++;
    }
}

Public facing interfaces (APIs) were difficult to update or change

Default methods: Interface methods that are implemented in the interface

Implementing classes are not required to implement default methods, but they can override them.

public interface Doable {
    default void doAthing() {
        int things = 0;
        System.out.println("Doneeee");
    }
    void checkTasks();
}

Interfaces can have static methods with fefinitions

Static methods can be called w/o creating an instance of the class (or interface) first

Static methods an only call other static methods directly. They must use local reference variables to call non-static methods.

Staic interface methods cannot call other interface methods that are not also static or default.

Multiple Inheritance

If two interfaces contain default methods with the same name, a class that implements both will have a conflict.

The super keywoord can be used to specify which interface implementation to use.

Doesticated.super.doWork();
Worker.super.doWork();

Abstract Classes

Can have instance variables that are not alwalys public static final

Can have methods that are not public.

