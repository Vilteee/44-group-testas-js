console.log("labas");

console.log(' 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)');
const a = 5;
const b = 10;
console.log(a > b ? 'a didesnis' : a === b ? 'jie lygus' : 'b didesnis')
console.log(' 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)');

for (let index = 1; index <= 10; index++) {
    console.log(index);
}

console.log(' 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)');

for (let index = 0; index <=10; index+=2) {
    console.log(index);
}

console.log(' 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)');
const minNumber = 1;
const maxNumber = 10;
for (let index = 1; index <=5; index++) {
    console.log(Math.floor(Math.random() * (maxNumber - minNumber) + minNumber));;
    
}

console.log(' 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)')
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
while (randomNumber !== 5) {
    console.log(randomNumber);
    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}
console.log(randomNumber);


console.log(' 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)');

let array = [];
const arrayLength = Math.floor(Math.random() * (30 - 20 + 1) + 20);
for (let index = 0; index < arrayLength; index++) {
   array.push(Math.floor(Math.random() * (30 - 10) + 10));
}
console.log(array);

let maxNum = array[0];

for (let index = 1; index < array.length; index++) {
    if( array[index] > maxNum) {
        maxNum = array[index]; 
    }
}
console.log(maxNum);

console.log(' 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)')

let randomLetters = "";
let alphabet = "ABCD";
let objectOccurencies ={};
for (let index = 0; index < 100; index++) {
    const letterIndex = Math.floor(Math.random()*alphabet.length);
    randomLetters += alphabet[letterIndex];
    if (!objectOccurencies[alphabet[letterIndex]]) {
        objectOccurencies[alphabet[letterIndex]] = 1;
    } else {
        objectOccurencies[alphabet[letterIndex]] = objectOccurencies[alphabet[letterIndex]] + 1;
    }
    
}
console.log(objectOccurencies);

console.log(' 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)')

function lygineSuma (param1, param2) {

    if (typeof param1 === Number && typeof param2 === Number) {
        const sumOfParam =  param1 + param2;
        if (sumOfParam % 2 === 0) {
            return sumOfParam;
        } else {
            return "suma nelyginė";
        }

    } else if (Array.isArray(param1) && Array.isArray(param2)) {
        const sumOfParam =  param1.length + param2.length;
        if (sumOfParam % 2 === 0) {
            return sumOfParam;
        } else {
            return "suma nelyginė";
        }
    } else {
        return "abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas)";
    }
    


}

console.log();

console.log(lygineSuma(1, 2));
console.log(lygineSuma([1, 2], [3, 4]));
console.log(lygineSuma(1, [1, 2]));

console.log(' 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis. skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)')

console.log(' 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)')
