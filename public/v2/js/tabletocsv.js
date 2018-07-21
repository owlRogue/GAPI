var renderDownloadButton = table => {
    // duplicateDiv = $('<div id="duplicates">');

    // duplicateDiv.append(/* Append duplicate download buttons here */);
    // $(/* Sheet buttons listed here */).on('click', () => {
    //     duplicateDiv.empty();
    // });

    const downloadButton = $('<button>')
        .addClass('download-button')
        .appendTo('.navbar')
        .attr('id', 'downloadButton')
        // .attr('onclick', $('#theTable').table2csv())
        .text('download CSV');

    $('.download-button').on("click", callTable = () => {
        $('#theTable').table2csv();
    });
};

// ERROR CHECK FEATURE: logs file loaded to console
logFile();