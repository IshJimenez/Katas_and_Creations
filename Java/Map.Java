A map, unlike a List, Queue, or Set, is an interface that is not a part of the Collection hierarchy.

However, it's still referred to as a collection or data structure.

A Map is a type  of container that stores information in key/value pairs.

In some languages they're called dictionaries, because they are similar to how you can use a word as a key to look up its definition-its value.

Under the Map interface, you will find the well-known impleneting classes.

Hashtable, HashMap store objects based on a special identifier called a hash code, which is generated for an object using a special hasing function.

Both are used to sort and retrieve objects extremely efficiently.

One of the most important difference between the two is that Hashttrive ble is synchronized - meaning that in application that use multiple concurrent
processes or threads.

A Hastable can be accessed safely by two different processes at the same time.

HashMap is not synchronized, but it is faster and preffered for applications where only one prcoess needs to access the map at a time.

Also a Hastable does not allow any null keys or values where a HashMap will alllow up to one 1 null key and any value can be null.

TreeMap is similar to HashMap but its elements are sorted.

The 3 main map methods are (put, get, and KeySet)

Put is used to add a key/value pair to a map.

A single map accepts a single data type for they key, and a single datatype for the key, and a single datatype for the the value.

These data types can be different; for example, an Integer can be used as a key for a String value.

Get is used to retrieve a value by specifying its associated key.

If the given key does not exist in the map, the returned result will be bull.

Similiarly, remove can be used to remove a key/value pair from a map by specifying the key.

Keyset is a method created for your convenience to return a List of all the keys in the map.

If the given key does not exist in the map, the returned result will be null.

Similarly, remove can be used to remove a key / value pair from a map by specifying the key.

Keyset is a method created for your convenience to return a List of all the keys in the map.

It is typically used to iterate over a map.

You could alos use the values method to get a collection of the values contained in the map but you wont have the keys by whuch to identify them.

package example;

import java.util.HashMap;

public class TestHashMap {

    public static void  main(String[] args) {

        HashMap<Interger, String> myMap = new HashMap<>();

        myMap.put(1, "Clake");
        myMap.put(2, "Blake");
        myMap.put(3, "Tlake");

        System.out.println("The String stored under the key \"3\" is: " + myMap.get(3));
    }
    }

HashMap uses generics to specify that an integer will be the key and String will be the value.

Using put method we are able to add elements to our HashMap.

The HashMap uses its internal confirguration to keep track of the key/value pairs.

Next using get to retrieve a value stored at a location set by the keys.

Then just simply printing the statment to the console indicating what the value is.

Maps are the most commonlyy used type of collection right behind Lists.

In many algorithms data is actually moved to a map format to speed up processing.

Lets say you were scanning input texts to determine the most commonly occuring word.

Your algorithm with a map is simple for each word, checj if it exists in a map where the word is the ket and an integer representing the number of 
occurences is the value.

If it doesnt exist in the keys, add it with 1 as the value.

If it does exist, increment the value for the word-key by 1.

When youre finished iterate through the list to find the highest value.

1. Write a class Account that declares an id (long) property and an accountType (String) property. Create
a method that has the following signature:
List<Account> createAccounts(int numAccounts).
The method should create a number of Accounts equal to the numAccounts parameter and return those
accounts in a List. For example, createAccounts(5) should create five instances of Account and return
those in a List.
In an Application class, call the createAccounts() and then loop through the returned List and print the
ids of each Account

import java.util.ArrayList;
import java.util.List;

public class Account {

	private long id;
	private String accountType;
	
	
	
	public Account(long id, String accountType) {
		super();
		this.id = id;
		this.accountType = accountType;
	}



	public static List<Account> createAccounts(int numAccounts){
		List<Account> accounts = new ArrayList<>();
		
		while (numAccounts > 0){
			Account a = new Account(1000 + numAccounts, "savings");
			accounts.add(a);
			numAccounts--;
		}
		
		return accounts;
	}
	
	@Override
	public String toString() {
		return "Account [id: " + this.id + "]";
	}
}

import java.util.List;

public class Application {

	public static void main(String[] args) {
		int numAccounts = 10;
		
		List<Account> accounts = Account.createAccounts(numAccounts);
		for (int i = 0; i < numAccounts; i++){
			System.out.println(accounts.get(i));
		}
	}
}
