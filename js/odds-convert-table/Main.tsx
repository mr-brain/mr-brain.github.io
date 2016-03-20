import ReactDOM = require('react-dom');
import v1 = require("OddsConvertTable");
import OddsConvertTable = v1.OddsConvertTable;

$(function () {
	ReactDOM.render(
		<div>
			<OddsConvertTable />
		</div>,
		document.getElementById('app')
	);
});
