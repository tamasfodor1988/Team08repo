"use strict";
exports.__esModule = true;
function TeglalapKeruletTeruletEljaras(a, b) {
    var kerulet = (a + b) * 2;
    var terulet = a * b;
    document.write("<br>A(z) ".concat(a, " \u00E9s ").concat(b, " oldal\u00FA t\u00E9glalap ker\u00FClete:").concat(kerulet, "<br>"));
    document.write("A(z) ".concat(a, " \u00E9s ").concat(b, " oldal\u00FA t\u00E9glalap ter\u00FClete:").concat(terulet, "<br>"));
}
//ParosE függvény
//Szám bemeneti paraméter
//Logikai értékkel kell visszatérnie
function ParosE(a) {
    if (a % 2 == 0)
        return true;
    else
        return false;
}
//Prímszám generátor
//Határérték bemeneti paraméter(hatar1, hatar2)
//Egész szám értékkel térjen vissza, ami egy prímszám!
function PrimGenerator(hatarEgy, hatarKetto) {
    var also;
    var felso;
    if (hatarEgy < hatarKetto) {
        also = hatarEgy;
        felso = hatarKetto;
    }
    else {
        also = hatarKetto;
        felso = hatarEgy;
    }
    var probalkozasokSzama = 0;
    var sikeresGeneralas = false;
    var generaltSzam;
    do {
        generaltSzam = Math.round(Math.random() * (felso - also) + also);
        probalkozasokSzama++;
        var oszto = 0;
        for (var i = 1; i <= generaltSzam; i++) {
            if (generaltSzam % i == 0) {
                oszto++;
            }
        }
        if (oszto == 2) {
            sikeresGeneralas = true;
        }
    } while (sikeresGeneralas == false && probalkozasokSzama < 100);
    return generaltSzam;
}
//Szorgalmi
// Old meg a téglalap kerület terület függvényt Tuple típusú visszatérési értékkel!
function TeglalapKeruletTeruletTuple(a, b) {
    return [(a + b) * 2, a * b];
}
//Univerzális Tömb generátor, TypeScript-ben
function TombGenerator(meret, hatar1, hatar2) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        var generaltSzam = Math.round(Math.random() * (hatar2 - hatar1)) + hatar1;
        generaltTomb.push(generaltSzam);
    }
    return generaltTomb;
}
//Összegzés tétele TypeScript-ben
function OsszegzesTetele(a) {
    var osszeg = 0;
    for (var i = 0; i < a.length; i++) {
        osszeg += a[i];
    }
    return osszeg;
}
