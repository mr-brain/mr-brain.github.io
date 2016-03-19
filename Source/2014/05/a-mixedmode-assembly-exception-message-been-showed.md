A “mixed-mode assembly exception” Message been showed.
---

To run .NET 2.0 assembly in .NET 4.0 environment, a “mixed-mode assembly exception” Message been showed.

Add a configuration in the app.config: startup

    <startup useLegacyV2RuntimeActivationPolicy=”true”> 
      <supportedRuntime version=”v4.0”/> 
    </startup>

reference from MSDN, specifically address: http://msdn.microsoft.com/zh-cn/library/bbx34a2h.aspx