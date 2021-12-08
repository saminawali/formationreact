
const arrayExample=["a", "b", "c", "d", "e", "f"]

const stringExample = "Formation Orsys en React"
// exemple de arrow function
const copyArray =(arr)=>arr.slice(0)



console.log("Ex1: " + copyArray(arrayExample ))











function firstElements (arr, n){
    return arr.slice(0,n)
}
console.log("Ex2: " + firstElements(arrayExample, 3))

function lastElements(arr, n) {
  return arr.slice(-n)
}
console.log("Ex3: " + lastElements(arrayExample, 2))

function joinArray(arr){
    return arr.join()
}
console.log("Ex4: " + joinArray(arrayExample))


function sortArray(arr){
    return arr.sort((a,b)=>a-b)
}
console.log("Ex5: " + sortArray([2,3,4,1,7]))

function cleanArray(arr){
    return arr.filter(elt=>elt)
}
console.log(
  "Ex6: " +
    cleanArray([
      "a",
      "b",
      0,
      NaN,
      false,
      "c",
      null,
      "d",
      undefined,
      "",
      "e",
      "f",
    ])
)

function findElement(arr, elt){
    return arr.includes(elt)
    // return arr.findIndex(e=>e===elt)
}
console.log("Ex7: " + findElement(arrayExample, "c"))

function splitString(str){
    return str.split(" ")
}
console.log("Ex8: " + splitString(stringExample))

function extractFirstSubString(str, n){
    return str.substring(0,n)
}
console.log("Ex9: " + extractFirstSubString(stringExample, 5))

function lowerCaseUpperCase(str){
  // return str.split(" ").map((e, index)=>{
  //     if (index % 2 === 0) { //paire
  //       return e.toUpperCase()
  //     } else {
  //       return e.toLowerCase()
  //     }
  // }).join(" ")
  const ar = str.split(" ") // ["formation", "orsys","en", "react" ]
  const ar2 = ar.map((e, index) => {
    if (index % 2 === 0) {
      //paire
      return e.toUpperCase() // 'FORMATION" , "EN"
    } else {
      return e.toLowerCase() //orsys, "react"
    }
  })
  //==> ar2 = ["FORMATION", "orsys","EN", "react" ]
  return ar2.join(" ")
}

console.log("Ex10: " + lowerCaseUpperCase(stringExample))


