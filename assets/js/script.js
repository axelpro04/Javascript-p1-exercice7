function touch() {
    var age = document.getElementById('age').value;
    if (age >= 18 && age < 110 ) {
        alert("Vous êtes majeur");
    } else if (age >= 1 && age < 18 ) {
        alert("Vous êtes mineur");
    } else {
        alert("Mettez une valeur comprise entre 1 et 110");
    }

}