jQuery Multiple Attribute Selector
---

jQuery Multiple Attribute Selector

>input name=value *AND* name2=value2

is perform following:

	$['input[name="value"][name2="value2"]')

>input name=value *OR* name2=value2

is perform following:

	$['input[name="value"] , [name2="value2"]')
