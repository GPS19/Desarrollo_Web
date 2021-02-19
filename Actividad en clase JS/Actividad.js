"using strict";

/*
1.- Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'

2.- Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.

3.- Escribe una función que implemente el algoritmo 'merge-sort' para ordenar una lista de números.

4.- Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.

Usando la definición de clase de Javascript ES6, crea una clase que se llame 'Vector' que represente un vector de 3 dimensiones. La clase debe de poder sumar y restar vectores, obtener su magnitud, obtener el vector unitario, y multiplicar por un escalar.

Escribe una función que calcule el máximo común divisor de dos números.

Usando ojetos de tu clase 'Vector', crea una función que reciba dos vectores, y que indique si esos vectores son ortogonales o no.
Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].

Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
*/

const Pregunta1 = function (palabra_) {
  var palabra = palabra_.toLowerCase();
  for (var i = 0; i < palabra.length; i++) {
    if (palabra.indexOf(palabra[i]) !== palabra.lastIndexOf(palabra[i])) {
      return false;
    }
  }
  return true;
};

const swap = (i, j, arr) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const Pregunta2 = function (arr) {
  // El array que mandemos tiene que ser let o var
  for (let i = 0; i < arr.length; i++) {
    let no_swap = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        no_swap = false;
      }
    }
    if (no_swap == true) break;
  }
};

const Pregunta3 = function (arr) {
  function mergesort(arr) {
    let n = arr.length;
    if (n <= 1) {
      return arr;
    }
    left = mergesort(arr.slice(0, Math.trunc(n / 2)));
    right = mergesort(arr.slice(Math.trunc(n / 2), n));

    return merge(left, right);
  }

  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    for (let k = 0; k < left.length + right.length; k++) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i += 1;
      } else {
        result.push(right[j]);
        j += 1;
      }
    }
    return result;
  }
  mergesort(arr);
};

const Pregunta4_1 = function (arr) {
  let arr2 = new Array();
  for (let i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
  }
  return arr2;
};

const Pregunta4_2 = function (arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let temp1 = arr[i];
    let temp2 = arr[j];
    arr[j] = temp1;
    arr[i] = temp2;
    i++;
    j--;
  }
  return arr;
};

const Pregunta4 = function (arr) {
  Pregunta4_1(arr);
  Pregunta4_2(arr);
};

//Pregunta 5
class Vector {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  sum(vector) {
    let xSum = this.x + vector.x;
    let ySum = this.y + vector.y;
    let zSum = this.z + vector.z;
    return new Vector(xSum, ySum, zSum);
  }
  sub(vector) {
    let xSub = this.x - vector.x;
    let ySub = this.y - vector.y;
    let zSub = this.z - vector.z;
    return new Vector(xSub, ySub, zSub);
  }
  magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }
  unit() {
    let magnitude = this.magnitude();
    return Vector(this.x / magnitude, this.y / magnitude, this.z / magnitude);
  }
  multiByScalar(scalar) {
    return new Vector(this.x * scalar, this.y * scalar, this.z * scalar);
  }
}

const Pregunta6 = function (a, b) {
  let current = 0;
  if (a > b) {
    let current = b;
  } else {
    current = a;
  }

  for (i = b; i > 0; i--) {
    if (a % i == 0 && b % i == 0) {
      return i;
    }
  }
};

const Pregunta7 = function (vector1, vector2) {
  let x = vector1.x * vector2.x;
  let y = vector1.y * vector2.y;
  let z = vector1.z * vector2.z;

  if (x + y + z == 0) {
    return true;
  }
};

const Pregunta8 = function (palabra) {
  let letters = ["a", "b", "e", "i", "l", "o", "s", "t", "z"];
  let dict = [4, 8, 3, 1, 1, 0, 5, 7, 2];
};

const main = function () {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  Pregunta1();
  Pregunta2();
  Pregunta3();
  Pregunta4();
  Pregunta5();
  Pregunta6();
  Pregunta7();
  Pregunta8();
};

main();
