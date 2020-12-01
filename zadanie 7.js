var arr = [2, 2, 2, 3, 3, 7, 0, 0, "2", null, NaN];
var chet = 0, nechet = 0, nul = 0;
for (var i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number' && isNaN(arr[i]) == false) {
    if (arr[i] % 2) {
      chet = chet + 1;
    }
    else {
      if (arr[i] == 0) {
        nul = nul + 1;
      }
      else {
        nechet = nechet + 1;
      }
    }
  }
}
console.log("Нулей в массиве: " + nul + ". Четных чисел в массиве: " + chet + ". Нечетных чисел в массиве: " + nechet + ".");
