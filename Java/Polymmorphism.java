Polynorphism means many forms and it refers to the is-a relationship created by two objects through inheritance.

When one class inherts frm another, it creates a relationship that can be described by the verb is.

If one class can be desscribed as an example or subtype of another class. It can probably inherit from it.

If Dog extends class Animal. then you can say an instance of a Dog is also an instance of an Animal.

A Dog is-an Animal.

Contractual members

A child class is guaranteed to have the public variables and methods of a super class, even if the implementations differ.

This lets you write code that expects instances of a super class, but can also handles instances of child classes.

Objects stored in heap memory, and their addresses are stored in reference variables.

Reference variables use a class as a type - they can hold the address of any object that is-an instance of that class.

Dog myDog = new Dog();

Creates a new Dog object, stores the address of the Dog object in a reference variable named "myDog" that is type Dog.

Think of the reference variable type as a mask you put over your objects code.

public class Animal {
    string name;
}
public void eat() {
    System.out.println("I eat something");
}
}
public class Dog extends Animal {
    String name;            // Inherited
    String breed;
}
public void eat() { // Overiiden
    System.out.println("I eat food");
}
public void bark() {
    System.out.println("woof");
}
}

The process of storing a more specific value in a less specific type is called "upcasting"

Just like with methods, the refeence type you use acts as a kind of mask, exposing and allowing access only to the vaiables defined in the reference type.

However, the initialization of those variables is also dependent on the type.

This is like writing the initalization on the mask directly.

Lets say that our Animal class defines a variable named power and initializes its value to 10. The human class extends Animal, and it defines its own 
power variable that is intialized to 12. 

If I create a Human object, but store it in an Animal reference type. You will have access to the power variable but it will be intialized to 10.

Conditions

The type of an object MUST have an is-a relationship with the reference variable type

The reference type cannot be more specific than the object type.

You can downcast an onect into a more specific type though.

The same rules would apply.

The new reference type must have an is-a relationship with the object type.

package casting;

public class DowncastingExample {
    
    public static void main(String[] args){

        Animal animalReference = new Dog(); //Upcasting a Dog object to an Animal reference type

        Dog dogReference = (Dog) animalReference; //Downcasting the Dog object reference by animalReference into a Dog=typed reference variale
        // Neither of these operations change the nature of the object itself - is always was, and always will be, a Dog.

        Bird birdReference =  (Bird) animalReference; //Eclipse doesnt complain, but this won't work - it will throw a ClassCastException

        // Use instanceof to chck of the object pointed to by a reference variable has an is-a relationship to a particular class
        if (animalReference instanceof Dog)
        dogReference = (Dog) animalReference;
        else    
            System.out.println("animalReference does not point to a Dog object");
}
}

class Animal;

class Dog extends Animal {}

class Bird extends Animal {}

public class Creature {
    public void roam() {
        // move 1 unit in random direction
    }
}
public class Goblin extends Creature {
    public void roam() {
        // move 2 units randomly
    }
}
public class Orc extends Creature {
    public void roam() {
        // move 1 unit forward
    }
}
public class GameLogic {

    public void roaming(List<Creature> cList) {
        for (Creature c : cList)
        c.roam();
    }
}