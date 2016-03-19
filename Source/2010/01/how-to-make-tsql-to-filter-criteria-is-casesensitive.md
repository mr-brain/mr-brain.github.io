How to make T-SQL to filter criteria is case-sensitive?
---

Basically, add more "Collate SQL_Latin1_General_CP1_CI_AS" in after the conditions, it should be followed would be a case-sensitive.

	SELECT *
	FROM dbo.CaseSensitiveTest
	WHERE Value1 LIKE '%Test%' Collate SQL_Latin1_General_CP1_CI_AS
	GO