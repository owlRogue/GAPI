/* global jQuery */
// $('.download-button').on('click', function(){
    //$('#tab').table2csv('output', {appendTo: '#out'});
    // console.log('Download starting...')
    // $('#theTable').table2csv();
// });

($ => {
	
	var options = {
		/* action='downoad' options */
		filename: 'table.csv',
		
		/* action='output' options */
		appendTo: 'body',
		
		/* general options */
		separator: ',',
		newline: '\n',
		quoteFields: true,
		excludeColumns: '',
		excludeRows: ''
	};
	
	var quote = text => {
		return '"' + text.replace('"', '""') + '"';
	}
	
	// taken from http://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
	var download = (filename, text) => {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);
		
		element.style.display = 'none';
		document.body.appendChild(element);
		
		element.click();
		
		document.body.removeChild(element);
	}
	
	var convert = table => {
		var output = "";
			
		var rows = table.find('tr').not(options.excludeRows);
		
		var numCols = rows.first().find("td,th").filter(":visible").not(options.excludeColumns).length;
		
		rows.each(() => {
			$(this).find("td,th").filter(":visible").not(options.excludeColumns)
			.each((i, col) => {
				col = $(col);
				
				output += options.quoteFields ? quote(col.text()) : col.text();
				if(i != numCols-1) {
					output += options.separator;
				} else {
					output += options.newline;
				}
			});
		});
		
		return output;
	}
	
	$.fn.table2csv = (action, opt) => {
		if(typeof action === 'object') {
			opt = action;
			action = 'download';
		} else if(action === undefined) {
			action = 'download';
		}
		
		$.extend(options, opt);
		
		var table = this; // TODO use $.each
		
		switch(action) {
			case 'download':
				var csv = convert(table);
				download(options.filename, csv);
				break;
			case 'output':
				var csv = convert(table);
				$(options.appendTo).append($('<pre>').text(csv));
				break;
		}
		
		return this;
	}
	
}/* (jQuery) */);
