const prompt = require("prompt-sync")();

let personas = [];
let cantidad = parseInt(prompt("Ingrese el número de personas a registrar: "));

for (let i = 0; i < cantidad; i++) {
    let nombre = prompt(`Ingrese el nombre de la persona ${i + 1}: `);
    let edad = parseInt(prompt(`Ingrese la edad de ${nombre}: `));
    let nota = parseFloat(prompt(`Ingrese la nota de ${nombre}: `));
    personas.push([nombre, edad, nota]);
}

console.log("\nListado de personas ingresadas:");
console.table(personas);

let personasOrdenadas = [...personas].sort((a, b) => b[2] - a[2]);

console.log("\nListado ordenado por nota (de mayor a menor):");
console.table(personasOrdenadas);
