const cash = document.getElementsByClassName("cash");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

const cstm = document.getElementById("cstm");
const plp = document.getElementById("plp");
const bill = document.getElementById("bill");

function rest() {
    for(let i = 0; i < cash.length; i++) {
        cash[i].innerHTML = "$0.00";
    };
};

function countO(a) {
    let zi = ((bill.value / 100) * a).toFixed(2);
    cash[0].innerHTML = "$" + zi;
    let pp = (zi / plp.value);
    cash[1].innerHTML = "$" + pp.toFixed(2);
    if (cash[1].innerHTML === "$NaN") {
        cash[1].innerHTML = "$" + zi;
    };
    if (cash[1].innerHTML === "$Infinity") {
        cash[1].innerHTML = "$" + zi;
    };
};

function countC() {
    let zi = ((bill.value / 100) * cstm.value).toFixed(2);
    cash[0].innerHTML = "$" + zi;
    let pp = (zi / plp.value);
    cash[1].innerHTML = "$" + pp.toFixed(2);
    if (cash[1].innerHTML === "$NaN") {
        cash[1].innerHTML = "$" + zi;
    };
    if (cash[1].innerHTML === "$Infinity") {
        cash[1].innerHTML = "$" + zi;
    };
};

one.addEventListener("click", (event) => { 
    countO(5);
});

two.addEventListener("click", (event) => { 
    countO(10);
});

three.addEventListener("click", (event) => { 
    countO(15);
});

four.addEventListener("click", (event) => { 
    countO(25);
});

five.addEventListener("click", (event) => { 
    countO(50);
});

cstm.addEventListener("change", countC);