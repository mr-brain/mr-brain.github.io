Database diagram support objects cannot be installed
---

If you ever get a message like this when trying to create a diagram in SQL 2005/2008 Express.

>Database diagram support objects cannot be installed because this database does not have a valid owner. 
>
To continue, first use the Files page of the Database Properties dialog box or the ALTER AUTHORIZATION statement to set the database owner to a valid login, then add the database diagram support objects.


Here's step by step what you have to do:

	EXEC sp_dbcmptlevel 'yourDB', '90';
	go
	ALTER AUTHORIZATION ON DATABASE::yourDB TO "yourLogin"
	go
	use [yourDB]
	go
	EXECUTE AS USER = N'dbo' REVERT
	go