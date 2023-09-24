import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Link, Typography } from "@mui/material";

function InfoBox({ open, onClose }) {
  const basicInfo = [
    "Everything is an expression in Egg. Even '+' or '-' which are operators in javascript are treated as expressions.",
    "Each expression in egg would be an object. Thus, it would contain a type property, which would describe the type of the expression.",
    "Type:- 'value' means strings or numbers.",
    "Type:- 'word' means names of variables",
    "Type:- 'apply' means applications, eg. if else blocks, while loops, etc.",
    "All apply expressions have additional operator and args property.",
    "Comment lines start with a '#' character",
  ];
  const basicSyntaxHeader = [
    "print",
    "define",
    "set",
    "if",
    "array",
    "length",
    "element",
    "do",
    "while",
    "func",
  ];
  const basicSyntaxExample = [
    "print('Hello World')",
    "define(x,10)",
    "set(x,11)",
    "if(<(x,5),print('small'), print('large'))",
    "define(arr, array(1,2,3))",
    "length(arr)",
    "element(arr, 0)",
    "do(define(arr, array(1,2,3)), print(element(arr, 0)))",
    "while(>(x,0), do(print(x), set(x, -(x,1))))",
    "func(a,b,print(+(a,b)))",
  ];
  const basicSyntaxDesc = [
    "Prints the given value onto the console",
    "Defines a variable with the given name and assigns it a value",
    "Changes the value of a previously declared variable",
    "Conditional statement. Takes 3 arguments - condition, expression to execute if true, expression to execute if false",
    "Creates an array with the specified elements",
    "Returns the length of an array",
    "Returns the element at specified index in array. Throws an error if index out of bounds",
    "Defines a block of code",
    "Defines a while loop with condition and a loop body",
    "Defines a function with arguments and a body. Arguments are separated by commas and the last expression is body",
  ];
  return (
    <Dialog
      open={open}
      onClose={onClose}
      style={{ overflowY: "auto", overflowX: "auto" }}
    >
      <DialogContent>
        <b>EggJs Playground</b> is a web based editor for a primitive
        programming language <b>Egg</b> built using javascript. Egg is featured
        as an example project in the book{" "}
        <Link href="https://eloquentjavascript.net/12_language.html">
          Eloquent Javascript
        </Link>{" "}
        by Marjin Haverbeke.
        <br></br>
        <br></br>
        <div>
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", textDecoration: "underline" }}
          >
            Some things to remember :-{" "}
          </Typography>
          <ul className="custom-bullet" style={{ paddingLeft: "10px" }}>
            {basicInfo.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{ marginTop: "3px", marginBottom: "3px" }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", textDecoration: "underline" }}
          >
            Basic Syntax :-{" "}
          </Typography>
          <ul className="custom-bullet" style={{ paddingLeft: "10px" }}>
            {basicSyntaxHeader.map((item, index) => {
              return (
                <div>
                  <li
                    key={index}
                    style={{ marginTop: "10px", marginBottom: "5px" }}
                  >
                    <b>{item}</b>
                  </li>
                  <ul className="custom-bullet" style={{ paddingLeft: "20px" }}>
                    <li>
                      <u>Description</u> :- {basicSyntaxDesc[index]}
                    </li>
                    <li>
                      <u>Example</u> :- <em>{basicSyntaxExample[index]}</em>
                    </li>
                  </ul>
                </div>
              );
            })}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default InfoBox;
