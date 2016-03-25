Title:How do I get the <Message> msbuild task that shows up in the Visual Studio .NET project output?
---


```xml
<Target Name="BeforeBuild">
  <Message Text="Justin Dearing Message" />
<Target/>
```

However, the messages don't show up in the Visual Studio .NET build output.

To change the build output verbosity shown in the VS.NET output window, open the Options dialog and select the Build and Run settings below the Projects and Solutions node.

![options dialog](msbuild-get-output-message/2014-05-28_134204.png)

Unless you explicitly specify a low message importance, your messages should show up at <font color='blue'>Normal</font> verbosity or higher.
