Memory Table
Keyword	Global	Function Scope	Block Scope
var	     ✅	      ✅	            ❌//it ignores block
let   	 ✅	      ✅         	✅
const	 ✅	      ✅	            ✅

Why is let preferred over var?

Based on today's lesson, here's the answer:

var
❌ Not block scoped
❌ Can accidentally leak outside {} blocks
❌ Easier to introduce bugs in larger programs
let
✅ Block scoped
✅ Variables stay only where they're needed
✅ Makes code easier to understand and maintain

                Type	Hoisted?	Can use before declaration?
                var	    ✅ Yes	    ✅ Yes (value is undefined)
                let	    ✅ Yes	    ❌ No (TDZ)
                const	✅ Yes	    ❌ No (TDZ)
Function Declaration	✅ Yes	    ✅ Yes
Function Expression	 Variable rules apply	❌ Usually No

What is the Temporal Dead Zone (TDZ)?

The TDZ is the period between:

The variable entering scope.
The line where it is declared.

Example:

console.log(age);

let age = 23;

Between the start of the scope and let age = 23;, age exists but cannot be accessed.

That's the TDZ.