Razor View throwing "The name 'model' does not exist in the current context"
---

Razor is giving me this nonsensical error:

>The name 'model' does not exist in the current context.

The part that makes literally zero sense is that this is causing the error:

			@model ICollection<DataSourceByActive>

I know for a fact that @model is proper Razor syntax.

So why is this happening? How can I fix it?

I think you have messed up the web.config file which lives in the Views folder.

>Create a new project targeting same .NET framework and copy its Views/web.config file over top the one in your current project

This will fix your problem.