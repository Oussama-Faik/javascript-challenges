const categories = ["Papeterie", "Accessoires", "Sacs"];

//* 1. Afficher la première catégorie
console.log(categories[0]);
//* 2. Afficher le nombre initial de catégories
console.log(categories.length)
//* 3. Ajouter "Classement" à la fin
categories.push("classement")
//* 4. Remplacer "Accessoires" par "Bureau"
categories.splice(1,1,"bureau")
//* 5. Retirer la dernière catégorie
categories.pop()
//* 6. Afficher le tableau final
console.log(categories)
