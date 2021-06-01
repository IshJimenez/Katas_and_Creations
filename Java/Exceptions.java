The use of exceptions allow Java to deal with runtime problems in a flexible manner.

Exceptions are thrown and can be caught and handled independently.

You can handle each type of exception in a different way, and allow your application to continue w/o crashing.

Exceptions come in 2 forms

-Checked

Means that the compiler will look for and catch the error, and you will not be able to run your application until its fixed.

Detected during compilation

-Unchecked

Will slip through, and crop up in the middle of execution, potentially killing your application if not handled.

Occur during runtime

package examples;

public class ExceptionTest {

	public static void main(String[] args) {
		
		try {
			System.out.println("1 / 0 = " + (1 / 0));
		} catch (ArithmeticException e) {
			System.out.println("Caught an arithmetic exception!");
			// print the stack trace programmatically
			e.printStackTrace();
		} finally {
			System.out.println("This is the optional \"finally\" block.");
		}
		
		System.out.println("The code has continued on, as normal!");
		
	}
}


A try block must have at least: one catch block, or one finally block.

The finally block executes regardless of the outcome, even if there is a return statement in the try block.

Unchecked or runtime exceptions can also be caught if desired.

The catch block will print the exceptions stack trace, because the exception was caught, program execution can continue after printing the stacktrace.

The finally block would normally have code to properly close resources like FIleStreamReaders or connections to a database.

Since none of that it will just print a statment.

Stacktrace - A debug message that shows exception that ocurred, its location in the code, and other lines of code impacted by the exception.

Multiple catch blocks

Multiple catch blocks are evaluated top to bottom.

Only the first catch block applicable to the exception thrown will be invoked.

The principle of polymorphism means that every ArithmeticException is also a RuntimeException, which is also an Exception.

try {
    System.out.println(1 / 0);
} catch {Exception e} {
    System.out.println("Exception");
} catch {ArithmeticException ae} {
    // Never runs
}

If you try to catch a generic Exception before catching the ArithmeticException.

The print statemnet in the 2nd catch block will Not execute for ArithmeticException, it wont execute any exceptions.

This is because any exceptions will always be caught by the catch block that handles the more generic Exception first.

In Java a method does not need to handle an exception at all.

You can re-throw it to the calling code thereby getting rid of the problem.

This re-throwing can continue all the way back to the main method where throwing the exception to the JVM may crash the program.

A method declaration can have a throw clause, indicating that it may throw and will not handle certain exceptions.

A method with a throw clause is a source for checked exceptions.

Ignoring Exceptions

Handling exceptions cost a lot of CPU time than other tasks

When performance is of utmost imporatnce, its better to write the code with no exceptions or risk of failure.

When communication with another device needs to be synchronized at a millisecond scale

Lke video games, specially online-multi

1.Write a class CustomException that extends the Exception class. In another class Runner, write a
method, run() that throws this CustomException. Use a try/catch/block to manage exception handling in
an Application class that instantiates a Runner and calls its run method. 

public class CustomException extends Exception {
	private String message;
	private static final long serialVersionUID = 1L;
	
	public CustomException(String message) {
		super(message);
		this.message = message;
	}
}

public class Runner {

	public void run() throws CustomException {
		throw new CustomException("Tried running but fell");
	}
}


public class Application {

	public static void main(String[] args) {
		//Place your code here
		Runner runner = new Runner();
		
		try {
			runner.run();
		} catch (CustomException e) {
			e.printStackTrace();
		}
	}
}
