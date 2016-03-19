How To Catch HttpRequestValidationException
---

If you've worked with ASP.NET for any length of time, you have worried about how to handle the Yellow Screen of Death. You know, the one that says:

	HttpRequestValidationException: A potentially dangerous Request.Form value was detected from the client...

or something similar.

The common refrain is turn off request validation, but there are times when you want to use the built-in validation functions. You just want a friendlier error for your user.

This code could be better thought out, but here it is anyway:

	void Application_Error(object sender, EventArgs e) 
	{ 
	  // Code that runs when an unhandled error occurs
	  Exception ex = Server.GetLastError();
	  if (ex is HttpRequestValidationException)
	  {
	    HttpWebRequest req = (HttpWebRequest)WebRequest.Create(
	      "http://" + Request.Url.Authority + Request.ApplicationPath + "/HttpRequestValidationException.aspx");
	    HttpWebResponse response = (HttpWebResponse)req.GetResponse();
	
	    Response.Clear();
	    Response.ClearHeaders();
	    for (int i = 0; i < response.Headers.Count; i++)
	      Response.AddHeader(response.Headers.GetKey(i), response.Headers.Get(i));
	    Response.StatusCode = (int)response.StatusCode;
	
	    System.IO.Stream src = response.GetResponseStream();
	    while (true) {
	      int b = src.ReadByte();
	      if (b == -1) break;
	      Response.OutputStream.WriteByte((byte)b);
	    }
	
	    response.Close();
	    Response.End(); 
	}