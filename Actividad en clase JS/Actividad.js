"using strict";

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
    let left = mergesort(arr.slice(0, Math.trunc(n / 2)));
    let right = mergesort(arr.slice(Math.trunc(n / 2), n));

    return merge(left, right);
  }

  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    for (let k = 0; k < left.length + right.length; k++) {
      if (
        (left[i] < right[j] || right[j] == undefined) &&
        left[i] != undefined
      ) {
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
}

const Pregunta5 = function (vector1, vector2) {
  return `suma: ${vector1.sum(vector2)}\nresta: ${vector1.sub(
    vector2
  )}\nmagnitude vec1: ${vector1.magnitude()} magnitude vec2: ${vector2.magnitude()}\nscalar vec1: ${vector1.multiByScalr(
    2
  )} scalar vec2: ${vector.multiByScalar(5)}`;
};

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
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log("--------- Pregunta 1");
  console.log(Pregunta1("abcabcabc"));
  console.log(Pregunta1("jkljkljj"));
  console.log(Pregunta1("123123111"));

  console.log("--------- Pregunta 2");
  console.log(Pregunta2([1, 4, 6, 2, 6, 2, 6, 8, 4]));
  console.log(Pregunta2(["f", "e", "g", "i", "r", "p", "q"]));
  console.log(Pregunta2([132, 135, 753, 924, 472, 482]));

  console.log("--------- Pregunta 3");
  console.log(Pregunta3([1, 4, 6, 2, 6, 2, 6, 8, 4]));
  console.log(Pregunta3(["f", "e", "g", "i", "r", "p", "q"]));
  console.log(Pregunta3([132, 135, 753, 924, 472, 482]));

  console.log("--------- Pregunta 4");
  console.log(
    Pregunta4_1([1, 4, 6, 2, 6, 2, 6, 8, 4]),
    Pregunta4_2([1, 4, 6, 2, 6, 2, 6, 8, 4])
  );
  console.log(
    Pregunta4_1(["f", "e", "g", "i", "r", "p", "q"]),
    Pregunta4_2(["f", "e", "g", "i", "r", "p", "q"])
  );
  console.log(
    Pregunta4_1([132, 135, 753, 924, 472, 482]),
    Pregunta4_2([132, 135, 753, 924, 472, 482])
  );

  console.log("--------- Pregunta 5");
  let vector1_1 = new Vector(3, 4, 5);
  let vector2_1 = new Vector(6, 7, 8);
  let vector1_2 = new Vector(1, 4, 4);
  let vector2_2 = new Vector(6, 7, 8);
  let vector1_3 = new Vector(3, 4, 5);
  let vector2_3 = new Vector(6, 7, 8);
  console.log(Pregunta5());

  console.log("--------- Pregunta 6");
  console.log(Pregunta6());

  console.log("--------- Pregunta 7");
  console.log(Pregunta7());

  console.log("--------- Pregunta 8");
  console.log(Pregunta8());

  console.log("--------- Pregunta 9");
  console.log(Pregunta9());

  console.log("--------- Pregunta 10");
  console.log(Pregunta10());
};

main();
