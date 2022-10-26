function getMedian(array) {

  const median = Math.floor(array.length / 2)

  array.sort((a,b) => a - b)

  if(array.length % 2 === 0){
    return (array[median - 1] + array[median]) / 2;
  }

  return array[median]
}


/* Énoncé */


/* Codez un algorithme qui retourne la médiane d'une série statistique */


console.log(getMedian([1,2,3,4,5]))                       // 3
console.log(getMedian([1,2,3,4]))                         // 2.5
console.log(getMedian([10,15,14,12,16,14,17,5,4,7]));     // 13
console.log(getMedian([1000,1700,850,1200,1400,1000,900,1500,1000000])); 
// Médiane   1200
// Moyenne   112 172
