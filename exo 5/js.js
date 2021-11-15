let nombre = prompt("Entrez deux nombres à virgules");
let number = prompt("entrez un deuxième chiffre à virgule");

if (nombre === parseInt(nombre) && number === parseInt(number)) {
    alert("recommencez")
}

else {
    let result = parseInt(nombre)+ parseInt(number);
    alert(result);
}








