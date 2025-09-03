var masina ={
    marca : "Skoda",
    model: "Octavia",
    anFabricatie : 2007,
    kmParcusi: 200109
};

console.log(masina.anFabricatie)
console.log(masina.kmParcusi)
console.log(masina.model)

var input = {
    type : "text",
    value : "Ana are mere"
}

function showInputValue() {
    var myInput = document.getElementById("my-input");
    console.log(myInput.value)
}

function calculeazaSuma() {
    var primulnumar = Number(document.getElementById("first-number").value);
    var alDoileaNumar = Number(document.getElementById("second-number").value);

    var suma = primulnumar + alDoileaNumar

    document.getElementById("output").innerHTML = "Suma dintre " + primulnumar + " si " + alDoileaNumar + " este " + suma;
}