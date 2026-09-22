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

function nombresImpairs(nombres) {
  return nombres.filter(nombre=>{ return nombre%2!==0})
}
console.log(nombresImpairs([1,2,3,4,5,6]))

function nombresNegatifs(nombres) {
  return nombres.filter(nombre=>{ return nombre<0})
}
console.log(nombresNegatifs([-3,2,-1,5,0]))

function superieursASix(nombres) {
  return nombres.filter(nombre=>{ return nombre>6})
}
console.log(superieursASix([1,2,3,8,7,6]))

function commenceParCaractere(chaines, caractere) {
  return chaines.filter(chaine=>{ return chaine[0]===caractere})
}

let mots = 'the quick brown fox jumps over the lazy dog'.split(' ')
console.log(commenceParCaractere(mots, 'q'))
console.log(commenceParCaractere(mots, 't'))

function indexPairEtLongueurPaire(chaines) {
   return chaines.filter((chaine,index)=>{ return (chaine.length%2===0)&&(index%2===0)})
}
console.log(indexPairEtLongueurPaire(['lion','monkey','aardvaark','cat','doge']))

console.log(indexPairEtLongueurPaire(['red','green','purple','blue','yellow']))


function deplacerZeros(nombres) {
  let nonzero= nombres.filter(nombre=>{return (nombre!==0)})
  let zero= nombres.filter(nombre=>{return (nombre===0)})
  return nonzero.concat(zero)
}

console.log(deplacerZeros([2,0,3,0,40,3,6,0,10,11]))