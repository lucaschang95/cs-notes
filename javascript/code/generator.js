function* selfAdd(start, end) {
  let curr = start;
  while (curr <= end) {
    yield curr;
    curr++;
  }
}


let test = selfAdd(0, 5);
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
