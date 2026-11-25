const produits = [
  { id: 101, nom: "Cahier", categorie: "Papeterie", prix: 20, stock: 5 },
  { id: 102, nom: "Stylo", categorie: "Papeterie", prix: 10, stock: 0 },
  { id: 103, nom: "Trousse", categorie: "Accessoires", prix: 35, stock: 3 },
  { id: 104, nom: "Sac", categorie: "Sacs", prix: 120, stock: 2 },
  { id: 105, nom: "Classeur", categorie: "Papeterie", prix: 30, stock: 4 },
];

let result = produits.filter((produit) => produit.stock > 0);
//  console.log(result)
let category = produits.filter(
  (produit) => produit.categorie == "Papeterie" && produit.stock > 0,
);
//  console.log(category)
