const boutique = {
  nom: "Stock & Fournitures",
  ville: "Youssoufia",
  ouverte: true,
};

//* Affiche le nom et la ville de la boutique.
console.log(boutique.ville)
console.log(boutique.nom)
//*Ajoute la propriété devise avec la valeur "MAD".
boutique.devise ="MAD"
//* Passe ouverte à false et affiche le statut « Fermée » à partir de cette valeur.
boutique.ouverte= false
if(boutique.ouverte == false){
    console.log("boutique fermee")
}else{
    console.log("boutique ouverte")
}