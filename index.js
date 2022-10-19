//Créer un fichier pour enregistrer les données générer
var fileSystem = require('fs');
// Ajouter la library xml-js
var xmlJs = require('xml-js');
// créer notre objet
var student = [];
student.push({
    id : 1,
    name : "issam",
    university : "UM5",
    study : "Data"
});
student.push({
    id : 2,
    name : "rachid",
    university : "UM5",
    study : "IOT"
});
student.push({
    id : 3,
    name : "hassan",
    university : "EMSI",
    study : "Network"
});
student.push({
    id : 4,
    name : "achraf",
    university : "UM5",
    study : "Maths"
});

//Configuration en format json
var jsonData = JSON.stringify(student);

//Configuration en format xml
var options = {compact : true, spaces : 4};
var xmlData = xmlJs.js2xml(student, options);
//Affichage
console.log({jsonData, xmlData});
// Enregistrer les données dans fileSystem -> après l'éxecution de code un fichier devient générer et qui s'appelle data.json
fileSystem.writeFileSync('data.json',jsonData);
fileSystem.writeFileSync('data.xml',xmlData);