//Задание 1
// Выведите числа от 1 до 10 в консоль

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

let i = 10;
while (i) {
    console.log(i);
    i--;
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10

for (let i = 1; i <= 10; i++) {
    let mult = i * 5;
    console.log(`5 x ${i} = ${mult}`);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


//Задание 7
// Выведите сумму всех элементов массива используя цикл for

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";

let animals = ["Кот", "Рыба", "Лемур"]

for (let i = 0; i < animals.length; i++) {
    console.log(`${animals[i]} - прекрасное животное`);
}

//Задание 9
// Выведите символы в строке в консоль

const str = 'Hello';

for (let symbol of str) {
    console.log(symbol);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6

for (let num of array) {
    console.log(num);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split

const sentences = ['Hello, world!', 'How are you?'];

for (let sentence of sentences) {
    let wordsOf = sentence.split(' ');

    for (let word of wordsOf) {
        console.log(word);
    }
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7

let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log(sum);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль

const list = ['apple', 'banana', 'cherry'];

for (word of list) {
    console.log(word.length);
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр

const words = ['Hello', 'world', '!'];
for (let word of words) {
    let wordCapital = word.toUpperCase();
    console.log(wordCapital);
}

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes

const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let vowel of greeting) {
    if (vowels.includes(vowel)) {
        vowelCount++;
    }
}
console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними

const words = ['Hello', 'world', '!'];
const sentence = words.join(' ');
console.log(sentence);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while

let number = 1;
while (number <= 10) {
    console.log(number);
    number++;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while

let num = 10;
while (num >= 1) {
    console.log(num);
    num--;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break

const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

for (let num of allNumbers) {
    if (num < 0) {
        break;
    }
    console.log(num);
}


//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while

onst random = [2, 4, 6, -3, 8, 10];
let i = 0;

do {
    console.log(random[i]);
    i++;
} while (random[i] >= 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

let num = 1;
do {
    if (num % 3 !== 0) {
        console.log(num);
    }
    num++;
} while (num <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

let sum = 0;

for (; ;) {
    const input = +prompt(`Введите случайное число`);
    sum = sum + input;
    if (sum > 100) {
        break
    }
}
console.log(sum);

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

function changeHeaderColor() {
    const header = document.querySelectorAll('h4');

    for (let i = 0; i < header.length; i++) {
        header[i].classList.add('hBlue') //добавила класс 'hBlue' в style.css
    }
}

changeHeaderColor();

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet

let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

for (let i = 0; i < 6; i++) {
    let randomLetter = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomLetter];
}

console.log(randomString);