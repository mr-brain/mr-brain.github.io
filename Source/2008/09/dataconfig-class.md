DataConfig Class
---


Introduction
Each database connection parameters set different. DataConfig so you can easily set these parameters.

Assembly:T1.Data.dll
Namespace:T1.Data

DataConfig Properties:

*	ProviderType ProviderType
*	string Server
*	string Database
*	string LoginId
*	string Password


Through the above property setting, you can easily export a variety of different database connection string.
Using the code:

	DataConfig cfg = new DataConfig();
	cfg.ProviderType = ProviderType.SqlServer;
	cfg.Server = "172.0.0.1";
	cfg.Database = "Northwind";
	cfg.LoginId = "sa";
	cfg.Password = "123";
	console.WriteLine(cfg.ConnectString);


If you wish change to Oracle...

	cfg.ProviderType = ProviderType.Oracle;
	console.WriteLine(cfg.ConnectString);

Even if you wish change to SqlExpress...

	cfg.ProviderType = ProviderType.SqlExpress;
	console.WriteLine(cfg.ConnectString);

In addition you can also simplify the traditional connection string in app.Config file.

<add name="db1" connectionString="Data Source=172.0.0.1;Network Library=DBMSSOCN;Initial Catalog=Northwind;User ID=sa;Password=123"></add>


Change to...

```xml
<add name="db1" connectionString="ProviderType=SqlServer;Server=172.0.0.1;Database=Northwind;User ID=sa;Password=123"></add>
```

If you wish change to Oracle connection string...

```xml
<add name="db1" connectionString="ProviderType=Oracle;Server=172.0.0.1;Database=Northwind;User ID=sa;Password=123"></add>
```

With DataConfig, you do not have to remember some special database connection parameters.