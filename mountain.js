var mts = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
function findNameOfTallestMountain(mount) {
    var newHeight = 0;
    var tallest = "";
    if (mount.height > newHeight) {
        mount.height = newHeight;
    }
}
mountainArray(mts);
function mountainArray(mt) {
    for (var _i = 0, mt_1 = mt; _i < mt_1.length; _i++) {
        var m = mt_1[_i];
        findNameOfTallestMountain(m);
    }
}
