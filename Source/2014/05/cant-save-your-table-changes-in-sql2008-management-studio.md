Can’t save your table changes in SQL2008 Management Studio
---

Can’t save your table changes in SQL2008 Management Studio ?

In SQL Server 2008, when you do some changes on a table and save it you’ll get a warning message like below

    Saving changes is not permitted. The changes you have made require the following tables to be dropped and re-created. You have either made changes to a table that can’t be re-created or enabled the option Prevent saving changes that require the table to be re-created.

What the… that didn’t happen to me in SQL Server 2005 nor previous versions of SQL Server. So there is definitely a behaviour change in the new management studio. Luckily this behaviour can be disabled. You just need to go to Tools -> Options then go to the Designer Page and uncheck "Prevent saving changes that require table re-creation".