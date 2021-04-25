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
//
// Methods
//
// Method overloading is the creation of methods with the same name as another
// in the same class but it differs in paramters
//
// class Calculator {
//      public int add(int i, int j){
//      return i + j
//      }
//      public double add(double i, double j){
//      return i + j
//      }
//      public long add(long i, long j){
//      return i + j
//      }
//      }
//
// Overloading Methods
//
//  Inheriting Methods
// A method signature is the basic outline of a method
// modifiers methodName(parameters) exceptions
//
// Any child class that you write to extend a class will inherit its methods
// as long as they are not marked private.
//
// A child class can specify a new implentation for a 
// method that is inherited.
//
// Significance of Overriding
// Overriding allows chold classes to provide new implementation for 
// their parents functionality. Useful for polymorphic references.
//
//      Create List of GameObjects
//           GameObject[] objects;
//          -GameObject includes Player extends GameObject
//                 Opponent extends GameObject
//            //populate list
//            //loop over objects and run collide
//            for (GameObject o : objects) {
//            o.collide();
//            }
// 
// To override a method, you can must first have a method on a parent class.
// IN the child class, youll need to specify a method of the same signature.
//
//  Abstraction
//
// Abstraction occurs when you simplify a complex throught or complex system.
//
// Interfaces
//
// Used to guarantee the availability of methods in implementing classes
//
// All methods are public abstract
// All variables are public static final
//      public interface Doable {}
//      public class Chore
//      extends Task
//      implements Doable {}
//
// Interfaces make compiler-enforced contracts. A class that 
// implements an interace must provide an implementaton for every interface method, or
// be an abstract class.
//
// Interface methods do not have implementations and interface variables are STATIC
// so no states or behaviors are inherited
//
// Said to have type Inheritance. A class that implements an interface is polymorphically 
// considered an instance of the interface
//
// Name interfaces for adjectives or verbs. An interace describes what behaviors a class 
// should havem, it provides none of its own.
// Ex. Runnable, Serializable, Funcional 
//
// A class can implement multiple interfaces
//
// Interfaces extend other interfaces, with no limits on the quality allowed
//
// Interfaces cannot extend classes, and do not implement other interfaces.
//
//
// Static
// A keyword that makers an item as a member of the class
//
// Recall the a class acts as a blueprint and an object is an instance of the class
//
// Any methods or variables that you label as static are available without having to create 
// objects of that class type.
//
// The main method is always labeled as static.
//
// Final
// Something marked final means that it cannot change its value
// If variable is marked final, then code cannot change its value once set.
//
// public final int magicBat = 125
// magicBat = 105; //compiler error
//
// If a method is marked final, then code in subclasses
// cannot override it
//
// If a class is marked final, then another class cannot extend it
//
// While Loops
// A while loop will repeat a block of code based on a condition;
// It esesntially tells the program to start back up at the top
// from where its defined.
//
//      label:
//          Do something...
//          Goto label;
//          while (condition) {
//          ...
//          }
//
// Do-while Loops
// A while loop executes a block of code based on a condition
//
//  while(condition){
//      ...
//      }
//
// A do-while loop, on the other hand, will execute its statements at least once, and 
// then continue repeating them based on a condition.
//
//  do {
//  ...
//  } while(condition);
//
// Data Structures
// Allow working with large sets of data
//
// Moving larget sets of data is as easy as moving one piece
//
// Standardized code patters
//
// Arrays
// Core to most languanges
//
// Linear collection of variables of same size, and often type
//
/// Arrays reserve memory so their contents are adjacent
//
// Array sizes are fixed
//
// Array contents are accessed by an index
//
// Indices start at 0 in almost all languages
//
// Removed array elements leave an empty index
//
// Vector/ Lists
// Flexible in size
//
// Memory is not reserved at intialization
//
// Often just a wrapper around an array
//
// Can access elements by an index
//
// Internally doubles in size when full
//
// Adding or removing elements causes later elements to shift
//
// Linked Lists
// A linear collection without an index
//
// Made of Nodes
//
// A Node is a wrapper for the actual element,
// with a link to the next element
//
// Accessing a particular element means searching the list
//
// Adding or removing an element means linking to neighbors
//
// Maps/ Dictionaries
// A collection of Nodes
//
// Each node wraps the element, and tracks and assigned key for that element.
//
// The map must be able to return a node when given the appropriate key.
//
//
// Eceptions
// Problems that occur during compliation or execution of a program.
//
// Exceptions are thrown and can be caught and handled independently
//
// Check
// Detected during complilation
// Unchecked
// Occuring during runtime
//
// A try block must have at leas:
//  one catch block, or one finally block.
//
// The throws Clause
//
// A method declaration can have a throws clause,
// indicating that it may throw and will not handle certain exceptions
//
// A method with a throws clause is a source for checked exceptions.
//
// A method with a throws caluse is a source for checked exceptions
//
// SQL
// Data Organization
// Companies need a way to quickly search records
//
// Users need to be able to access records concurrently
//
// Users need to always have the most recent data
//
// Related data should be linked
//
// Relational Databases
// Link data in one table to related data in another table
//
// Tables are like named spreadsheets that each tract a single idea or type of record
//
// Columns are the properties of each record
//
// Each row is itself a record
//
//
// SQL (structure query languange)
// A standdard for database languages
//
// Managed by the American National Standards Institute (ANSI)
//
// Databases often implement the SQL standard differently, or add to it.
//
// SQL is easyto read by design
//
// Interaction occurs through SQL statements of 'queries.'
//
// SQL Sub-Languages
//  DDL: Data Definition Language Statements that define batabases structure
//
//  DML: Data Manipulation Language Statements that manipulate table data
//      CRUD: Crete, Read, Update, Delete
//      TCL: Transaction Control Language Statements that control the execution of queries.
//      Transaction: A group of SQL statements executed together.
//
// Column Datatypes
//  VARCHAR: text data of variable length can hold any character data
//  INTERGER: 32-bit, signed whole numbers
//  SMALLINT: 16-bit, signed whole numbers
//  NUMBER(n,d): Decimal numbers with limited significant figures.
//  FLOAT: floating-point numbers
//  DATA: a day/month/year record
// TIMESTAMP: A combination of a date and time
//
//  For every data type you can have a null value.
//
// Table Constraints
// Column attributes that restrict data
//
// PRIMARY KEY: A column whose values uniquely identify each row. Ex like social security
//
// COMPOSITE KEY: Two or more colums actingtogether as a primary key
//
// FOREIGN KEY: A column in one table that references a column in another table
//
// UNIQUE KEY: A column whose vales must be unique in each row. ex email addresses
//
// NOT NULL: The column must have a value in each row
//
// CHECK: The column values must meet some criteria. ex min length
//
//
// SQL Join
// A join is an operation that combines the results of two tables
//
// A left or left outer join returns the results from the first table and records from
// the second table that match on a specificied conidition.
//
// If a ven diagram that space that circle B would overlap circle A
//
// A right join will return the results of the 2nd table and records from the first only if
// they match records in the 2nd based on a condition.
//
// Inner Join
// An inner join will retunr only records from both tables that match based on a condition.
//
// Full join
// A full join or full outer join will return all records from both tables.
//
//
// SQL where clause
// Basic Syntax
// A WHERE clause is appended to the end of a SELECT statment.
//
// SELECT STATMENT WHERE Condition;
//
// THe condition indicates a column to filter and any comparison operators and values.
//
// EX:
// SELECT * FROM EMPLOYEES WHERE employee_id > 5;
//
