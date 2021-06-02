The object class is the parent class of all classes defined in Java, even if you do not explicity extend it.

THe object class provides several methods as a convenience for developers, and acts as a wrapper a wrapper for any polymorphic code.

The object class defines several methods.

All are which are protected so you can override them to provide your specific implementation.

The toString method gives a string representation of the object.

This method is called when you directly print an onject to the console.

By default, this prints the memory address of the object.

hashCode is used to provide a unique identifier for the object equals is used to compare 2 objects.

By default, it compares memory addresses, and so its functionally equivalent to the == operator unless overriden.

The finalize method is a mtheod that is called by the garbage instance before it is removed from memory.

Clone will create a copy of the object.

package examples;

class Person {
	private String name;

	public String getName() {	return name;	}
	public void setName(String name) {	this.name = name;	}
	
	public String toString() {
		return "Hi, I'm " + this.name;
	}
}

public class ObjectTest {

	public static String print(Object o) {
		return o.toString();
	}
	
	public static void main(String[] args) {
		Person someone = new Person();
		
		someone.setName("Joe");
		
		System.out.println(print(someone));
	}
}

Best practice you should ocerride some of the methods the object class provides in order to take advantage of fuctionality like toString or equals.

For example because the == operator already compares memory locations to determine object quaylity, the equals method is often overriden to compare 
the values of instance variables to determine equivalence between two objects.

Sometimes youll see the Object class used in utility methods that provide generic fnctionality for any class.

1.Write a class MyObject that declares a property id (long). Override the equals method to compare two
objects and if the following occurs, returns true:
a. The second object is of type MyObject
b. The second object has an id property that is equal to this MyObject’s id property.
You will need to write an Application class to create two instances of MyObject that have the same
value for their id property. Write a conditional statement to test if the two objects are equivalent using
the .equals() method of your MyObject class. Print statements in the true condition and in the false
condition. 

public class MyObject {

	private long id;
	
	public MyObject(long id) {
		this.id = id;
	}
	
	@Override
	public boolean equals(Object obj) {

		if (obj instanceof MyObject){
			return (((MyObject) obj).id == this.id); 
		}
		return false;
	}
}


public class Application {

	public static void main(String[] args) {
		MyObject obj1 = new MyObject(222L);
		MyObject obj2 = new MyObject(222L);
		
		if (obj1.equals(obj2)){
			System.out.println("The two objects are equivalent");
		} else {
			System.out.println("The two objects are NOT equivalent");
		}
	}
}
