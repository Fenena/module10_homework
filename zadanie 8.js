let map = new Map([["ать", "два"], ["цветик", "семицветик"], ["key1", "value1"], [101, 6]]);
for (let x of map.keys()) {
  console.log("Ключ - " + x + ", значение - " + map.get(x));
}