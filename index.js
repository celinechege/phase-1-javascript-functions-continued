// code your solution here
// define saturdayFun function declaration
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// define mondayWork function expression
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// define wrapAdjective function
function wrapAdjective(highlight = "*") {
  return function(adjective) {
    return `You are ${highlight}${adjective}${highlight}!`;
  };
}

// test the functions
console.log(saturdayFun()); // This Saturday, I want to roller-skate!
console.log(saturdayFun("bake a cake")); // This Saturday, I want to bake a cake!
console.log(mondayWork()); // This Monday, I will go to the office.
console.log(mondayWork("work from home")); // This Monday, I will work from home.
const wrapWithStars = wrapAdjective("*");
console.log(wrapWithStars("awesome")); // You are *awesome*!
const wrapWithBars = wrapAdjective("||");
console.log(wrapWithBars("fantastic")); // You are ||fantastic||!

