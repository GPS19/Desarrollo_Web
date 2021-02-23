"using strict";

const Pregunta1 = function (palabra) {
  while(palabra != "") {
    if (palabra.indexOf(palabra[0]) === palabra.lastIndexOf(palabra[0])) {
      return palabra[0];
    }
    palabra = palabra.split(palabra[0]).join("");
  }
  return false;
};

const swap = (i, j, arr) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const Pregunta2 = function (arr) {
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
  return arr;
};

const Pregunta3 = function (arr) {
  function mergesort(arr) {
    let n = arr.length;
    if (n <= 1) {
      return arr;
    }
    let left = mergesort(arr.slice(0, Math.trunc(n / 2)));
    let right = mergesort(arr.slice(Math.trunc(n / 2), n));

    return merge(left, right);
  }

  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    for (let k = 0; k < left.length + right.length; k++) {
      if (left[i] < right[j] || right[j] == undefined) {
        result.push(left[i]);
        i += 1;
      } else {
        result.push(right[j]);
        j += 1;
      }
    }
    return result;
  }
  return mergesort(arr);
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
    return new Vector(
      this.x / magnitude,
      this.y / magnitude,
      this.z / magnitude
    );
  }
  multiByScalar(scalar) {
    return new Vector(this.x * scalar, this.y * scalar, this.z * scalar);
  }
  print_values() {
    return `x: ${this.x}, y: ${this.y}, z: ${this.z}`;
  }
}

const Pregunta5 = function (vector1, vector2) {
  return `suma: ${vector1.sum(vector2).print_values()}\nresta: ${vector1.sub(
    vector2
  ).print_values()}\nmagnitude vec1: ${vector1.magnitude()} magnitude vec2: ${vector2.magnitude()}\nscalar vec1: ${vector1.multiByScalar(2).print_values()} scalar vec2: ${vector2.multiByScalar(5).print_values()} \n`;
};

const Pregunta6 = function (a, b) {
  let current = 0;
  if (a > b) {
    current = b;
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
  return false;
};

const Pregunta8 = function (palabra) {
  let dict = { a: 4, b: 8, e: 3, i: 1, l: 1, o: 0, s: 5, t: 7, z: 2 };
  palabra.toLowerCase();
  let newWord = "";
  for (let i = 0; i < palabra.length; i++) {
    if (dict[palabra[i]] != undefined) {
      newWord += dict[palabra[i]];
    } else {
      newWord += palabra[i];
    }
  }
  return newWord;
};

const Pregunta9 = function (num) {
  let arr = [num];
  let n = Math.ceil(num / 2);
  while (n !== 1) {
    if (num % n === 0) {
      arr.unshift(n);
    }
    n--;
  }
  arr.unshift(1);
  return arr;
};

const Pregunta10 = function (arr) {
  let arr2 = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
};

const main = function () {
  console.log("\n--------- Pregunta 1 ---------\n");
  console.log(`abacddbec: \t${Pregunta1("abacddbec")}`);
  console.log(`jkljljj: \t${Pregunta1("jkljljj")}`);
  console.log(`123123111: \t${Pregunta1("123123111")}`);

  console.log("\n--------- Pregunta 2 ---------\n");
  console.log(`[1, 4, 6, 2, 6, 2, 6, 8, 4, 4, 10]: \t${Pregunta2([1, 4, 6, 2, 6, 2, 6, 8, 4, 4, 10])}`);
  console.log(`["f", "e", "g", "i", "r", "p", "q"]: \t${Pregunta2(["f", "e", "g", "i", "r", "p", "q"])}`);
  console.log(`[132, 135, 753, 924, 472, 482, 562]: \t${Pregunta2([132, 135, 753, 924, 472, 482, 562])}`);

  console.log("\n--------- Pregunta 3 ---------\n");
  console.log(`[1, 4, 6, 2, 6, 2, 6, 8, 4, 4, 10]: \t${Pregunta3([1, 4, 6, 2, 6, 2, 6, 8, 4, 4, 10])}`);
  console.log(`["f", "e", "g", "i", "r", "p", "q"]: \t${Pregunta3(["f", "e", "g", "i", "r", "p", "q"])}`);
  console.log(`[132, 135, 753, 924, 472, 482, 563]: \t${Pregunta3([132, 135, 753, 924, 472, 482, 562])}`);

  console.log("\n--------- Pregunta 4 ---------\n");
  console.log( `[1, 4, 6, 2, 6, 2, 6, 8, 4, 4, 10]: \t
    ${Pregunta4_1([1, 4, 6, 2, 6, 2, 6, 8, 4, 4, 10])}  
    ${Pregunta4_2([1, 4, 6, 2, 6, 2, 6, 8, 4, 4, 10])}`);
  console.log( `["f", "e", "g", "i", "r", "p", "q"] \t
    ${Pregunta4_1(["f", "e", "g", "i", "r", "p", "q"])} 
    ${Pregunta4_2(["f", "e", "g", "i", "r", "p", "q"])}`);
  console.log(`[132, 135, 753, 924, 472, 482, 563] \t
    ${Pregunta4_1([132, 135, 753, 924, 472, 482, 563])} 
    ${Pregunta4_2([132, 135, 753, 924, 472, 482, 563])}`);

  console.log("\n--------- Pregunta 5 ---------\n");
  let vector1_1 = new Vector(3, 4, 5);
  let vector2_1 = new Vector(6, 7, 8);
  let vector1_2 = new Vector(2, -3, -1);
  let vector2_2 = new Vector(-5, -10/3, 0);
  let vector1_3 = new Vector(3, 4, 5);
  let vector2_3 = new Vector(6, 7, 8);
  console.log(`Vector1: ${vector1_1.print_values()} Vector2: ${vector2_1.print_values()} \n${Pregunta5(vector1_1, vector2_1)}`);
  console.log(`Vector1: ${vector1_2.print_values()} Vector2: ${vector2_2.print_values()} \n${Pregunta5(vector1_2, vector2_2)}`);
  console.log(`Vector1: ${vector1_3.print_values()} Vector2: ${vector2_3.print_values()} \n${Pregunta5(vector1_3, vector2_3)}`);

  console.log("\n--------- Pregunta 6 ---------\n");
  console.log(`a: 33 b: 45     \t${Pregunta6(33, 45)}`);
  console.log(`a: 26 b: 94     \t${Pregunta6(26, 94)}`);
  console.log(`a: 2016 b: 3462 \t${Pregunta6(2016, 3462)}`);

  console.log("\n--------- Pregunta 7 ---------\n");
  console.log(`Vector1: ${vector1_1.print_values()} Vector2: ${vector2_1.print_values()} \n${Pregunta7(vector1_1, vector2_1)}`);
  console.log(`Vector1: ${vector1_2.print_values()} Vector2: ${vector2_2.print_values()} \n${Pregunta7(vector1_2, vector2_2)}`);
  console.log(`Vector1: ${vector1_3.print_values()} Vector2: ${vector2_3.print_values()} \n${Pregunta7(vector1_3, vector2_3)}`);

  console.log("\n--------- Pregunta 8 ---------\n");
  console.log(`Javascript es divertido \t${Pregunta8("Javascript es divertido")}`);
  console.log(`Octavio Navarro         \t${Pregunta8("Octavio Navarro")}`);
  console.log(`Queremos regresar a c++ \t${Pregunta8("Queremos regresar a c++")}`);
  
  console.log("\n--------- Pregunta 9 ---------\n");
  console.log(`Num 12: \t${Pregunta9(12)}`);
  console.log(`Num 135: \t${Pregunta9(135)}`);
  console.log(`Num 31: \t${Pregunta9(31)}`);

  console.log("\n--------- Pregunta 10 ---------\n");
  console.log(`[1, 0, 1, 1, 0, 0]:                  \t${Pregunta10([1, 0, 1, 1, 0, 0])}`);
  console.log(`["f", "e", "g", "f", "e", "e", "g"]: \t${Pregunta10(["f", "e", "g", "f", "e", "e", "g"])}`);
  console.log(`[0, 0, 0, 0, 0]:                     \t${Pregunta10([0, 0, 0, 0, 0])}`);
};

main();
