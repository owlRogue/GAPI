function renderDownloadButton(table) {

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