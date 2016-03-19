ASP.NET MVC Table Grid Post Form And Read Lines
---

How can read the posted grid data line by line?

You can create a Model for Stock and it can be bind to your view. Then you can pass list of stock objects to controller as below.

**Stock Model**

	public class Stock
	{
	    public int StockId { get; set; }
	    public int Amount { get; set; }
	    public decimal Price { get; set; }
	}

**View**

	@model IEnumerable<Stock>
	<form action="/Controler/ActionStockNew" method="post" id="form">
	<table>
	    @for (int i = 0; i < Model.Count(); i++)
	    {<tr>
	        <td>
	            <input type="text" name="[@i].StockId" />
	        </td>
	        <td>
	            <input type="text" name="[@i].Amount" />
	        </td>
	        <td>
	            <input type="text" name="[@i].Price" />
	        </td>
	    </tr>
	    }
	</table>
	<input type="submit" value="Save" />
	</form>

**Controllers**

	public ActionResult ActionStockNew()
	{
	    List<Stock> stockList = new List<Stock>();
	    // fill stock
	
	    return View(stockList);
	}
	
	[HttpPost]
	public ActionResult ActionStockNew(ICollection<Stock> stockList)
	{
	    // process
	}