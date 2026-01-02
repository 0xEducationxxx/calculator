var display = document.getElementById("input");
function appendValue(val) {
    if (display.value === "0") display.value = "";
    display.value += val;
}
function clearAll() {
    display.value = "0";
}
function calculate() {
    var exp = display.value;
    if (exp.endsWith('+') || exp.endsWith('-') || exp.endsWith('*') || exp.endsWith('/')) {
        display.value = "Error";
        return;
    }
    display.value = eval(exp);
}















