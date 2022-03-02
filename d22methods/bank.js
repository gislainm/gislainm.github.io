"use strict";
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.

*/
const bank = {
    transactionsDB: [],
};
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];

/**
 * 
 * @param {num} ids - customer's id
 * @param {num} amount - amount for transaction
 * @return {undef} - saves transaction
 */
bank.saveTransaction = function (ids, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === ids);
    customer.customerTransactions.push(amount);

};


/**
 * 
 * @param {num} ids - customer's id
 * @param {num} amount - withdraw amount
 * @returns {undef} - saves the withdraw to customer's transactions
 */
bank.debit = function (ids, amount) {
    if (this.getBalance(ids) > amount) {
        //customerData.customerTransactions.pus(-(amount));
        this.saveTransaction(ids, -amount);
    }

    /* make sure current balance is > amount */
    //IMPLEMENT THIS
};


/**
 * 
 * @param {num} ids - customer's id
 * @param {num} amount -  deposit amount
 * @return {undef} - saves deposit to customer's transactions
 */
bank.credit = function (ids, amount) {
    this.saveTransaction(ids, amount);
};

/**
 * 
 * @param {num} ids - customer's id 
 * @returns {num} - customer's balance
 */
bank.getBalance = function (ids) {
    let customerBalance = 0;
    const customer = bank.transactionsDB.find(customer => customer.customerId === ids);

    for (let i = 0; i < customer.customerTransactions.length; i++) {
        customerBalance += customer.customerTransactions[i];
    }
    return customerBalance;
    //IMPLEMENT THIS
};



/**
 * 
 * @returns {num} - total balance in the bank
 */
bank.bankBalance = function () {
    let balance = 0;
    for (let element of bank.transactionsDB) {
        for (let i = 0; i < element.customerTransactions.length; i++) {
            balance += element.customerTransactions[i];
        }
    }
    return balance;
    //IMPLEMENT THIS
};



/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = { bank }; //add all of your object names here that you need for the node mocha tests