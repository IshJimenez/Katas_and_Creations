package examples;

public class MyFirstRobot {

    public static void message(String myString, int myInt) {
        System.out.println("This is my String: " + myString);
        System.out.println("and this is my int: " + myInt);
    }

    public static void main(String[] args) {
        message("Hey Fool!!!", 4)
    }
}

The first line in this class is the word package, which is a reserved word, or keyword.

That means that package had a defined use and acts as an instruction for the JVM.

Packages would be similar to folders and subfolders

A class in one package might not be able to access or be accessed by classes in other packages.

The second line is the class declaration.

It consists of an access modifier followed by the reserved word class, then the name of the class, and finally the curly
braces that wrap around the contents of the class.

Access modifiers for a class determine what other classes can access the code contrained in this class for their own use.

They can be public, or left blank meaning default.

When naming classes its conisdered a best practice to use nouns, and they are always written by 
capitalizing the first letter of each word in the name.

The curly braces indicate a change in scope.

As a general rule, code wirtten in a lower or deeper scope is isolated from code in a higher or shallower scope.

In addition to mandatory curly braces, nested scopes are indented for easier understanding.

The curly braces also group code into structures. In this example the class contains all the code between the curly braces 
that start immediately after the class declaration.

Next is the first method called message()

A method is a set of instructions that may or may not take in some values, and may or may not return some value.

The instructions a method contains can be invoked by just calling the methods name, and so this reudces the amount of code you have
to wirte by allowing you to reuse it over and over.

Methods can be 

public
private
protected
left blank

The next term is the return type for the the method and void indiciates that the method returns no values.

The method title, message, is followed by paranthesis that contain the input parameters.

In the example above we have a String and an integer.

Lastly the method body lies between the curly braces.

This is the location for the statements to be executed when message is called. 

All the method will do is print two phrases to the console.

Every Java program that you execute must contain one class with a main method in it only if you want the code to be executable.

This is where JWM will begin to run your code.

The signature for the main method must be public static void main() with a String array passed in as the input parameter.

Public indidcates the method is visible to the world. 

Static is a scope keyword that emans the method exists before an object of the class is instatiated.

Static means the method belonds to the class NOT the object.

It is globaly visible to all instances of the class.

The main method is static because the JV< needs to be able to access the method without creating an instance of the class 
that contains it.

That would require another class and method in which it would do so and another for instantiating that class, etc.

Void is the return type for this method and means that nothing is returned.

The code in the method will execute, and then the execution continues to the next line ater the method was invoked.

The main() method never returns anything, because when its execution finished the program is done.

In the example above class called MyFirstRobot having a main method.

The main method in this class tells the JVM to begin here.

Then the method named message() is invoked, and two things are passed-in: an integer, and a String.

Looking at the method delcaration, we know that the message() method requires these paramters in this order.

THen the main() method ends, and the program is done.

-
-
-

VARIABLES

Temporarilly store data in RAM

Strongly typed each variable can only hold one type of data 

Java variable types come in 2 types

PRIMITIVE - Store data types as btyes like intergers, decimals, and alphanumeric characters

The range of values of a primitive can store is limited by the amount of memory reserved for the type.

There are 8 primitive data types in Java.

All primitive data types are lower-case and they contain by default the lowest value they can contain which would be a 
0 for numbers, false for boolean, and the null character for chars.

A boolean variable only holds a value T or F and so it only requires 1 bit of memory ultimately it stores a 0 or a 1.
False is not the same as 0

Java doesnt support truthly values where an integer 0 is the same as a boolean false.

A byte holds a 2 compliment integer, and true to its name it requires 8 bits(1 byte) of memory.

A 8 bit two compliment number can range from -128 too 127.

A short is a 16 bits(2 bytes) comoliment integer, and it ranges from -2^15 to 2^15-1.

A char is is a 16 bits(2 bytes) data type that holds a single Unicode character.

Character values sit between single quotes, and you can either type the character directly or use forward-slash-'u' followed by the characters 
4 digit code.

'\u0000' to '\uffff'

An init is a 32 bits(4 bytes) integer, and its probably going to be the most common integer data type.

An init can range from -2^31 to 2^31.

A float is a 32 bits floating point number which means it can store decimal values.

However because of the way floating point math works on computers, a 32 bit floating number is not as precise as a the double type.

A number can be specified as a float by following it with an 'f'

0.15f or scientific notation 1.25e4f

A float value can also incorporte e to represent a number in scientific notation.

Long is a 64-bits(4 bytes) integer, and their values can range from -2^63 to 2^63 - 1

To speicify a number as a long value instead of an init, you can follow it with a capital L.

500L

The last primitive data type is the double-precision floating point, called "double" for short.

A double is a 64 bit floating point number, and they can be differentiated from a float value by following the number with a 'd'.

Typically this will be the default decimal datatype you use.

Reference variables on the other hand, use a class name as their type.

The reference variable can then only point to an objject that is an instance of that class.

You can use the dot operator to access the variables or methods in the object being referenced.

This does NOT mean that the reference variable is the object and this distinction becomes very important to understanding Java.

Reference variables point to an object and they are not the object themselves.

REFERENCE - Store memory addresses where Objects are located, and are strongly typed too.

int x = 3;
MyClass reference = new MyClass();

The assignment operator works right to left, whatever exists on the right side of the equal side is worked through 
and stored in the variable on the left side.

In Java x = 3, not 3 = x

Arrays

A collection of promitive values or object references

Values in an array are organized wit an index

Arrays have a fixed size and data type

A speicific amount of memory is reserved for an array based on the size and data type

Instatiating a size-10 int array with "new":
int[] intArray = new int [10];

Instatntiating a size-3 array with {}
int[] intArray = {2, 4, 6};

System.out.println(intArray[2]);
intArray[5] = 12;
System.out.println(intArray.length);

Multidimensional Arrays

Creating a multidimensional Arrays
int[] [] myArray = new init [3] [2];
int[] [] otherArr = { {1,2}, {2,4}, {3,6}};

Referencing the value at 2,1:
System.out.println(otherArr [2] [1]);

package examples2;

public class ArrayRobot {

    public static void main(String[] args) {

        int[] firstArray = new init [3];
        int[] secondArray = {1,2,3};

        firstArray[0] = 2;
        firstArray[1] = 4;
        firstArray[2] = 6;

        System.out.println("This value of firstArray[1] is " + firstArray[1]);
        System.out.println("The length of the secondArray is  " + secondArray.length);
    }
}

If you know the values you want inside of the array, you can plug those values into the creation by using the curly braces.

Accesing a value in a array is as simple as referring to the index location of that value.

You can also access the length property of an array by using the dot operator.

When a varible is declared in a particular scope, it is visible to all lower level scopes, but not any higher level scopes.

A variable declared in the class scope, after the class delcaration but outside of any methods is called an instance variable.

Each instance of the class will have a copy of that variablem with a value unique to each instance.

public class Dog {
    String furColor;
}

Here every dog object will have a furColor variable, but one Dog object might have red fur, while another has white.

If a variable also has the keyword static, it becomes a class variable, or glaobal variable.

That means that every object of that class will share the same value for that variable, and if you change it in one Object
it is changed for all of them.

If a variable is declared inside a method, its called a local variable.

A local variable doesnt exist outside the method in which it is declared.

When the method is done executing, the variable is deleted from memory.

Java brings the use of strong typing, the selection of data types available, and the amount of memory reserved by each.

-
-
-
Operators

-Parenthesis

Work just like they normally do in math. You compute the value of whats inside parenthensis before outside.

-Postfix Operators

++ and -- They add/sub 1 from the expression provided.

x++ same as x = x + 1

-- and ++ can be added before the expression.

The diff between postfix operator and these prefix operators

a++ will evaluate the expression after it is done

++a evaluates before it.

int c = 8;
System.out.println(++c);
That will print 9 to the console.

c++
Would print out 8 then increase the value after printing

-Multiplicative Operators 
% Modulus, /, *

Modulus returns the remainder of a division result.

Bytes, Shorts, Ints and Longs in Java only store whole numbers, which means that when division occur, you get a result
and a remainder.

Non floating point variables use whole numbers, and divide with remainders instead of decimals.

When dividing with / you get the resuly of integer division. If you use the % you get the remainder instead.

5 / 2 == 2
5 % 2 == 1

-Additive Operators
+, -

-Bit-Shift Operators
<< :Left-Shift
>> :Right-Shift
// >>> :Right shift (ignore sign) -----(Made the font white so commented it out...)

-Modifiy the binary representation of numbers

int a = 4;      // 00000011 == 3
a = a << 2;     // 00001100 == 12

Work on the binary value of a primitive types value.

These shift the digits of the binary representation of a value left or right a certain number of spaces, resulting
in a different value.

-Relational Operators

Compare two values to produce a boolean result
<, >, <==, >==, instanceof

instanceof: Determines if an object is an instance of a particular class

== equal To
!= not equal to
= assignment 

-Bitwise Operators
Used to manipulate the binary representation of values.

&   :bitwise AND
^   :bitwise XOR
|   :bitwise OR

Logical Operators

&& :logical AND || :logical OR
These operators join two other boolean expressions to produce a new boolean result.

-Ternary Operators
Make a quick if-Then statement (no else clause) expression_1 ? expression_2 : expression_3

The first expression must be a boolean expression and is followed by a ?

If the boolean expression is T the second statement will execute.

If the first expression is F, the third statement will execute.

int a = 3;
int b = 0
(a < 4) ? (b = 1) : (b = 2);
//prints "1"
System.out.println(b)

-Assignment Operators 
= 

The operator with the lowest precedence is of course the assignment operator, are the arithmetic-assignment combo operators.


Arthmetic-assignment
+=, -=, /=, %=, &=, ^=, |=, <<=, >>>=

These operators are the same as applying an expression on the right side of the assignment operator to the variable on the left, and
storing the result back into the same variable.

d += 3 same as d = d + 3