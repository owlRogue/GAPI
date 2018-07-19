// Push Data to table:
function renderTable(tableData) {
    $('#input-filters').removeClass('hide');

    const table = document.getElementById("tableBody");
    const tableHead = document.getElementById("headerRow");

    tableData.forEach((data, i) => {
        if (i === 0) {
            for (const titleItem of data) {
                tableHead.insertCell().append(titleItem);
            }

        } else {
            const row = table.insertRow();
            for (const dataItem of data) {
                row.insertCell().append(dataItem);
            }
        }

    });

    // Assign classes to arrays:
    const dimension = ['date range', 'date interval', 'location: most recent', 'manager: most recent', 'position: most recent', 'supervisor: most recent', 'supervisor: historical', 'agent name', 'agent email'];
    const formattedmetric = ['7 day call fcr', 'agent ease', 'replacement rate', 'aux %', 'aht', 'deltacast %', 'replacements and oneoffs per unique tickets updated by updater'];
    const extrametrics = [];
    const classNames = [];
    const idNames = [];
    let fieldType = 'indextitle';
    let hyph;
    let cleaned;

    let headerCell$ = $('thead td'); // console.log(headerCell$);
    // let bodyCell$ = $('tbody td'); // console.log(bodyCell$);
    // let bodyRow$ = $('tbody tr'); // console.log(bodyRow$);
    let searchKey$ = $('.search-key'); // console.log(searchKey$);
    // let input$ = $('input'); // console.log(input$);


    $(headerCell$).each(function (i) {
        const headers = $('thead td');
        const celldata = this.innerHTML;

        $(headers[i]).attr("row", "0");
        $(headers[i]).attr("name", celldata);
        $(headers[i]).addClass('indextitle');

        if (dimension.includes(celldata)) {
            fieldType = 'dimension';

        } else if (formattedmetric.includes(celldata)) {
            fieldType = 'formatted-metric';

        } else {
            $(this).addClass('extrametric')
            fieldType = 'extrametric'
            extrametrics.push(celldata);
        };
        $(headers[i]).attr("fieldtype", fieldType);


        // Assign metric title, data-type, and column headers and cells:
        cleaned = $(this).text()
            .replace(/[%:-]/g, '')
            .trim()
            .replace(/ /g, '');
        idNames.push(cleaned[i]);
        $(headers[i]).attr("cleaned-name", cleaned);

        hyph = $(this).text()
            .replace(/[%:]/g, '')
            .trim()
            .replace(/ /g, '-');
        $(headers[i]).attr("hyph", hyph);

        classNames.push(hyph[i]);
        $(this).addClass(hyph +
            ' ' + fieldType +
            ' ' + i);

        // ENABLE NEXT LINE IN ORDER TO ALSO TAG ROWS:
        startCol = i + 1;
        $('tbody td:nth-child(' + startCol + ')').addClass(hyph +
            ' ' +
            fieldType +
            ' ' + i);

    });
    // console.log("These metrics do not have conditional formatting rules: " + extrametrics);
    // console.log(extrametrics);

    // Call sortTable function to sort column on header click:
    const cells = $('thead').find('td');
    cells.each(function (i) {
        cells[i].onclick = (function (n) {
            return function () {
                sortTable(n);
            };
        })(i);
    });

    renderDownloadButton();
    renderFilters();

    const downloadButton = $('<button>')
        .addClass('download-button')
        .appendTo('.navbar')
        .attr('id', 'downloadButton')
        // .attr('onclick', $('#theTable').table2csv())
        .text('download CSV');

    $('.download-button').on("click", function callTable() {
        $('#theTable').table2csv()
    });
};

// ERROR CHECK FEATURE: logs file loaded to console
logFile();