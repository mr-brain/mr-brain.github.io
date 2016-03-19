Jasmine Errors in VS.NET 2013 
---

I get the following error:

>Script:
C:\Users\xxx\AppData\Local\Microsoft\VisualStudio\12.0\Extensions\2q5cdx5o.qzv\TestFiles\Jasmine\v2\jasmine.js
>
Error: 'null' is not an object (evaluating 'currentSpec.expect') #665


I find the root cause:

	describe("[TS]Test", function () {
	  expect("").toBe("");
	});

I forgot to add the 'it' statement around my expect.

	describe("[TS]Test", function () {
	  it("test",() => {
		expect("").toBe("");
	  });
	});

	