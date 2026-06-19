let username = "Alex"
let initBalance = 1000
let amountAdd = 500
let amountSpent = 700

function updateWallet(name, balance, add, spent) {
    if(name == "guest") {
        return "Access Denied"
    } else {
        let updatedBalance = (balance + add) - spent;
        return (updatedBalance)
    }
}

console.log(updateWallet(username, initBalance, amountAdd, amountSpent))



const isGreater = updateWallet(username, initBalance, amountAdd, amountSpent) > 0 ? "greater than 0" : "lesser"
console.log(isGreater) 

console.log(typeof(updateWallet(username, initBalance, amountAdd, amountSpent)))