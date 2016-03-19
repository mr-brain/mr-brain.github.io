C# Convert XML String to Object
---

You need to use the xsd.exe tool which gets installed with the Windows SDK into a directory something similar to:

	C:\Program Files\Microsoft SDKs\Windows\v6.0A\bin

And on 64bit computers:

	C:\Program Files (x86)\Microsoft SDKs\Windows\v6.0A\bin

On the first run, you use xsd.exe and you convert your sample XML into a XSD file (XML schema file):

	xsd yourfile.xml

This gives you yourfile.xsd, which in a second step, you can convert again using xsd.exe into a C# class:

	xsd yourfile.xsd /c

You can deserialize xml string to C# object:

	StringReader sr = new StringReader(xmlStr);
	XmlSerializer mySerializer = new XmlSerializer(typeof(YourObject));
	YourObject obj = (YourObject)mySerializer.Deserialize(sr);

You can serialize object to **simple** xml string.
First, you must declare namespace in YourObject:

	public class YourObject
	{
	   public YourObject()
	   {
	    this._namespaces = new XmlSerializerNamespaces(new XmlQualifiedName[] {
	      new XmlQualifiedName(string.Empty, "urn:Abracadabra") // Default Namespace
	    });
	  }
	
	  [XmlNamespaceDeclarations]
	  public XmlSerializerNamespaces Namespaces
	  {
	    get { return this._namespaces; }
	  }
	  private XmlSerializerNamespaces _namespaces;
	
	  ...
	}

Then you can start serialize obj to xml string:

	MemoryStream ms = new MemoryStream();
	XmlSerializer mySerializer = new XmlSerializer(typeof(YourObject));
	mySerializer.Serialize(ms, obj, obj.Namespaces);
	ms.Position = 0;
	StreamReader sr = new StreamReader(ms);
	string strXml = sr.ReadToEnd();