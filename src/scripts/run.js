import { evaluate } from "./evaluate";

const topScope = Object.create(null);

topScope.true = true;
topScope.false = false;

for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
  topScope[op] = Function("a, b", `return a ${op} b;`);
}
let printValues = [];
topScope.print = (value) => {
  console.log(value);
  printValues.push(value);
  return value;
};

topScope.array = (...values) => values;

topScope.length = (arr) => arr.length;

topScope.element = (arr, ind) => {
  if(ind >= arr.length){
    throw new Error("Array index out of bounds!!!"); 
  }
  return arr[ind];
}

export const run = (parseTree) => {
  printValues = [];
  const res = evaluate(parseTree, Object.create(topScope));
  // console.log(res);
  const printValuesString = printValues.join("\n");
  // console.log(printValuesString);
  return printValuesString;
}

