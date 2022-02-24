/*eslint-disable */
/* 
Given an expression array exp, write a program to examine whether the pairs and the of “{“, “}” are balanced in exp.
- Use a for .. of loop through the expression array
- push any right bracket onto a stack
- on a left bracket pop the stack and check that return value is a right bracket - if not, then not balanced
- if stack empty at end then balanced, else not balanced
Example:
Input: exp = [ "{", "}", "{", "{", "}", "}“ ]
Output: Balanced
Input: exp = [ "{", "{", "}", "{" ] Output: Not Balanced
 */

function examineArray(arr) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "{") {
            stack.push(arr[i])
        } else if (arr[i] === "}") {
            stack.pop();
            if (stack.pop() !== "{") {
                return "not balanced"
            }
        }
    }
    if (stack.length === 0) {
        return "balanced"
    }
}
let input1 = ["{", "}", "{", "{", "}", "}"];
let input2 = ["{", "{", "}", "{"];
console.log("expect: balance", examineArray(input1));
console.log("expect: not balanced", examineArray(input2));