// // Logic to filter using .search-key filters:
function searchAll() {
    let trs, tds;
    const vlu = [];

    // Find all search filters:
    const searchKey$ = Array.from(document.getElementsByTagName(' tbody td '));
    console.log(searchKey$);

    // Get each value entered, upon keyUp:
    for (key in searchKey$) {
        var contents = $('#tableFilter'[key]);
        vlu.push(document.getElementById(searchKey$[key]).value); // does not return the values
        const searchVal = $(this).val();
        // const searchVal2 = document.getElementById(searchKeys[d]).value;
        console.log(contents);
        console.log(searchVal);
        console.log(searchVal2);
        // $(d).text(searchVal);
        // console.log($(searchKeys).innerHTML);
        // console.log($(searchKeys).value());
        // vlu.push((searchKey[d]).value());
        // let vluu = $(searchKeys).val();
        // console.log(vluu);
    };

    // // Create an array which records each table row.
    trs = Array.from($('tr td'));
    console.log(trs);

    // // For each table row, let tr = row.
    trs.forEach(function (tr, i) {

        let filters = [];
        vlu.forEach((filter, j) =>
            filters.push(filter.toUpperCase()));
        console.log(filters);

        // const testhere$ = new Array($('tr td')); // prints classes!
        const testhere$ = Array.from(document.getElementsByTagName('tr td'));
        console.log(testhere$); //
        testhere$.forEach(function(i) {

            // if (testhere$[2] && testhere$[3] && testhere$[4] && testhere$[5] && testhere$[6] && testhere$[7] && testhere$[8] && testhere$[9] && testhere$[10] && testhere$[11] && testhere$[12] && testhere$[13] && testhere$[14] && testhere$[15] && testhere$[16]) {
            if (testhere$) {
                for (let index in testhere$) {
                    if (testhere$.innerHTML.toUpperCase.indexOf(index[i]) > -1) {
                        tr.style.display = "";
                    } else {
                        tr.style.display = "none"
                    }
                }
            };
        });
    });
};


// // // // // // // // // // // // // // // // // // //
// // // // // PREVIOUSLY WORKING VERSION // // // // // 
// // // // // // // // // // // // // // // // // // //


// <!-- 
//     function searchAll() {
//         let table, trs, tds;
//         table = document.getElementById('tableBody');
//         trs = Array.from(table.getElementsByTagName('tr'));

//         const vlllu = 
//         ['tableInput1',
//         'tableInput2',
//         'tableInput3',
//         'tableInput4',
//         'tableInput5',
//         'tableInput6',
//         'tableInput7',
//         'tableInput8',
//         'tableInput9',
//         'tableInput10',
//         'tableInput11',
//         'tableInput12',
//         'tableInput13',
//         'tableInput14',
//         'tableInput15']
//         const vlu = [];
//         console.log(vlu);
//         for (d in vlllu) {
//             vlu.push(document.getElementById(vlllu[d]).value);
//         }

//         trs.forEach(function (tr, i) {

//             let filters = [];
//             vlu.forEach((filter, j) =>
//                 filters.push(filter.toUpperCase()));
//             // console.log(filters)

//             const testhere = tr.getElementsByTagName("td");

//             if (testhere[2] && testhere[3] && testhere[4] && testhere[5] && testhere[6] && testhere[7] && testhere[8] && testhere[9] && testhere[10] && testhere[11] && testhere[12] && testhere[13] && testhere[14] && testhere[15] && testhere[16]) {
//                 if (testhere[2].innerHTML.toUpperCase().indexOf(filters[0]) > -1 &&
//                     testhere[3].innerHTML.toUpperCase().indexOf(filters[1]) > -1 &&
//                     testhere[4].innerHTML.toUpperCase().indexOf(filters[2]) > -1 &&
//                     testhere[5].innerHTML.toUpperCase().indexOf(filters[3]) > -1 &&
//                     testhere[6].innerHTML.toUpperCase().indexOf(filters[4]) > -1 &&
//                     testhere[7].innerHTML.toUpperCase().indexOf(filters[5]) > -1 &&
//                     testhere[8].innerHTML.toUpperCase().indexOf(filters[6]) > -1 &&
//                     testhere[9].innerHTML.toUpperCase().indexOf(filters[7]) > -1 &&
//                     testhere[10].innerHTML.toUpperCase().indexOf(filters[8]) > -1 &&
//                     testhere[11].innerHTML.toUpperCase().indexOf(filters[9]) > -1 &&
//                     testhere[12].innerHTML.toUpperCase().indexOf(filters[10]) > -1 &&
//                     testhere[13].innerHTML.toUpperCase().indexOf(filters[11]) > -1 &&
//                     testhere[14].innerHTML.toUpperCase().indexOf(filters[12]) > -1 &&
//                     testhere[15].innerHTML.toUpperCase().indexOf(filters[13]) > -1 &&
//                     testhere[16].innerHTML.toUpperCase().indexOf(filters[14]) > -1) {
//                     tr.style.display = "";
//                 } else {
//                     tr.style.display = "none"
//                 }
//             }
//         });
//     } -->



// ERROR CHECK FEATURE: logs file loaded to console
logFile();