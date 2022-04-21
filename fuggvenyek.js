"use strict";
exports.__esModule = true;
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
function TeglalapKeruletTeruletEljaras(a, b) {
    var kerulet = (a + b) * 2;
    var terulet = a * b;
    document.write("<br>A(z) ".concat(a, " \u00E9s ").concat(b, " oldal\u00FA t\u00E9glalap ker\u00FClete:").concat(kerulet, "<br>"));
    document.write("A(z) ".concat(a, " \u00E9s ").concat(b, " oldal\u00FA t\u00E9glalap ter\u00FClete:").concat(terulet, "<br>"));
}
//Visszatérési értékes és paraméter nélküli függvény
function RandomGeneralo100Fuggveny() {
    return Math.round(Math.random() * 100);
}
//Visszatérési értékes és paraméteres függvény
function NegyzetKeruletFuggveny(a) {
    return 4 * a;
}
//Git Push léci az eredményeteket!!
//1) git add .
//2) git commit -m "typescript függvények"
//3) git pull
//4) git push
