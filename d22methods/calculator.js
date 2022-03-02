"use strict";
/**
 * @returns {calculator} 
 */
const calculator = {
    setValues: function (aaa, bbb) {
        this.aaa = aaa,
            this.bbb = bbb;
    },
    sum: function () {
        return (this.aaa + this.bbb);
    },
    mul: function () {
        return (this.aaa * this.bbb);
    }

};  // implement this








/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = { calculator }; //add all of your object names here that you need for the node mocha tests