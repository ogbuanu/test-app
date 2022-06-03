const http = require("http")

function add(num1, num2, opr) {
    if (opr === "add") {
        return num1 + num2
    }
    if (opr === "subtract") {
        return num1 - num2
    }
    if (opr === "divide") {
        return num1 / num2
    }
    if (opr === "multiply") {
        return num1 * num2
    }
    return "enter opperation"
}
function sayHi() {
    return "hi"
}

module.exports = {
    add,
    sayHi
}