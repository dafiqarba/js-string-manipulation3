/*
Soal 1 = buat pattern square dengan karakter asterisk
Soal 2 = buat pattern square dengan nomor ganjil (baris ganjil) dan fibonacci (baris genap)
Soal 3 = buat pattern square dengan nomor nomor-huruf (baris ganjil) dan fibonacci (baris genap)
*/


document.querySelector(".button").addEventListener("click", () => {
  n = +document.querySelector(".input").value;

  console.log(printSquare(n, generateNumAl(n), generateFibo(n)));
});

// Generate square pattern with sequence of number / alphabet
function printSquare(n, s1, s2) {
  let pattern = "";

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      pattern += row % 2 === 0 ? s1[col] + " " : s2[col] + " ";
    }
    pattern += "\n";
  }
  console.log("n = " + n);
  return pattern;
}

// Generate sequence of fibonacci
function generateFibo(n) {
  let fiboNum = [];
  let prevNum = 1;
  let currentNum = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum = prevNum + currentNum;
    prevNum = currentNum;
    currentNum = sum;
    fiboNum.push(sum);
  }
  return fiboNum;
}

// Generate sequence of numeric and alphabet
function generateNumAl(n) {
  let sequence = [];
  let count1 = 1;
  let count2 = 0;
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      sequence.push(count1);
      count1++;
    } else {
      sequence.push(alphabet[count2]);
      count2++;
    }
  }
  return sequence;
}

// Generate sequence of odd number
function generateOdd(n) {
  let oddNum = [];

  for (let i = 1; i < n * 2; i++) {
    if (i % 2 !== 0) {
      oddNum.push(i);
    }
  }
  return oddNum;
}

// Generate sequence of number
function generateNum(n) {
  let totalSequence = n / 2;
  let numSequence = [];

  for (let i = 0; i <= totalSequence; i++) {
    numSequence.push(i + 1);
  }
  return numSequence;
}

// Generate sequence of alphabet
function generateAlpha(n) {
  let alpSequence = [];
  let totalSequence = n / 2;

  for (let i = 0; i <= totalSequence - 1; i++) {
    alpSequence.push(alphabet[i]);
  }
  return alpSequence;
}
