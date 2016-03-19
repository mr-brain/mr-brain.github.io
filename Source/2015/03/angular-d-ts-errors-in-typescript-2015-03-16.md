angular with many errors in typescript typing files
---

I have a problem with Visual Studio 2013 generating too many errors when using
angular.d.ts typescript type file.

all in jquery.d.ts, like the following errors:

>',' expected.</br>
'=' expected.</br>
Identifier expected.

The most likely reason for this is that you are using an older version of TypeScript.
The language is moving swiftly and some of the features in version 1.4 are particularly useful in definition files, so it is likely that you will need to upgrade to 1.4.

Download version 1.4 [here](https://visualstudiogallery.msdn.microsoft.com/2d42d8dc-e085-45eb-a30b-3f7d50d55304) (Updated 2015.01.16)

However, Where can I find the TypeScript version installed in Visual Studio?
you can simply do in Visual Studio Command Prompt:

	tsc -v

It will display typescript version

	Version 1.0.3.0

