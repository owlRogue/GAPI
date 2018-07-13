// Conditional formatting class setting:
const KPI = [];
let KPIs = [];
let KPICondition = [];
let KPIOperator = [];
let KPITarget = [];
let KPIValueParams = [];
let KPITitle = [];
console.log(KPICondition,
    KPIOperator,
    KPITarget,
    KPIValueParams,
    KPITitle)
// currentCondition;
// currentOperator;
// currentTarget;
// currentValueParams;
// currentTitle;
console.log(fcr);
console.log("fcr conditions: " + fcr.condition);
// console.log("kpi conditions: "+KPI.condition); // CANNOT READ
console.log(setup[0].className + " conditions: " + setup[0].condition);
console.log("settings: " + settings);

function conditionAssignment() {
    for (i = 0; i < setup.length; i++) {
        KPIs = setup[i];
        KPICondition = KPIs.condition;
        KPIOperator = KPIs.operator;
        KPITarget = KPIs.target;
        KPIValueParams = KPIs.valueParams;
        KPITitle = KPIs.className;
        console.log(KPIs);
        // KPI.push(KPIs);
    }
};
conditionAssignment();

const formatMe = $('.formatted-metric');
for (i = 0; i < formatMe.length; i++) {
    const class1 = formatMe[i].classList.item(0)
    console.log(class1)
    const cellText = this.innerHTML;
    KPI;
    // $(td)

setup.

    $('tbody td').each(function (i) {
        if (($('tbody td').hasClass(classNames[i])) &&
            (classNames.includes(aht.className))) {
            KPI = className.parent();
            console.log(KPI);
            console.log(className.parent());
            console.log("KPI: " + KPI);
        } else {
        }
    });
}
// function currentKPIs (condition, operator, target, value_Params, title) {
//     currentKPIs.condition = currentCondition,
//     currentKPIs.operator = currentOperator,
//     currentKPIs.target = currentTarget,
//     currentKPIs.value_Params = currentValueParams,
//     currentKPIs.title = currentTitle
// };
// currentKPIs()
// console.log(currentKPIs)
// // Sets condition logic:

//         // const cellText = this.innerHTML;
function testingCondition() {
  let formattedCell$ = new Array($('.formatted-metric'))
  console.log('formattedCell$: '+ formattedCell$)
  console.log(formattedCell$);}; testingCondition();
//     const cellText = $(this).text();
//     console.log("cellText: " + cellText)
//         const noComma = cellText.replace(/\,/g, '');
//             cellNum = parseFloat(noComma);

// const compareFirstValue = (cellText + operator[0] + value_Params[0]);
// const compareSecondValue = (cellText + currentOperator[1] + value_Params[1]);
// console.log('compareFirstValue: ' + compareFirstValue)
// console.log('compareSecondValue: '+ compareSecondValue)
// const compareThirdValue = (cellText + currentOperator[1] + currentvalueParams[2]);
// const compareFourthValue = (cellText + currentOperator[1] + currentvalueParams[3]);
// const compareFifthValue = (cellText + currentOperator[1] + currentvalueParams[4]);
// if (compareFirstValue) {
// console.log('first target: '+target[0]);
//         };
// }
// console.log(cellText + currentOperator[0] + currentvalueParams[0]);
// testingCondition();