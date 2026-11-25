let units = produits.reduce((acc, next) => acc + next.stock, 0);
// console.log(units)
let totalPrix = produits.reduce((acc, next) => {
  return acc + (next.prix * next.stock);
}, 0);
// console.log(totalPrix)
