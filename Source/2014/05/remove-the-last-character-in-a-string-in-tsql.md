Remove the last character in a string in T-SQL?
---

How do I remove the last character in a string in T-SQL?

I.E. 

>'TEST STRING'

to return:

>'TEST STRIN'

Sample code:

	DECLARE @String VARCHAR(100)
	SET @String = 'TEST STRING'
	
	-- Chop off the end character
	SET @String = LEFT(@String, LEN(@String) - 1)
	
	SELECT @String