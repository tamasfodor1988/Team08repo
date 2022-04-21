//Visszatérés érték és paraméter nélküli eljárás
function ILoveTypeScript() {
    document.write("Szeretem a TypeScriptet<br>");
}
//Visszatérés érték nélküli és paraméteres eljárás
function NegyzetKeruletTeruletEljaras(a) {
    var kerulet = 4 * a;
    var terulet = a * a;
    document.write("A(z) ".concat(a, " oldal\u00FA n\u00E9gyzet ker\u00FClete:").concat(kerulet, "<br>"));
    document.write("A(z) ".concat(a, " oldal\u00FA n\u00E9gyzet ter\u00FClete:").concat(terulet, "<br>"));
}
//Visszatérési értékes és paraméter nélküli függvény
function RandomGeneralo100Fuggveny() {
    return Math.round(Math.random() * 100);
}
//Visszatérési értékes és paraméteres függvény
function NegyzetKeruletFuggveny(a) {
    return 4 * a;
}
