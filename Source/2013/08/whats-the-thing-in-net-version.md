What's the thing in .net version?
---


|Visual Studio|.NET								|MVC        |EF  |Released     |
|--		      |:--								|--         |--  |--           |
|VS2002       |1.0								|N/A        |N/A |January 2002 |
|VS2003	      |1.1								|N/A        |N/A |April 2003   |
|VS2005       |2.0								|N/A        |N/A |November 2005|
|VS2008       |2.0,3.0,3.5						|N/A        |N/A |November 2007|
|VS2008SP1    |2.0,3.0,3.5SP1					|Add-in 1.0 |Yes |August 2008  |
|VS2010SP1    |2.0,3.0,3.5,4.0					|2.0,3.0    |Yes |April 2010   |
|VS2010SP1    |2.0,3.0,3.5SP1,4.0				|2.0,3.0    |Yes |March 2011   |
|VS2012       |2.0,3.0,3.5,4.0,4.5				|3.0,4.0    |Yes |August 2012  |
|VS2012SP2    |2.0,3.0,3.5,4.0,4.5				|3.0,4.0    |Yes |April 2013   |
|VS2012SP3    |2.0,3.0,3.5,4.0,4.5				|3.0,4.0    |Yes |June 2013    |
|VS2013	      |2.0,3.0,3.5,4.0,4.5.1			|4.0        |Yes |October 2013 |
|VS2015	      |2.0,3.0,3.5,4.0,4.5.1,4.5.2,4.6	|			|Yes | |

VS2010SP1: When you have SP1 installed you'll see instead: Microsoft Visual Studio 2010 Version 10.0.40219.1 SP1Rel Microsoft .NET Framework Version 4.0.30319 SP1Rel

VS2012SP2: Add Fakes Framework that is the next generation of Moles & Stubs. (http://research.microsoft.com/en-us/projects/moles/) Fakes is different from Moles, however, so moving from Moles to Fakes will require some modifications to your code. The Moles framework will not be supported in Visual Studio 2012.

|C# 	|.NET	|CLR	|MVC    |Razor	|Not support OS
|--     |--		|--		|--     |--		|--
|C# 1.0 |1.0	|1.0	|N/A    |N/A	|
|C# 1.2 |1.1	|1.1	|N/A    |N/A	|
|C# 2.0 |2.0	|2.0	|MVC1   |N/A	|
|C# 3.0 |3.5	|2.0	|MVC2   |N/A	|
|C# 4.0 |4.0	|4.0	|MVC3,4	|Razor	|
|C# 5.0 |4.5	|4.0	|MVC4   | 		|XP,2003
|		|4.5.1	|4.0	|		| 		|
|		|4.5.2	|4.0	|		| 		|

C# 1.2 Features: First version to call Dispose on IEnumerators which implemented IDisposable

C# 2.0 Features: Generics, anonymous methods, nullable types

C# 3.0 Features: Lambda expressions, extension methods, expression trees, implicit type(var), query expressions

C# 4.0 Features: Late binding(dynamic), named arguments and optional

C# 5.0 Features: Async programming, caller info attributes

|VS.NET |Path
|--     |--
|VS2008 |"C:\Program Files\Microsoft Visual Studio 9.0"
|VS2010 |"C:\Program Files\Microsoft Visual Studio 10.0"
|VS2012 |"C:\Program Files\Microsoft Visual Studio 11.0"
|VS2013 |"C:\Program Files\Microsoft Visual Studio 12.0"


There are some known issues using EF 4.x in a .NET 4.5 project.
We recommend installing a pre-release version of EF 5, which is designed to work with .NET 4.5

Update: 2015.03.15