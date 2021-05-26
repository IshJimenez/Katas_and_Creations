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

The first number is associated with the created demo1 object and correcty shows a value of one for each StaticDemo instance.

However, the static variable counter which is globally available to all instances of StaticDemo is actually counting the number 
of instances that were created or two.

It should be cleaar that this static variable is shared across all instances of a class.

The keyword final makes things immutable in Java.

Once intialized a variable will always have the same constant value.

You can also have final methods and classes.

You dont really change the code inside a method or class in the middle of execution.

Instead, this means that a final method cant be overriden, and a final class cannot be exteneded.

These are hard rules, and the application wont even compile if you try to break them.

The keyword abstract defines an imcomplete entity in Java.

When a method is tagged abstract it contains no body.

An abstract class cannot be instantiated, it can only be extened.

If a class contains any abstract methods then it becomes an abstract class and must be declared as such, or your application simply wont complie.

However, you can delcare a class abstract even if it only contains concrete methods it will still be non-instantiable.

Also remember if a child class extends an abstract class, it must override all inherited abstract methods to provide an implementation of its own.

If you dont do this, the subclass must also be declared abstract.

1.Create a package com.mycompany.main to place your files in.
Create a class named StaticClass. Write a static method that computes the sum of two floating point
numbers. Use this method in an Application class, to compute the sum of two numbers that you pass to
your static method.

package com.mycompany.main;

import java.util.List;

public class Application {

	public static void main(String[] args) {
		float x,y;
		x = 100.55f;
		y = 1291.324f;
		
		System.out.println("Addition result: " + StaticClass.add(x, y));
		
		FinalClass fc = new FinalClass();
		System.out.println("The constant: " + fc.myConstant);
		
		ConcreteClass cc =  new ConcreteClass();
		cc.run();
	}
}

package com.mycompany.main;

public class StaticClass {

	public static float add(float x, float y){
		return x + y;
	}
}package com.mycompany.main;

public class StaticClass {

	public static float add(float x, float y){
		return x + y;
	}
}

2. Create a class named FinalClass and define an instance variable, myConstant. 
Use the final keyword to mark the instance variable as final. 
This makes it a constant. Add a statement to your Application class to print the value of this constant.

package com.mycompany.main;

import java.util.List;

public class Application {

	public static void main(String[] args) {
		float x,y;
		x = 100.55f;
		y = 1291.324f;
		
		System.out.println("Addition result: " + StaticClass.add(x, y));
		
		FinalClass fc = new FinalClass();
		System.out.println("The constant: " + fc.myConstant);
		
		ConcreteClass cc =  new ConcreteClass();
		cc.run();
	}
}

package com.mycompany.main;

public class FinalClass {

	final int myConstant = 1;
}

3. Write a class named AbstractClass and declare it abstract. It should have an abstract method run(). 
Declare another class ConcreteClass and it should extend AbstractClass. 
Implement the run() method. In the Application class, add a statement to create an instance of ConcreteClass and then call the run() method.

package com.mycompany.main;

public abstract class AbstractClass {

	public abstract void run();
}

package com.mycompany.main;

public class ConcreteClass extends AbstractClass {

	@Override
	public void run() {
		System.out.println("Running the class...");
	}
}

package com.mycompany.main;

import java.util.List;

public class Application {

	public static void main(String[] args) {
		float x,y;
		x = 100.55f;
		y = 1291.324f;
		
		System.out.println("Addition result: " + StaticClass.add(x, y));
		
		FinalClass fc = new FinalClass();
		System.out.println("The constant: " + fc.myConstant);
		
		ConcreteClass cc =  new ConcreteClass();
		cc.run();
	}
}