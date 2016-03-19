C# 5.0 CallerMemberName 
---

My new favorite C# language feature: CallerMemberName 

This is how a property with INotifyPropertyChanged support looks like pre C# 4.5: 

	public string OldStylePropertyChanged
	{
	  get { return _oldStyle; }
	  set
	  {
	    if (value != _oldStyle)
	    {
	      _oldStyle = value;
	      OnPropertyChangedOldStyle("OldStylePropertyChanged");
	    }
	  }
	}
	private void OnPropertyChangedOldStyle(string propertyName)
	{
	  var handler = PropertyChanged;
	  if (handler != null)
	  {
	    handler(this, new PropertyChangedEventArgs(propertyName));
	  }
	}
	
And this is how it will look like when we apply the use of CallerMemberName in our PropertyChanged method: 

	public string DynamicTitle
	{
	  get { return _dynamicTitle; }
	  set
	  {
	    if (value != _dynamicTitle)
	    {
	      _dynamicTitle = value;
	      OnPropertyChanged();
	    }
	  }
	}
	private void OnPropertyChanged([CallerMemberName] string propertyName = null)
	{
	  var handler = PropertyChanged;
	  if (handler != null)
	  {
	    handler(this, new PropertyChangedEventArgs(propertyName));
	  }
	}

Some more really cool additions to CallerMemberName is the following Parameter attributes: 

*	[CallerMemberName]
*	[CallerFilePath]
*	[CallerLineNumber]

The name of the attributes is straight forward and easy to understand, so I doubt that I would have to describe them in detail, instead, let's look at an example straight from MSDN on how to use them. 

	public sealed class Logger
	{
	  public void TraceMessage(string message,
	       [CallerMemberName] string memberName = "",
	       [CallerFilePath] string sourceFilePath = "",
	       [CallerLineNumber] int sourceLineNumber = 0)
	  {
	    Debug.WriteLine("message: " + message);
	    Debug.WriteLine("member name: " + memberName);
	    Debug.WriteLine("source file path: " + sourceFilePath);
	    Debug.WriteLine("source line number: " + sourceLineNumber);
	  }
	}

Happy hacking!