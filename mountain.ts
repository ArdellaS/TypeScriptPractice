interface mountain{
    name:string;
    height:number;
}

let mounts:mountain[] =[
    {name: "Kilimanjaro",  height: 19341},
    {name: "Everest",  height: 29029},
    {name: "Denali",  height: 20310},
]

function findTallestMountain(mount:mountain){
    var newHeight = 0;
    var tallest = "";
    if (mount.height > newHeight) {
        mount.height = newHeight;
        mount.name = tallest;
    
    }
    return tallest;
}

function tallest(){
    
}
mtArray(mts);

function mtArray (mt:mountain[]) {
    for(let m of mt) {
        findNameOfTallestMountain(m);
    }
}

