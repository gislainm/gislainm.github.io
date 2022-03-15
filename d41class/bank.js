"use strict";
/*eslint-disable */
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */

/*
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount;
*/

class Bank {
    constructor() {
        this._accounts = [];
    }
    addAccount() {
        let accNum = Bank.nextNumber;
        let newAccount = new Account(accNum);
        this._accounts.push(newAccount)
        Bank.nextNumber++;
        return accNum;


    }
    addSavingsAccount(interest) {
        let accNum = Bank.nextNumber;
        let newSavings = new SavingsAccount(accNum, interest);
        this._accounts.push(newSavings);
        Bank.nextNumber++;
        return accNum;
    }
    addCheckingAccount(overdraft) {
        let accNum = Bank.nextNumber;
        let newChecking = new CheckingAccount(accNum, overdraft);
        this._accounts.push(newChecking);
        Bank.nextNumber++;
        return accNum;
    }
    static nextNumber = 1;
    closeAccount(number) {
        const remAccount = this._accounts.find(account => account.getNumber() === number)
        const accountIndex = this._accounts.indexOf(remAccount);
        this._accounts.splice(accountIndex, 1);
        return `Account ${number} has been closed`
    }
    accountReport() {
        let report = "";
        for (let i = 0; i < this._accounts.length; i++) {
            report += this._accounts[i].toString() + "\n"
            // if ("_overdraft" in this._accounts[i]) {
            //     report = report + `CheckingAccount ${this._accounts[i].getNumber()}: balance: ${this._accounts[i].getBalance()} overdraft limit: ${this._accounts[i].getOverdraft()}\n`
            // } else if ("_interest" in this._accounts[i]) {
            //     report = report + `SavingsAccount ${this._accounts[i].getNumber()}: balance: ${this._accounts[i].getBalance()} interest: ${this._accounts[i].getInterest()}\n`
            // }
        }
        return report;
    }
    endOfMonth() {
        let monthlyReport = "";
        for (let i = 0; i < this._accounts.length; i++) {
            if (i == this._accounts.length - 1) {
                monthlyReport += `${this._accounts[i].endOfMonth()}`
            } else {
                monthlyReport += `${this._accounts[i].endOfMonth()}\n`
            }
        }
        return monthlyReport;
    }

}



//`SavingsAccount ${this._accounts[0].getNumber()}: balance: ${this._accounts[0].getBalance()} interest: ${this._accounts[0].getInterest()}\nCheckingAccount ${this._accounts[1].getNumber()}: balance: ${this._accounts[1].getBalance()} overdraft limit: ${this._accounts[1].getOverdraft()}\n`






/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;
