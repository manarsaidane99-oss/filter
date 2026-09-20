function nombresPairs(nombres) {
  return nombres.filter(nombre=>{ return nombre%2===0})
}

console.log(nombresPairs([1,2,3,4,5,6]))

function multiplesDeTrois(nombres) {
  return nombres.filter(nombre=>{ return nombre%3===0})
}

console.log(multiplesDeTrois([1,3,4,6,9,10]))

function nombresPositifs(nombres) {
  return nombres.filter(nombre=>{ return nombre>0})
}

console.log(nombresPositifs([-3,2,-1,5,0]))

function longueurPaire(chaines) {
  return chaines.filter(chaine=>{ return chaine.length%2===0})
}

console.log(longueurPaire(["chat","chien","lion"]))