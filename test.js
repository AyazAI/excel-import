let unique_sub_cat = ["a", "b", "c"];

let names = new Object();

unique_sub_cat.forEach((sub_cat) => {
  names[sub_cat] = [];
});

console.log(names);

console.log(names.a.push("jjj"));
console.log(names.a);
console.log(names.b);
console.log(names.c);
