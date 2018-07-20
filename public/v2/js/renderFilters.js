function renderFilters() {
    console.log("render filters included");
    // Generate filters:
    const dimensionDiv = $('#dimension-filters');
    const metricDiv = $('#metric-filters');
    const inputDiv = $('#input-filters');
    
    const index = $('.indextitle');
    
    let searchkey = $('.search-key'); // console.log(searchKey$);
    const dimensionFilter = $('input.dimension');
    
    const formattedFilter = $('input.formatted');
    const extraMetricFilter = $('input.extrametric');

    $(index).each(function (i) {
        var inputs = $('<input>')
            .attr('type', 'text')
            .addClass('search-key')
            .appendTo(inputDiv)
            .attr('name', $(this).text())
            .attr('id', 'tableInput' + [i])
            .attr('onkeyup', 'searchAll()')
            .attr('placeholder', 'search by ' + $(this).text().replace(/[%:]/g, '').trim())
            .addClass($(this).text().replace(/[%: ]/g, '').trim() + '-filter ' + '.filter')
            .addClass($(this).text().replace(/[%:]/g, '').replace(/[ ]/g, '-').trim());
        // .addClass(fieldType);

        // var placeholder = $(inputs).attr('placeholder')
        // console.log(placeholder);

    });

    console.log(searchkey);
    
    // formattedFilter.appendTo(metricDiv);
    // or formatted
    // extrametric
    // calculated-field
    // then also assign that class to the input field.

    // these

    // function () {
    //     if (dimension.includes())
    // }

    // $(formattedFilter).each(function () {
    // extraMetricFilter.appendTo(metricDiv);
    // })

    // $(searchkey).each(function (i) {
    //     var inputField = $('input')

    //     // if (inputField.hasClass('dimension')) {
    //     //     searchKey.addClass('dimension')
    //     //     .appendTo('#input-filters')
    //     // }
    // });

    //    $(dimensionFilter).each(function () {
    //    searchKey$.appendTo(dimensionDiv);
    //    });



    // .appendTo(metricDiv);

    // $(inputs).appendTo(dimension$);
    // $(dimension$).appendTo(dimensionDiv);

// });

//////////////////// DEBUGGING ZONE:  //////////////////////////////////////////////////////////////


// console.log("dimension div is: "+dimensionDiv);

};


// ERROR CHECK FEATURE: logs file loaded to console
logFile();