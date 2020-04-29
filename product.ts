interface product{
    name:string;
    price:number;
}

let items:product[] =[
    {name: "beans",  price: 1.99},
    {name: "banana",  price: 0.6},
    {name: "potato",  price: 4.99},
]

function calcAverageProductPrice(p:product[]){
 let amount = total(items);

    console.log(
     `${(amount/p.length).toPrecision(2)}`);
}
function total(num:product[]):number {
     
​   let total:number = 0;
let a:number = 0;
    for(let n of num) {
       a = n.price;
        total += a;
        
    }
    return total;
}
