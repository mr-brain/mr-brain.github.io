Overriding == operator. How to compare to null?
---

Here is a simplified example:

	public static bool operator ==(ThreeDPoint a, ThreeDPoint b)
	{
	    if (a == null)
	    {
	         //any code here never gets executed!  We first die a slow painful death.
	    }
	    return a.Equals(b);
	}

However, what happens when a ThreeDPoint  object is null?

You can't write:

	ThreeDPoint  a;
	if (a == null)
	{
	    //fail!
	}

Use object.ReferenceEquals(person1, null) instead of the == operator:

	public static bool operator ==(ThreeDPoint a, ThreeDPoint b)
	{
	    // If both are null, or both are same instance, return true.
	    if (System.Object.ReferenceEquals(a, b))
	    {
	        return true;
	    }
	
	    // If one is null, but not both, return false.
	    if (((object)a == null) || ((object)b == null))
	    {
	        return false;
	    }
	
	    // Return true if the fields match:
	    return a.x == b.x && a.y == b.y && a.z == b.z;
	}