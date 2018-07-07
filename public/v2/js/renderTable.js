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
        const dimensionDiv$ = $('#dimension-filters');
        const metricDiv$ = $('#metric-filters');
        const classNames = [];
        const idNames = [];
        let fieldType = 'indextitle';
        let hyph;
        let cleaned;

        let headerCell$ = $('thead td'); // console.log(headerCell$);
        // let bodyCell$ = $('tbody td'); // console.log(bodyCell$);
        // let bodyRow$ = $('tbody tr'); // console.log(bodyRow$);
        let searchKey$ = $('.search-key'); // console.log(searchKey$);
        // let input$; // console.log(input$);

        $(headerCell$).each(function (i) {

            const headers = $('thead td')
                .addClass('indextitle')
            if (dimension.includes(this.innerHTML)) {
                fieldType = 'dimension';
            } else if (formattedmetric.includes(this.innerHTML)) {
                fieldType = 'formatted-metric';
            } else {
                fieldType = this.innerHTML;
                extrametrics.push(fieldType);
                extrametric = 'extrametric';
            };

            // Assign metric title, data-type, and column headers and cells:
            cleaned = $(this).text()
                .replace(/[%:-]/g, '')
                .trim()
                .replace(/ /g, '');
            idNames.push(cleaned[i]);

            hyph = $(this).text()
                .replace(/[%:]/g, '')
                .trim()
                .replace(/ /g, '-');

            classNames.push(hyph[i]);
            $(this).addClass(hyph + ' ' + fieldType + ' ' + i);
            // $('tbody td:nth-child(' + startCol + ')').addClass(hyph + ' ' + fieldType + ' ' + i);

        });


        $(headerCell$).each(function (i) {
            const search = $('<input>')
                .addClass('search-key')
                .appendTo(dimensionDiv$)
                .attr('type', 'text')
                .attr('name', $(this).text())
                .attr('id', 'tableInput' + [i])
                .attr('placeholder', 'search by ' + $(this).text().replace(/[%:]/g, '').trim())
                .attr('onkeyup', 'searchAll()')
                .addClass($(this).text().replace(/[%: ]/g, '').trim() + 'Filter');
            // .addClass(fieldType)
            // .addClass(hyph);


            $(searchKey$).each(function (i) {
                const dimensionFilter$ = $('.dimension')
                $(dimensionFilter$).appendTo(dimensionDiv$);

                const metricFilter$ = $('.metric')
                $(metricFilter$).appendTo(metricDiv$);

                // const extrametricFilter = $('.extrametric')
                // $(extrametricFilter).appendTo(metricDiv$);

                // } else if (formattedmetric.includes(this.innerHTML)) {
                //     $(filter$).appendTo('#metric-filters');
                // } else {
                //     $(filter$).appendTo('#input-filters');
                // } if ($(filter).hasClass('metric-filter')){
                //         $(filter).appendTo(metricDiv$);
                // };
            });
        });

        $(headerCell$).each(function (i) {
            if ($(this).hasClass('extrametric')) {
                console.log(this.innerHTML); // ERROR CHECK COMPONENT // DO NOT DELETE <<<<< <<< <
            }
        });

    }; // END RENDER TABLE;