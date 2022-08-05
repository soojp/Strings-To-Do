function removeBlanks(str) {
  var array = str.split(" ");
  return array.join("");
}

function getDigits(str) {
  var answer = "";
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i]) === false) {
      answer += str[i];
    }
  }
  return Number(answer);
}

function acronym(str) {
  var array = str.split(" ");
  var answer = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i][0]) {
      answer += array[i][0];
    }
  }
  return answer.toUpperCase();
}

function countNonSpaces(str) {
  var string = str.split(" ").join("");
  return string.length;
}

function removeShorterStrings(arr, num) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= num) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
