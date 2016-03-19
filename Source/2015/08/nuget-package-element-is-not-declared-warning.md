nuget 'packages' element is not declared warning
---

not a showstopper but when using nuget in a project, it creates a packages.config file with this shape

```
<?xml version="1.0" encoding="utf-8"?>
<packages>
   ... your packages
</packages>
```
 
this gives a warning in VS

>The 'packages' element is not declared.



You can always make simple xsd schema for 'packages.config' to get rid of this warning. To do this, create file named "packages.xsd":

```
<?xml version="1.0" encoding="utf-8" ?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified"
      targetNamespace="urn:packages" xmlns="urn:packages">
  <xs:element name="packages">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="package" maxOccurs="unbounded">
          <xs:complexType>
            <xs:attribute name="id" type="xs:string" use="required" />
            <xs:attribute name="version" type="xs:string" use="required" />
            <xs:attribute name="targetFramework" type="xs:string" use="optional" />
            <xs:attribute name="allowedVersions" type="xs:string" use="optional" />
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

Location of this file (two options)

In the same folder as 'packages.config' file,
If you want to share packages.xsd across multiple projects, move it to the Visual Studio Schemas folder (the path may slightly differ, it's  D:\Program Files (x86)\Microsoft Visual Studio 10.0\Xml\Schemas for me).
Then, edit <packages> tag in packages.config file (add xmlns attribute):

```
<packages xmlns="urn:packages">
```

Now the warning should disappear (even if packages.config file is open in Visual Studio).
