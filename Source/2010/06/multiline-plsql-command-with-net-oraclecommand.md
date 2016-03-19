Multi-line PL/SQL command with .NET OracleCommand
---

I'm using System.Data.OracleClient.OracleCommand to create a table and fill it out with some data. The query I am using runs OK in PS/SQL Developer, however when I'm trying to execute it from within .NET application I'm getting this error:

>ORA-06550: line 1, column 20:
PLS-00103: Encountered the symbol "" when expecting one of the following:
>
>begin function package pragma procedure subtype type use form current cursor

Here is some code:

	var text = @"declare cnt number;
	begin
	
	select count(*) into cnt from all_tables
	where table_name = 'TABLE_A';
	
	
	if cnt = 1 then
	begin 
	execute immediate 'truncate table TABLE_A';
	execute immediate 'drop table TABLE_A';
	end;
	end if;
	
	execute immediate 'create table TABLE_A as 
	(SELECT DISTINCT v.ID, g.ext_id FROM VIEW_A v
	JOIN TABLE_B B ON v.id = B.Id
	WHERE YEAR1 = ''2008'')';
	
	end;");
	cmd.CommandText = text;
	cmd.ExecuteNonQuery();

Search Google, finally found:
I think you need to lose just the '\r' characters.

	text = text.Replace("\r\n", "\n");
	cmd.CommandText = text;
	cmd.ExecuteNonQuery();