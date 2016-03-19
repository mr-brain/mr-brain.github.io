Json.NET Serialize/Deserialize methods
---

The following example demonstrates the use Strong type, JObject, Dynamic different approaches to deal with JSON serialization / deserialization.


	public class Food
	{
		public DateTime d { get; set; }
		public int n { get; set; }
		public string s { get; set; }
		public int[] a { get; set; }
	}

Lab1:Using Strong Type to deserialize

	Food f = JsonConvert.DeserializeObject<Food>(jsonString);

Lab2:Using JObject to deserialize

	JObject jo = JObject.Parse(jsonString);
	DateTime d = jo.Property("d").Value.Value<DateTime>();
	int n = jo["n"].Value<int>();
	string s = jo["s"].Value<string>();
	int[] ary = jo["a"].Value<JArray>()
	  .Select(o => o.Value<int>()).ToArray();

Lab3:Using Dynamic to deserialize

	JObject jo = JObject.Parse(jsonString);
	dynamic dyna = jo as dynamic;

	DateTime d = dyna.d;
	int n = dyna.n;
	string s = dyna.s;
	var ary = ((JArray)jo["a"]).Cast<dynamic>().ToArray();


Deserialize Performance: Lab2 > Lab1 ~= Lab2

Lab4:Using Strong Type to serialize

	Food f = new Food()
	{
		d = new DateTime(2015, 1, 1),
		n = 12345,
		s = "MR-Brain",
		a = new int[] { 1, 2, 3, 4, 5 }
	};
	string json = JsonConvert.SerializeObject(f);

Lab5:Using JObject to serialize

	JObject jo = new JObject();
	jo.Add(new JProperty("d", new DateTime(2015, 1, 1)));
	jo.Add(new JProperty("n", 12345));
	jo.Add(new JProperty("s", "MR-Brain"));
	jo.Add(new JProperty("a", new JArray(1, 2, 3, 4, 5)));
	string json = jo.ToString(Formatting.None);

Lab6:Using Dynamic to serialize

	dynamic dyna = new JObject();
	dyna.d = new DateTime(2015, 1, 1);
	dyna.n = 12345;
	dyna.s = "MR-Brain";
	dyna.a = new JArray(1, 2, 3, 4, 5);
	string json = dyna.ToString(Formatting.None);

Serialize Performance: Lab5 > Lab4 > Lab6 


