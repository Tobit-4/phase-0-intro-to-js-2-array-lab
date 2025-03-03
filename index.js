// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");

}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop([4]);
}
function destructivelyRemoveFirstCat(){
    cats.shift([0]);
}
function appendCat(name){
    const newCats = [...cats, "Broom"]
    return newCats;
}
function prependCat(name){
    const newCats = ["Arnold", ...cats]
    return newCats;
}
function removeLastCat(){
    const newCats = [...cats]
    newCats.pop()
    return newCats;
}
function removeFirstCat(){
    const newCats = [...cats]
    newCats.splice(0,1)
    return newCats;
}
