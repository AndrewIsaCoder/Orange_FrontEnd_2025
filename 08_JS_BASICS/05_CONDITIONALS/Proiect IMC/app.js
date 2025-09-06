var inputGreutate = document.getElementById("greutate");
var inputInaltime = document.getElementById("inaltime");
var paragrafRezultat = document.getElementById("text-rezultat");

console.log("dfdfddf");

function calculeazaImc() {
  var greutate = Number(inputGreutate.value);
  var inaltime = Number(inputInaltime.value);
  var imc = greutate / (inaltime/100) ** 2;
  var imcAfisat = imc.toFixed(2);

  if (imc < 18.5) {
    paragrafRezultat.innerHTML =
      "IMC sub " + imcAfisat +
      ". Risc pentru sănătate: ridicat. Această valoare indică riscuri pentru sănătatea ta, este mult prea mică pentru o sănătate optimă.";
  } else if (imc >= 18.5 && imc <= 24.9) {
    paragrafRezultat.innerHTML =
      "IMC " + imcAfisat + ". Risc pentru sănătate: minim/scăzut.";
  } else if (imc >= 25 && imc <= 29.9) {
    paragrafRezultat.innerHTML =
      "IMC " + imcAfisat + ". Risc pentru sănătate: scăzut/moderat.";
  } else if (imc >= 30 && imc <= 34.9) {
    paragrafRezultat.innerHTML =
      "IMC " + imcAfisat +
      ". Risc pentru sănătate: moderat/ridicat. Acesta e un semn de avertisment: schimbă-ți dieta acum!";
  } else if (imc >= 35) {
    paragrafRezultat.innerHTML =
      "IMC " + imcAfisat +
      ". Risc pentru sănătate: ridicat. Greutatea iți afectează în mod radical sănătatea. Scapă de surplusul de greutate!";
  }
}
