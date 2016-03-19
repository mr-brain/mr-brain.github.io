dir file whose File size is greater than 1024KB
---

Powershell: dir file whose File size is greater than 1024KB

The following example perform is will list the files with .pdf extensions. where-object will filter the result set to files with length greater than 1MB. format-table will format the final output to display only the name of the file

ls *.pdf -Recurse | where-object {$_.length -gt 1048576} | format-table -property Name

