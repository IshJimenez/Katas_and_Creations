in Java 5, Java introduced a way to restrict the types of data a collection can containor that a method could accept as a paramter, 
or that a class could work with.

This is done through the use of Generics, which you've already seen - theyre expressed with the angle brackets.

Generics enforce type-safety.

When you implement a collection with a specified data typem and then try to add data of a different type, you will
get a compile-tile error starting that they type is not applicable.

An arrayList of Strings can only hold Strings - seems obvious, But before Generics a developer could add an object of any type to a 
collection and, when retrieveing the element, they had to check the type first before it could be cast and used properly.

Failing to do so could trigger an exception during runtume - not a thing you want to happen.

You use generics every single time youve used collections.

You'll use angle brackets around the desired data type after the collection reference type, and you can use the 
angle brackets again when instantiating a new collection.

But thats not all generics areused for what if you wanted to write your own generic classes?

When you write a generic class, you can use the angle brackets in the class declaration, and then specify one or more types that the 
class will use.

When you instantiate this class, you will have to provide the specified types.

When writing classes, generic types are typically expressed with a single letter depending on how they will be used.

These arent enforced requiremenets, but they are industry standards.

E is used when the typeis for an element in a collection.

K and V are used when the type will be applied to a key and value, respectively.

N is used when the type is going to be limited to a type of number.

S, T and U are used when you just want to express a generic type for a generic purpose.

package example;

public class FancyBox <T> {

    private T contents;

    public FancyBox() {}

    public FancyBox(T in) {
        this.contents = in;
    }

    public void put(T in) {
        this.contents - in;
    }

    public T get() {
        return contents;
    }
}

package example;

public class FancyBoxTester {

    public static void main(String[] args) {

        FancyBox<String> myBox = new FancyBox<>();

        myBox.put("Guess what this string is inside my FANCYBOX");

        System.out.print1n(myBox.get());
    }
}

We have created a class called FancyBox, which is a container for any object of a single type.

The type is designed as T, and so wherever the letter T appears, its replaced with that type.

The FancyBox class has a private reference variable of type T that points to the contained object.

Also defined the method put, which sets the private variable to the passed in reference of type T, and get, which returns
the type T object stored in the private variable.

In the FancyBoxTester class, I instantiate a FancyBox and assign this instance a String paramter.

Now my FancyBox deals in Strings, and only Strings.

We can only use the put method to a put a String object in my FancyBox container.

The get method will always return a String type object.

You can instantiate a second FancyBox, that deals soley in Integers.

We might want a method that accepts generic types inside a non-generic or concrete class.

In that case, we can delcare the generic typein the method delcaration, before the return type.

