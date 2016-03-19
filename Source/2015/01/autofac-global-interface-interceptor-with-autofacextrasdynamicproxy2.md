Autofac global interface interceptor with Autofac.Extras.DynamicProxy2
---

You can't really do EnableInterfaceInterceptors *globally*.

But you can add the interceptors dynamically and it requires a little work. The way to go is to create a custom Autofac.Module that attaches to all component registrations. I'll show it to you in an example.


	public class InterceptorModule : Autofac.Module
	{
	  // This is a private constant from the Autofac.Extras.DynamicProxy2 assembly
	  // that is needed to "poke" interceptors into registrations.
	  const string InterceptorsPropertyName = "Autofac.Extras.DynamicProxy2.RegistrationExtensions.InterceptorsPropertyName";
	
	  protected override void Load(ContainerBuilder builder)
	  {
	    // Register global interceptors here.
	    builder.Register(c => new CallLogger(Console.Out));
	  }
	
	  protected override void AttachToComponentRegistration(IComponentRegistry componentRegistry, IComponentRegistration registration)
	  {
	    // Here is where you define your "global interceptor list"
	    var interceptorServices = new Service[] { 
			new TypedService(typeof(CallLogger)) 
		};
	
	    // Append the global interceptors to any existing list, or create a new interceptor
	    // list if none are specified. Note this info will only be used by registrations
	    // that are set to have interceptors enabled. It'll be ignored by others.
	    object existing;
	    if (registration.Metadata.TryGetValue(InterceptorsPropertyName, out existing))
	    {
	      registration.Metadata[InterceptorsPropertyName] =
	        ((IEnumerable<Service>)existing).Concat(interceptorServices).Distinct();
	    }
	    else
	    {
	      registration.Metadata.Add(InterceptorsPropertyName, interceptorServices);
	    }
	  }
	}

To make it work, you register the module along with the rest of your dependencies. 

	builder.RegisterType<YourType>()
       .As<YourIInterface>()
       .EnableInterfaceInterceptors();
	// Here's the magic module:
	builder.RegisterModule<InterceptorModule>();
	var container = builder.Build();


If you run these registrations and resolve, You can see the interceptor works as you'll see the CallLogger output.