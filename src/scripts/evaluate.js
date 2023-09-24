const keywords = Object.create(null);

keywords.if = (args, scope) => {
  if (args.length !== 3) {
    throw new SyntaxError("Invalid number of arguments to if");
  } else if (evaluate(args[0], scope) !== false) {
    return evaluate(args[1], scope);
  } else {
    return evaluate(args[2], scope);
  }
};

keywords.while = (args, scope) => {
  if (args.length !== 2) {
    throw new SyntaxError("Invalid number of arguments to while");
  }
  while (evaluate(args[0], scope) !== false) {
    evaluate(args[1], scope);
  }
};

keywords.do = (args, scope) => {
  let value = false;
  for (let arg of args) {
    value = evaluate(arg, scope);
  }
  return value;
};

keywords.define = (args, scope) => {
  if (args.length !== 2 || args[0].type !== "word") {
    throw new SyntaxError("Incorrect use of define");
  }
  let value = evaluate(args[1], scope);
  scope[args[0].name] = value;
  // console.log(topScope);
  return value;
};

keywords.set = (args,scope) => {
  if(args.length !== 2 || args[0].type !== "word"){
    throw new SyntaxError("Incorrect use of deifine");
  }
  let value = evaluate(args[1],scope);

  for(let env = scope; env; env = Object.getPrototypeOf(env)){
    if(Object.prototype.hasOwnProperty.call(env,args[0].name)){
      env[args[0].name] = value;
      return value;
    }
  }

  throw new ReferenceError(`Undefined binding ${args[0].name}`)
}

keywords.func = (args, scope) => {
  if (!args.length) {
    throw new SyntaxError("No function body specified");
  }
  let body = args[args.length - 1];
  let params = args.slice(0, args.length - 1).map((expr) => {
    if (expr.type !== "word") {
      throw new SyntaxError("Parameter names must be words");
    }
    return expr.name;
  });

  return function () {
    if (arguments.length !== params.length) {
      throw new TypeError("Wrong number of arguments");
    }
    let localScope = Object.create(scope);
    for (let i = 0; i < arguments.length; i++) {
      localScope[params[i]] = arguments[i];
    }
    return evaluate(body, localScope);
  };
};

export const evaluate = (expr, scope) => {
  if (expr.type === "value") {
    return expr.value;
  } else if (expr.type === "word") {
    if (expr.name in scope) {
      // console.log(scope[expr.name]);
      return scope[expr.name];
    } else {
      throw new ReferenceError(`Undefined binding ${expr.name}`);
    }
  } else if (expr.type === "apply") {
    let { operator, args } = expr;
    // console.log(operator);
    if (operator.type === "word" && operator.name in keywords) {
      return keywords[operator.name](args, scope);
    } else {
      let op = evaluate(operator, scope);
      if (typeof op == "function") {
        return op(...args.map((arg) => evaluate(arg, scope)));
      } else {
        throw new TypeError(`Applying a non-function: ${op}`);
      }
    }
  }
}



