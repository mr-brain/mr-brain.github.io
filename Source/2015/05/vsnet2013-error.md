VS.NET 2013 Error
---

Getting Error "'Microsoft.VisualStudio.Editor.Implementation.EditorPackage' package did not load correctly"?

>Please try to remove %LOCALAPPDATA%\Microsoft\VisualStudio\11.0\ComponentModelCache and restarting VS2012. Hope this will fix your issue.


Getting Error "Object reference not set to an instance of an object." when open test project in VS.NET 2013?

Maybe this helps:

Delete the contents from the following folders:

* C:\Users\{user}\AppData\Local\Microsoft\VisualStudio
* C:\Users\{user}\AppData\Local\Microsoft\VSCommon

Sometimes, you need to go to:

* [x64] C:\Program Files (x86)\Microsoft Visual Studio 14.0\Common7\IDE
* [x86] C:\Program Files\Microsoft Visual Studio 14.0\Common7\IDE

and run devenv /resetuserdata.
