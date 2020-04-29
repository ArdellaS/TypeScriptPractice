var items = [
    { name: "beans", price: 1.99 },
    { name: "banana", price: 0.6 },
    { name: "potato", price: 4.99 },
];
function calcAverageProductPrice(p) {
    var amount = total(items);
    console.log("" + (amount / p.length).toPrecision(2));
}
function total(num) {
    var total = 0;
    var a = 0;
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var n = num_1[_i];
        a = n.price;
        total += a;
    }
    return total;
}
