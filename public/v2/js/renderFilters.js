function renderFilters() {
    console.log("render filters included");
    // Generate filters:
    const dimensionDiv = $('#dimension-filters');
    // console.log("dimension div exists: " + Object.keys(dimensionDiv));
    const metricDiv = $('#metric-filters');

    let input$; // console.log(input$);
    // let searchKey$ = $('.search-key'); // console.log(searchKey$);

    const index = $('.indextitle');
    const dimension$ = $('.dimension');
    const formatted$ = $('.formatted-metric');

    $(index).each(function (i) {
        var inputs = $('<input>')
            .attr('type', 'text')
            .addClass('search-key')
            .appendTo('#input-filters')
            .attr('name', $(this).text())
            .attr('id', 'tableInput' + [i])
            .attr('onkeyup', 'searchAll()')
            .attr('placeholder', 'search by ' + $(this).text().replace(/[%:]/g, '').trim())
            .addClass($(this).text().replace(/[%: ]/g, '').trim() + '-filter ' + '.filter')
            .addClass($(this).text().replace(/[%:]/g, '').replace(/[ ]/g, '-').trim());
            // .addClass(fieldType);

                       

            // $(searchKey$).each(function (j) {
            //     input = $('input')
            //     if ()

            // function () {
            //     if (dimension.includes())
            // }

            // $(formatted$).each(function () {
            //     $(inputs).appendTo(metricDiv);
            // })
        
            // $(dimension$).each(function () {
            //     $(inputs).appendTo(dimensionDiv);
            // });

            // .appendTo(metricDiv);

        // $(inputs).appendTo(dimension$);
        // $(dimension$).appendTo(dimensionDiv);

    });

    //////////////////// DEBUGGING ZONE:  //////////////////////////////////////////////////////////////


    // console.log("dimension div is: "+dimensionDiv);

};


// ERROR CHECK FEATURE: logs file loaded to console
logFile();