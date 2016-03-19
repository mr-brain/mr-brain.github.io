log all methods using AutoFac interceptor
---

Add references to:

*	Autofac.dll (v3.1.1)
*	Autofac.Extras.DynamicProxy2.dll (v3.0.2)
*	Castle.Core.dll (Castle.Core 3.2.0 for .NETFramework v4.0 Client Profile)

#Create Interceptors#
Interceptors implement the Castle.DynamicProxy.IInterceptor interface. Here's a simple interceptor example that logs method calls including inputs and outputs:

	public class LoggerClass : IInterceptor
	{
		public void Intercept(IInvocation invocation)
		{
			Console.WriteLine("Calling method {0} with parameters {1}... ",
				invocation.Method.Name,
				string.Join(", ", invocation.Arguments.Select(a => (a ?? "").ToString()).ToArray()));
	
			invocation.Proceed();
	
			Console.WriteLine("Done: result was {0}.", invocation.ReturnValue);
		}
	}

#Register Interceptors with Autofac#
Interceptors must be registered with the container. You can register them either as typed services or as named services. If you register them as named services, they must be named IInterceptor registrations.

Which of these you choose depends on how you decide to associate interceptors with the types being intercepted.

	// Named registration
	builder.Register(c => new LoggerClass())
	       .Named<IInterceptor>("log-calls");
	
	// Typed registration
	builder.Register(c => new LoggerClass());

#Enable Interception on Types#
When you register a type being intercepted, you have to mark the type at registration time so Autofac knows to wire up that interception. You do this using the EnableInterfaceInterceptors() and EnableClassInterceptors() registration extensions.

	ContainerBuilder cb = new ContainerBuilder();
	cb.RegisterType<SomeType>()
		 .As<ISomeInterface>()
		 .EnableInterfaceInterceptors()
		 .InterceptedBy(typeof(LoggerClass));
	cb.Register(c => new LoggerClass());

Under the covers, EnableInterfaceInterceptors() creates an interface proxy that performs the interception, while EnableClassInterceptors() dynamically subclasses the target component to perform interception of virtual methods.

Both techniques can be used in conjunction with the assembly scanning support, so you can configure batches of components using the same methods.