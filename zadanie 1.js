var result = prompt('Введите значение: ');
result++;
console.log(typeof result);
if (isNaN(result) == true) {
  console.log("Упс, кажется, вы ошиблись");
}
else {
  if (result % 2) {
    console.log('Число четное');
  }
  else {
    console.log('Число нечетное');
  }
}