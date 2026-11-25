const produits = [
  { id: 101, nom: "Cahier", categorie: "Papeterie", prix: 20, stock: 5 },
  { id: 102, nom: "Stylo", categorie: "Papeterie", prix: 10, stock: 0 },
  { id: 103, nom: "Trousse", categorie: "Accessoires", prix: 35, stock: 3 },
  { id: 104, nom: "Sac", categorie: "Sacs", prix: 120, stock: 2 },
  { id: 105, nom: "Classeur", categorie: "Papeterie", prix: 30, stock: 4 },
];

const products = [...produits];
// console.log(products)

products.forEach((product) =>
  // console.log(`nom : ${product.nom} stock :${product.stock}`)),


let stylo = products.find(product => product.id == 102);
stylo.stock = 6
// console.log(stylo)

products.push({
  id: 106,
  nom: "Gomme",
  categorie: "Papeterie",
  prix: 5,
  stock: 8,
});
// console.log(products)
let index = products.findIndex((sac) => sac.id == 104);
products.splice(index, 1);
//  console.log(products)
