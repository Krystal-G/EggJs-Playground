## EggJs Playground 
**EggJs Playground** is a web based editor for a primitive programming language **Egg** built using Javascript. Egg is featured as an example project in the book  [Eloquent Javascript](https://eloquentjavascript.net/12_language.html)  by Marjin Haverbeke.


### Screenshots 
---
![Main](https://github.com/Krystal-G/EggJs-Playground/blob/main/public/Screnshots/Main.png)
![Code](https://github.com/Krystal-G/EggJs-Playground/blob/main/public/Screnshots/Code.png)
![ParseTree](https://github.com/Krystal-G/EggJs-Playground/blob/main/public/Screnshots/ParseTree.png)
![Parse Error](https://github.com/Krystal-G/EggJs-Playground/blob/main/public/Screnshots/Parse%20Error.png)
![Compile Error](https://github.com/Krystal-G/EggJs-Playground/blob/main/public/Screnshots/Compile%20Error.png)




### Some Things to Remember :
---
* Everything is an expression in Egg. Even '+' or '-' which are operators in Javascript are treated as expressions.
* Each expression in Egg would be an object. Thus, it would contain a type property, which would describe the type of the expression.
* Type:- 'value' means strings or numbers.
* Type:- 'word' means names of variables
* Type:- 'apply' means applications, eg. if else blocks, while loops, etc.
* All apply expressions have additional operator and args property.
* Comment lines start with a '#' character

### Basic Syntax :
--- 
* **print**
	* <ins>Description</ins>  :-  Prints the given value onto the console
	* <ins>Example</ins> :-  _print('Hello World')_

* **define**
	* <ins>Description</ins>  :-  Defines a variable with the given name and assigns it a value
	* <ins>Example</ins>  :-  _define(x,10)_

* **set**
	* <ins>Description</ins>  :-  Changes the value of a previously declared variable
	* <ins>Example</ins>  :-  _set(x,11)_

* **if**
	* <ins>Description</ins> :-  Conditional statement. Takes 3 arguments - condition, expression to execute if true, expression to execute if false
	* <ins>Example</ins>  :-  _if(<(x,5),print('small'), print('large'))_

* **array**
	* <ins>Description</ins>  :-  Creates an array with the specified elements
	* <ins>Example</ins>  :-  _define(arr, array(1,2,3))_

* **length**
	* <ins>Description</ins>  :-  Returns the length of an array
	* <ins>Example</ins>  :-  _length(arr)_

* **element**
	* <ins>Description</ins>  :-  Returns the element at specified index in array. Throws an error if index out of bounds
	* <ins>Example</ins>  :-  _element(arr, 0)_

* **do**
	* <ins>Description</ins>  :-  Defines a block of code.
	* <ins>Example</ins>  :-  _do(define(arr, array(1,2,3)), print(element(arr, 0)))_

* **while**
	* <ins>Description</ins> :-  Defines a while loop with condition and a loop body
	* <ins>Example</ins>  :-  _while(>(x,0), do(print(x), set(x, -(x,1))))_

* **func**
	* <ins>Description</ins>  :-  Defines a function with arguments and a body. Arguments are separated by commas and the last expression is body
	* <ins>Example</ins>  :-  _func(a,b,print(+(a,b)))_


