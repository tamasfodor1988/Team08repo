

function DiakInfo(nev: string, csoport: number, tipus: boolean) {
    if (tipus)
        document.write(nev + " [Team0" + csoport + "] - Junior Frontend");
    else document.write(nev + " [Team0" + csoport + "] - Webprogramozó");
}

function SzovegesErtekeles(jegy: number): [string, string] {
    if (jegy == 5)
        return ["Példás", "Példás"];
    else if (jegy == 4)
        return ["Jó", "Jó"];
    else if (jegy == 3)
        return ["Változó", ";Változó"];
    else if (jegy == 2)
        return ["Hanyag", "Rossz"];
}
function HarommalOszthatokSzama(a: Array<number>): number {
    let OsztokSzama: number = 0;
    for (let i: number = 0; i < a.length; i++) {
        if (a[i] % 3 == 0) {
            OsztokSzama++;
        }

    }
    return OsztokSzama;
}

function Nyeroszamok(mennyiseg: number, alsoHatar: number, felsoHatar: number): Array<number> {
    let generaltSzamok: Array<number> = [];
    for (let i = 0; i < mennyiseg; i++) {
        let tartalmazE: boolean = false;
        generaltSzamok[i] = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
        for (let j = 0; j < generaltSzamok.length; j++) {
            if (generaltSzamok[i] == generaltSzamok[j]) {
                tartalmazE = true;
            }
        }
        if (tartalmazE == true) {
            generaltSzamok[i] = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
        }
    }
    return generaltSzamok;
}
