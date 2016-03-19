Dynamic Linq To Object
---


Q: I need to filter a generic list with a dynamic query:

	List<string> l; 
	var x = l.Where(*dynamic query*)

How would i do this using LINQ?
but it appears to not work with objects that use IEnumerable(generic lists included).
Can anyone offer any ideas?

Answers
>Assuming you mean a string-based query: the dynamic LINQ library will work fine; just call .AsQueryable() first:


	string s = *dynamic query*
	var qry = l.AsQueryable().