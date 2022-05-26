//ARRRAY MAP
const names = ["Julia", "Romeo", "Roberto", "Julieta"];

const may = names.map((z) => z.toUpperCase());

console.log(may);

const things = [
  {
    id: 0,
    title: "whiskers on kittens",
    favorite: true,
    points: 97,
  },
  {
    id: 1,
    title: "raindrops on roses",
    favorite: true,
    points: 77,
  },
  {
    id: 2,
    title: "brown paper packages tied up with string",
    favorite: true,
    points: 87,
  },
  {
    id: 3,
    title: "djjojiojiobite",
    favorite: false,
    featured: "true",
    points: 12,
  },
  {
    id: 4,
    title: "bee sting",
    favorite: false,
    points: 50,
  },
];

//FILTER
// const arr = arr.filter(callBackFunc);
const myFav = things.filter((t) => t.favorite);
console.log(myFav);

const cincuenta = things.filter((p) => p.points >= 50);
console.log(cincuenta);

//FIND
// const value = arr.find(callBackFunc);

const featu = things.find((w) => w.featured);
console.log(featu);
