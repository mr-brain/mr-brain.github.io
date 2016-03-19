Why isn't there an Assembly. Unload method?
---


Please refer to this article (http://blogs.msdn.com/jasonz/archive/2004/05/31/145105.aspx).

Memory consumption been eating more and more?

    do
    {
      Assembly.LoadFrom("Library1.dll");
    }while( true );

The result is NO. It will only keep a copy of Library1 Assembly in Memory, And never been release.
But I need the plugin Mechanism for Load/Unload Assembly.

How to load and unload Library1 Assembly?
Step1: Create the Library1 Project.

    [Serializable]
    public class MyClass1
    {
      public string Test()
      {
        return "abc";
      }
    }

Step 2: Create the Test Project.

    AppDomainSetup ads = new AppDomainSetup();
    ShadowCopyFiles = "true";
    var myAppDomain = AppDomain.CreateDomain("MyAppDomainName", null, ads);

The follow code will load Library1.dll file.

    object proxy = myAppDomain.CreateInstanceFromAndUnwrap("Library1.dll", "Library1.MyClass1");

Invoke the Test Method.

    MethodInfo mi = proxy.GetType().GetMethod("Test", BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance);
    string s = (string)mi.Invoke(proxy, new object[]{});

Unload the Library1.dll file.

    AppDomain.Unload(myAppDomain);

If you use T1 Common Library. You can write the following simple code.

    UnloadAssembly asm = UnloadAssembly.Load("Library1.dll");
    UnloadClass cls = asm.GetUnloadClass("Library1.MyClass1");
    string s = (string)cls.Invoke("Test");
