Select distinct using linq
---

Using [morelinq](https://code.google.com/p/morelinq/) you can use DistinctBy:

	myList.DistinctBy(x => x.id);

Otherwise, you can use a group:

	myList.GroupBy(x => x.id)
		.Select(g => g.First());

Or you can use linq syntax

	distinctData = from tb1 in myList
		group tb1 by tb1.id into g
		select g.First();

You can create custom extension method:

	public static class EnumerableExtender
	{
		public static IEnumerable<TSource> DistinctBy<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector)
		{
			HashSet<TKey> seenKeys = new HashSet<TKey>();
			foreach (TSource element in source)
			{
				var elementValue = keySelector(element);
				if (seenKeys.Add(elementValue))
				{
					yield return element;
				}
			}
		}
	}

Would be better to write a lot of use.

	distinctDatas = myList.DistinctBy(person => person.Name);