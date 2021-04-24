// What is a Class or Object?

// A class is a blueprint or outline. A class
// manages state and behavior.

// Define a class by using class 
//
// class SomeClass {
// ...//stuff
// }

// An object is an instance of a  class. An 
// object is what 'lives' in memory.

// Create and object by using new
//
// SomeClass sc = new SomeClass();
// reference variable = someClass

// Class Constructor
//
// Invoking the keyword new starts a process
// called instantiation.
//
// Instantiation is the process of Java creating
// an instance of an object in memory according
// to the class type.
//
// A constructor is a block of code that is 
// executed when the new kyword is invoked.
//
// The default no-arg constructor is created by
// the complier if you dont write any constructors.
//
//      class A {
//          constructor
//          public A() {...}
//              }
//
// Writing a Constructor
//
// class SomeClass {
//      int someVariable;
//      public static void main(String[] args){
//      ...   
//      }
//      }
//
// Add access modifer if not on main level
// class SomeClass {
//      int someVariable;
//      public SomeClass() {}
//      public static void main(String[] args){
//      ...   
//      }
//      }
//
// 
// Can run dif ones just add dif parameters
// class SomeClass {
//      int someVariable;
//      public SomeClass() {}
//      public SomeClass(int variable) {...}
//      public static void main(String[] args){
//      ...   
//      }
//      }

// Encapsulation
// Encpsulation is the act of enclosing an item inside 
// of a capsule or container.
//
// In software developemnt, encapsulation refers to the act of
// protecting data from the outside world. Only accessed through
// the channels you create.
//
// Data Hiding
// Data hiding refers to the act of declaring member variables private,
// so that outside classes and other entities anoot directly access
// these variables.
//
// This is a partial implementation of encapsulation, but doesnt completely
// descrive the term in that with encapsulation you dont have to use a 
// private modifier only.
//
// There are others such as protected ir default access levels that languanges use
// to restrict access to data.
//
// Access Modifiers
// An access modifier changes the permission levels other classes have to this method,
// class or variable.
//
//  Is a keyword that you can use to apply to classes, methods, and instance variables
//  to control whether other classes are permitted to manipulate it.
//
//  public static void main (String[] args){
//  ...
//  }
//
// public ---   least restictive; all classes have access
//
// protected --- only subclasses(in any package) have access;
//               classes in same package have access as well
//
// private ---   most restrictive;
//               no classes (except itself) have access
//
// default ---   not an access modifer;
//               only classes in the same package have access
//
// Using an Access Modifier
// When you declare a variable or method, you'll specify an acess
// modifier in front of it.
//
//      //Variable
//      public int myInt = 25;
//
//      //Method
//      public void myMethod() {...}
//
// Classes only support the public or default level of access.
//
// Methods are variables support all access modifiers.
//
// Common patterns create private varibles and public accessor methods.
//
// Inheritance
// Gives access to the variables and methods of one class to another
//
//      public class Book {
//          int numPages;
//          string title;
//          public void turnPage() {
//          // change page
//          }
//          }
//
//      public class Magazine extends Book {
//          List<Articles> toc;
//          public void subs () {
//          // make a mess
//          }
//
// A class can only extend one other class
//
// Avoid
// Multiple Inheritance: when a class inherits two items with 
// the same signature from two different sources.
//
// Creates as "is-a(n)" relationship between the child and parent class
//
// The relationship is one-way. All magazines are books, but not all
// books are magazines.
//
// If one object is an exampleor a subtype of another object. The two can likely be
// arranged as an inheritance relationship.
//
// Polymorphism
// When one class extends another, an instance of that child class is also an
// instance of the parent class.
//
// If one class be described as an example or substyle 
// of another class, it can probably inherit from it
//
// Contractual Members
// A child class is guranteed to have the public variables and methods of a super class
// even if the implementations differ
//
// This lets you write code that expects instances of a super class, but can also handles
// instances of chold classes
//
//
// Objects are stored in heap memory, and their addresses are stored in reference variables
//
// Reference variables use a class as a type - they can hold the address of an object
// that is-an instance of that class
//
// Dog myDog = new Dog ();
// Creates a new Dog object, that stores the address of the Dog object in a reference variable
// named "myDog" that is type Dog
//
//      public class Animal {
//          String name;
//          public void eat () {
//                system.out.printIn(
//                "I eat yo");
//                }
//                }
//
// Dog Reference Type
//
//      public class Dog extends Animal {
//          String name; // Inherited
//          String breed;
//
//      public void eat() {    //Overriden
//          System.out.printIn (
//          "I eat cake");
//          }
//
//      public void bark () {
//          System.out.printIn("woof!");
//      }
//      }
