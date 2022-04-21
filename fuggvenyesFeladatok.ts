export{};

function TeglalapKeruletTeruletEljaras(a:number, b:number):void{
    let kerulet=(a+b)*2;
    let terulet=a*b;
    document.write(`<br>A(z) ${a} és ${b} oldalú téglalap kerülete:${kerulet}<br>`);
    document.write(`A(z) ${a} és ${b} oldalú téglalap területe:${terulet}<br>`);
}

//ParosE függvény
//Szám bemeneti paraméter
//Logikai értékkel kell visszatérnie
function ParosE(a:number):boolean{
    if (a%2==0) return true;
    else return false;
}

//Prímszám generátor
//Határérték bemeneti paraméter(hatar1, hatar2)
//Egész szám értékkel térjen vissza, ami egy prímszám!
function PrimGenerator(hatarEgy:number,hatarKetto:number):number{
    let also:number;
    let felso:number;
    if (hatarEgy < hatarKetto) {
        also = hatarEgy;
        felso = hatarKetto;
    }
    else {
        also = hatarKetto;
        felso =hatarEgy;
    }
    let probalkozasokSzama:number=0;
    let sikeresGeneralas:boolean=false;
    let generaltSzam:number;
    do{
        generaltSzam=Math.round(Math.random()*(felso-also)+also);
        probalkozasokSzama++;
        let oszto:number=0;
        for(let i=1;i<=generaltSzam;i++)
        {
            if(generaltSzam%i==0){
                oszto++;
            }
        }
        if (oszto==2)
        {
            sikeresGeneralas=true;
        }
    }while(sikeresGeneralas==false && probalkozasokSzama<100)
    return generaltSzam;
}