Cannot see cs files after last rename VS.NET 2013 Projects
---

After I rename VS.NET 2013 Project Name, I had this **"The 'Microsoft.VisualStudio.Editor.Implementation.EditorPackage' package did not load correctly."** error message when I started up Visual Studio 2013.

![img](https://dl.dropboxusercontent.com/u/13003046/images/VS2013-ActivityLog-xml-Exception.png)

This is telling me to open ActivityLog.xml, and hopefully an answer will be found.  So I opened up that file and found some error entries:

>No EditorOptionDefinition export found for the given option name: Graphics/Simple/Enable
Parameter name: optionId

For Visual Studio 2013, it’s located in the 
>%LOCALAPPDATA%\Microsoft\VisualStudio\12.0 folder.
For Visual Studio 2012, it's 11.0 folder.

I renamed **ComponentModelCache** to **ComponentModelCache.Borked** and restarted Visual Studio. It started right up and without any errors.