How to deploy files for VS.NET Unit Test Project
---

Here’s the easiest way to accomplish deploying folders to the TestResults folder:

1.	Right click on the .testrunconfig file in your solution explorer.  For me, its LocalTestRun.testrunconfig.
2.	Select Open With and select XML editor
3.	Add a deployment item, specifying the relative path as the file name and an outputdirectory value of the directory name.  In my example, I want to deploy everything in the configuration directory to a folder called configuration in the testrun folder, so I’ve added the following entry:

```xml
<Deployment>
  <DeploymentItem filename="Services\Identity\Claim\ClaimService.Test\configuration\" outputDirectory="configuration\" ></DeploymentItem>
</Deployment>
```

Now when my tests execution, Visual Studio copies over all my configuration file entries and is able to load the app.config file successfully.