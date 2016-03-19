DynamicProperty Class
---

Introduction
Some programming tasks require dynamic nature of properties exposed by an object. E.g. it might be needed to access object property by a given key, it might be needed to get all object properties and iterate over them. Dynamic properties are useful when you need to manage them at runtime, when your object is already instantiated. 

In this article we are going to create simple implementation of dynamic properties using C# programming language. We'll use generics for our dynamic properties to make the implementation more flexible and to avoid boxing operations when value types are used for underlying property values.

*	Assembly:T1.dll
*	Namespace:T1.Common

Using the code 

	MyClass c1 = new MyClass();
	c1.Name = "123";
	int i = c1.ID;

Using .NET Invoke Method 

	MyClass c1 = new MyClass();
	PropertyInfo pi = c1.GetProperty("Name");
	pi.SetValue(c1, "123");
	pi = c1.GetProperty("ID");
	int i = (int)pi.GetValue(c1, null);

Using DynamicProperty Method 

	MyClass c1 = new MyClass();
	var setName = DynamicProperty.SetProperty("Name");
	setName(c1, "123");
	var getID = DynamicProperty.GetProperty("ID");
	int i = getID(c1);

DynamicProperty Method is fast than Invoke Method.
