A collection in Java, is simply an object that acts as a strorage system for multiple elements similar to an Array.

Collections, however in Java deal strictly with objects, and operate in widly different ways.

Java made it easy and named the interface that most classes implement as Collections.

It is defined in the java.util package. As a note, Java also defines a class "Collections" which is a utility class.

Collection

Interface implemented by all Collections

Collections

Class with static methods used to manipulate Collections

There are several different types of collections, and they are mainy distinguished by two characteristics

1) How they order elements

2) Whether those elements are sorted

Ordering determines where an element is in a collection

A list stores elements with an index, like an array.

A map assigns each element another onject that acts as a key, much like a dictionary uses a word as a key for the definition.

Sorting determines an elements position based on the elements value.

A SortedSet maintains order by comparisons made according to a supplied rule.

Your sorting rule might be alphabetical order, or age, or some other system you define.

The Collection interface is at the top.

Extending Collectionm ae the sub interface List, Set and Queue The subinterface List specifies a collection that is ordered but not sorted.

Each element has a specific position or index.

A common class that implements the List interface is ArrayList.

LinkedList is another common implementation.

The subinterface Set is defined to specify collections that do not have duplicate elements.

It is very similar to List, except that all elements are unique and order may not be maintained.

Common implementing classes are HashSet which is unsorted and TreeSet which is sorted.

THe subinterface Queue specifies a colection that maintains a particular order of elements for processing.

Common implementing classes are LinedList and PriorityQueue.

LinkedList implements both the List and Queue interfaces in java.

Typically a Queue will maintain the order of elements in a First-in-First-Out Order.

This means whoever is first, is the first to leave.

A priorityQueue maintains order in a manner supplied by the developer.

Collection objects all define methods to add/remove elements and other conenience methods.

add(object o) - add an element to the collection

contains(object o)  - will return T if the collection has the object

remove(object o)  - will remove the object from the collection if it is present 

size() method will return the number of elements it contains.

package examples;

import java.util.ArrayList;

public class CollectionExample {

	public static void main(String[] args) {
		
		ArrayList<String> arrList = new ArrayList<>();
		
		arrList.add("Hello");
		arrList.add(" ");
		arrList.add("World");
		arrList.add(3, "!");
		
		System.out.println("Value at index 2: " + arrList.get(2));
		System.out.println(arrList);
	}
}

The ArrayList is a class that implements the List interface and can grow and shrink dynamically unlike Arrays.

Note the java.util import statement.

Also note the angle brackets, which denote the data type stored in this ArrayList.

These angle bracket denote that this an example fo Generic data type in use.

In our list, we can add a String element by calling the add method and passing in our string as an argument.

We'll duplicate this a few times.

After adding a few things to the list we can retrieve an element from our list by using the get method.

Get is declared in the ArrayList class and is used to return an element at the specified index or position.

List are zero based so the index.

If you needed  a container that had only unique elements then a Set would be the preferred choice.

If you dont require all elements to be unique then a List might be better.

A Map is great for managing associations between information such as keeping a username associated with an id.

If order matters in the collection, typically one would use a sorted version of a container such as TreeMap or TreeSet.

HashMap or HashSet would be used if speed was important and one of these unsorted versions would be used.

