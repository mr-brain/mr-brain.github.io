ValueHelper Class
---

Introduction
If you want to clone the same object of class, you must inherit "ICloneable" interface and implement Clone() method for clone function. Now only through ValueHelper Class can be simple to complete this goal.

*	Assembly:T1.dll
*	Namespace:T1.Common

Using the code:

	MyClass a = new MyClass();
	a.Id = 123;
	a.Name = "abc";
	MyClass b = new MyClass();
	b.Id = a.Id;
	b.Name = a.Name;
	Console.WriteLine("b Id={0} Name={1}", b.Id, b.Name);

And the following code in the same

	MyClass a = new MyClass();
	a.Id = 123;
	a.Name = "abc";
	MyClass b = new MyClass();
	ValueHelper.CopyData(a, b);
	Console.WriteLine("b Id={0} Name={1}", b.Id, b.Name);

You can also use Property.GetValue/SetValue to achieve the same purpose, but ValueHelper.CopyData performance on faster than the Property.GetValue/SetValue.

ValueHelper Class copy only int/float/string... basic types of variables, do not copy the object type variable.

Therefore, the following code to try to copy the a.Item object will be skipped.

	class MyClass1
	{
		public string ID{get; set;}
	}
	
	class MyClass2
	{
		public string Name{get; set;}
		public MyClass1 Item{get; set;}
	}
	
	MyClass2 a = new MyClass2();
	a.Name = "abc";
	a.Item = new MyClass1();
	a.ID = "123";
	MyClass2 b = new MyClass2();
	ValueHelper.CopyData(a, b); 
	//b.Item will be null.