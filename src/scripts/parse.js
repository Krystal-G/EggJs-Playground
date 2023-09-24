function trimSpace(string) {
  let firstNonWhitespace = string.match(/^(\s|#.*)*/);
  // console.log(firstNonWhitespace[0]);
  return string.slice(firstNonWhitespace[0].length);
}

function parseExpression(program) {
  program = trimSpace(program);
  let match, expr;

  if ((match = /^"([^"]*)"/.exec(program))) {
    expr = { type: "value", value: match[1] };
  } else if ((match = /^\d+\b/.exec(program))) {
    expr = { type: "value", value: Number(match[0]) };
  } else if ((match = /^[^\s(),#"]+/.exec(program))) {
    expr = { type: "word", name: match[0] };
  } else {
    throw new SyntaxError("Unexpected syntax : ", program);
  }
  // console.log(expr);
  return parseApply(expr, program.slice(match[0].length));
  // console.log(parsedApply.expr);
  // return parsedApply;
}

function parseApply(expr, program) {
  program = trimSpace(program);

  if (program[0] !== "(") {
    return { expr: expr, rest: program };
  }

  program = trimSpace(program.slice(1));
  expr = { type: "apply", operator: expr, args: [] };

  while (program[0] !== ")") {
    let arg = parseExpression(program);
    expr.args.push(arg.expr);
    program = trimSpace(arg.rest);
    if (program[0] === ",") {
      program = trimSpace(program.slice(1));
    } else if (program[0] !== ")") {
      throw new SyntaxError(`Expected ',' or ')', found ${program[0]}`);
    }
  }
  // console.log(expr);
  return parseApply(expr, program.slice(1));
}

export const parse = (program) => {
  let { expr, rest } = parseExpression(program);
  if (trimSpace(rest).length > 0) {
    throw new SyntaxError("Unexpected text after the program");
  }
  return expr;
}



