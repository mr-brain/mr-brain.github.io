import ReactDOM = require('react-dom');
import v1 = require("SearchBox");
import SearchBox = v1.SearchBox;

$(function () {
	ReactDOM.render(
		<div>
			<SearchBox />
		</div>,
		document.getElementById('SearchBox')
	);
});
