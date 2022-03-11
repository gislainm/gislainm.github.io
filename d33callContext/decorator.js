"use strict";
/*eslint-disable*/
module.exports = { spy };

function spy(func) {
    return function (args) {
        let cache = new Map();
        cache.set(calls,[]);
        let result = func(arg1,arg2);
        cache.set(call,[arg1,arg2]);
        return result;
    }
}