console.log("2: conditionalSettings.js loaded");

// let KPI;
let currentCondition;
let currentOperator;
let currentTarget;
let currentValueParams;
let currentTitle;

var settings = [
  (conditions = {
    default: ["1", "2", "3", "4", "5"],
    bool: ["pass", "fail"],
    custom: []
  }),
  (operators = {
    op1: [">=", "<", ">"],
    op2: ["<=", ">", "<"],
    custom: []
  }),
  (target = {
    high: ["exceptional", "effective", "achieves", "NI", "unacceptable"],
    low: ["unacceptable", "NI", "achieves", "effective", "exceptional"],
    bool: ["pass", "fail"]
  }),

  (valueParam = {
    vP: []
  })
];

var setup = [
  (fcr = {
    condition: conditions["default"],
    operator: operators["op1"],
    target: "high",
    valueParams: [90, 80, 70, 60],
    className: "7-day-call-fcr"
  }),

  (agent_ease = {
    condition: conditions["default"],
    operator: operators["op1"],
    target: "high",
    valueParams: [9.8, 9.3, 8.8, 7.0],
    className: "agent-ease"
  }),

  (replacement_rate = {
    condition: conditions["default"],
    operator: operators["op1"],
    target: "low",
    valueParams: [8.8, 7.3, 6.8, 5.0],
    className: "replacement-rate"
  }),

  (aux = {
    condition: conditions["default"],
    operator: operators["op1"],
    target: "low",
    valueParams: [40, 30, 20, 17],
    className: "aux"
  }),

  (aht = {
    condition: conditions["default"],
    operator: operators["op1"],
    target: "low",
    valueParams: [600, 720, 840, 1050],
    className: "aht"
  }),

  (deltacast = {
    condition: conditions["bool"],
    operator: operators["op1"],
    target: "bool",
    valueParams: [99.0],
    className: "deltacast"
  })
];

// commit to DB?

// Sets conditional logic:

// function (variableTarget {
// });

// function (nextCondition {
// const currentConditions = (currentCondition, currentOperator, currentTarget, currentValueParams, currentTitle);
// var nextCondition = new nextCondition(Condition, Operator, Target, ValueParams, Title);
// currentConditions.changeCondition(nextCondition);
// });
