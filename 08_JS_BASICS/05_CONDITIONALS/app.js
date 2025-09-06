// if(conditie)  {
//     // cod care se executa daca conditia este adevarata
// }

// if(conditie) {

// } else {
//     // cod care se executa daca conditia este falsa
// }

// if (conditie1) {
//     // cod care se executa daca conditia1 este adevarata
// } else if (conditie2) {
//     // cod care se executa daca conditia2 este adevarata
// } else if(conditie3) {
//     // cod care se executa daca conditia3 este adevarata
// } else if (conditie4) {
//     // cod care se executa daca conditia4 este adevarata
// }

var inputCapacitateCilindrica = document.getElementById("capacitate-cilindrica");
var paragradRezultat = document.getElementById("rezultat");

function calculeazaImpozitAuto() {
    var impozitAuto = 0;
    var capacitateCilindrica = Number(inputCapacitateCilindrica.value);

    if (capacitateCilindrica <= 1600) {
        impozitAuto = (capacitateCilindrica / 200) * 10;
    } else if (capacitateCilindrica > 1600 && capacitateCilindrica <= 2000) {
        impozitAuto = (capacitateCilindrica / 200) * 28;
    } else if (capacitateCilindrica > 2000 && capacitateCilindrica <= 2600) {
        impozitAuto = (capacitateCilindrica / 200) * 107;
    } else if (capacitateCilindrica > 2600 && capacitateCilindrica <= 3000) {
        impozitAuto = (capacitateCilindrica / 200) * 215;
    } else if (capacitateCilindrica > 3000) {
        impozitAuto = (capacitateCilindrica / 200) * 434;
    }

    paragradRezultat.innerHTML = "Aveti de platit " + impozitAuto + "lei";
}