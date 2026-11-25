let result = produits.filter(
  (produit) => produit.categorie == "Papeterie" && produit.stock > 0,
);
console.log(result);

let mapresult = result.map((product) => product.nom);
console.log(mapresult);

let total = result.reduce((acc, next) => {
  return acc + next.stock * next.prix;
}, 0);
console.log(total + "DH");
