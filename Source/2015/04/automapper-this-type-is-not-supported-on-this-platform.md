Automapper 3.0 - This type is not supported on this platform when I use MSTest.exe ?
---

MSTest show following error:

>Source value:
System.Data.DataTableReader ---> System.PlatformNotSupportedException: Proxy generation not supported on this platform.

To fix it, add an explicit call to something in AutoMapper.Net4.dll. For instance, with the class ListSourceMapper :

	var useless = new ListSourceMapper();

Or you can

	[TestClass]
    [DeploymentItem("AutoMapper.Net4.dll")]
    public class YourTest
	{
		[TestMethod]
		public void Test1()
		{
			...
		}
	}