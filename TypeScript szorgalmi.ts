//Téglalap kerület-terület Tuple segítségével
function TeglalapKeruletTeruletTuple(a:number,b:number):[number, number]{
    var TeglalapKeruletTerulet:[number, number]; //első érték Kerület, második Terület
    return [(a+b)*2,a*b];
}