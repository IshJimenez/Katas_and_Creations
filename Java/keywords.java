The modifier static defines class variable and methods, as opposed to "instance" members

Static members are globally available to all instances of a class.

A static method can only use other static members within the same class.

When you use a static member with the dot operator on the class Without instatntianting the class first.

package examples;

class StaticDemo {
	static int counter = 0;
	int number = 0;
	
	public StaticDemo(){
		counter++;
		number++;
	}
}

public class StaticExample {

	public static void main(String[] args) {
	
		StaticDemo instanceA = new StaticDemo();
		System.out.println("instanceA counter: " + instanceA.counter);
		System.out.println("instanceA number: " + instanceA.number);
		
		StaticDemo instanceB = new StaticDemo();
		System.out.println("instanceB counter: " + instanceB.counter);
		System.out.println("instanceB number: " + instanceB.number);
	}	
}

Every time the constructor is called it increments both counters.

Numbers which is an instance variable and counter which is a class variable.

