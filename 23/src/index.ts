// Generics constraints
type Person = {
     firstname: string
}
const details = { lastname: "Shrivastava", firstname: "Sarthak" }

 function getElement<O extends object, K extends keyof O>(obj: O, key: K) {
    return obj[key]
}
console.log(getElement(details, 'firstname'));



//  function getPerson<T>(data: T) {
//      return data
//  }
//  const details = { lastname: "Shrivastava"}
//  console.log(getPerson(details));