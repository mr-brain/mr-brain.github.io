Display GMT date-time format string for C#
---

The perform code is:

	public static string GetGmtTimeString(this DateTime now)
	{
	  double gmt = TimeZoneInfo.Local.GetUtcOffset(now).TotalHours;
	  string gmtTime = string.Format("{0} GMT{1}{2}",
	    now.ToString("yyyy/MM/dd HH:mm:ss"),
	      (gmt >= 0) ? "+" : "",
	      gmt);
	  return gmtTime;
	}