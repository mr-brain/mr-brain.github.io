Microsoft.VisualStudio.Shell.Interop.dll ERROR
---

VS 2008, COM interop, and Microsoft.VisualStudio.Shell.Interop.dll

When I try to compile our VsPackages with VS 2008 the compilation fails. The compilation fails with the message:

>The assembly 'Microsoft.VisualStudio.Shell.Interop, Version=7.1.40304.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a' 
is not registered for COM Interop. Please register it with regasm.exe /tlb.

This is a known bug that was discovered right as VS2008 was going out the door. Microsoft have a fix in place (to be delivered with VS 2008 SP1)

>https://connect.microsoft.com/VisualStudio/Downloads/DownloadDetails.aspx?DownloadID=10671
