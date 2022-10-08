var map = {
  a: 100,
  c: 500,
  b: 50,
};

map=Object.keys(map).sort(function(a,b){return map[a]-map[b]})
console.log(map)